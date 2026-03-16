// 全域監聽滑鼠按下事件
document.addEventListener('mousedown', function (e) {
    // 檢查點擊的是不是那條 resizer-bar
    const resizer = e.target.closest('.resizer-bar');
    if (resizer) {
        e.preventDefault();
        const container = resizer.previousElementSibling; // 找到上面的文字框
        const startY = e.clientY;
        const startHeight = container.offsetHeight;

        function onMouseMove(e) {
            // 計算移動距離並更新高度
            const newHeight = startHeight + (e.clientY - startY);
            container.style.height = newHeight + 'px';
        }

        function onMouseUp() {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
            document.body.style.cursor = 'default';
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
        document.body.style.cursor = 'ns-resize'; // 拖動時鎖定游標圖示
    }
});





/* =================  系統核心邏輯 ================= */

let currentIdx = 0;

let userAnswers = new Array(questions.length).fill(null);

let isReviewMode = false;



function initExam() {
    // 1. 準備一個暫存池
    let tempPool = [];

    // 2. 遍歷原始 questions 陣列
    // 判斷每一項是「獨立題目 {}」還是「預設題組 []」
    questions.forEach(item => {
        if (Array.isArray(item)) {
            // 如果本身就是陣列（代表你手動用 [] 包起來的 Topic）
            // 我們直接把這整個子陣列當作一個「大單元」放進暫存池
            tempPool.push({
                isGroup: true,
                content: item
            });
        } else if (item.caseId) {
            // 為了相容你原本程式碼中散落在各處但有相同 caseId 的題目
            // 這裡保留你原本的邏輯：將它們歸類
            if (!tempPool.find(p => p.caseId === item.caseId)) {
                tempPool.push({
                    caseId: item.caseId,
                    isGroup: true,
                    content: questions.filter(q => q.caseId === item.caseId)
                });
            }
        } else {
            // 一般獨立題目
            tempPool.push({
                isGroup: false,
                content: [item]
            });
        }
    });

    // 過濾掉重複抓取的 caseId 題目（僅針對散落式的舊邏輯）
    let uniquePool = [];
    let seenCaseIds = new Set();
    tempPool.forEach(p => {
        if (p.caseId) {
            if (!seenCaseIds.has(p.caseId)) {
                uniquePool.push(p);
                seenCaseIds.add(p.caseId);
            }
        } else {
            uniquePool.push(p);
        }
    });

    // 3. 打亂這個混合了「題組單元」與「單題單元」的池子
    shuffleArray(uniquePool);

    // 4. 重新攤平回原本的 questions 變數
    const finalFlatList = [];
    uniquePool.forEach(unit => {
        finalFlatList.push(...unit.content);
    });

    // 5. 更新全域變數並執行後續初始化
    questions.length = 0;
    finalFlatList.forEach(q => questions.push(q));

    userAnswers = new Array(questions.length).fill(null);
    document.getElementById('totalNum').innerText = questions.length;
    
    // 回到第一題並渲染
    currentIdx = 0;
    renderQuestion();
}



function renderQuestion() {

    const q = questions[currentIdx];

    const container = document.getElementById('questionDisplay');

   

    // 修改標題：如果是題組，顯示 Topic 名稱

    let titleHTML = `試題 ${currentIdx + 1}`;

    if (q.caseId) {

        titleHTML += ` <span style="color: #0078d4; font-size: 0.8em;">[${q.caseId}]</span>`;

    }

    document.getElementById('qTitle').innerHTML = titleHTML;

    document.getElementById('currentNum').innerText = currentIdx + 1;

    

    // 2. 按鈕顯示/隱藏邏輯 (維持不變)

    const prevBtn = document.querySelector("button[onclick='changeQ(-1)']");

    const nextBtn = document.querySelector("button[onclick='changeQ(1)']");

    const finishBtn = document.querySelector(".btn-finish");

    prevBtn.style.visibility = (currentIdx === 0) ? "hidden" : "visible";

    if (currentIdx === questions.length - 1) {

        nextBtn.style.display = "none";

        finishBtn.style.display = "inline-block";

    } else {

        nextBtn.style.display = "inline-block";

        finishBtn.style.display = "none";

    }




    // 【核心修改】頁籤與內容區域生成
    let tabsHTML = "";
    let contentHTML = "";

    if (q.exhibit) {
        tabsHTML = `
            <div class="tab-container">
                <button class="tab-btn active" onclick="switchTab(this, 'q-view', false)">Question</button>
                <button class="tab-btn" onclick="switchTab(this, 'ex-view', true)">Case Study</button>
            </div>`;
        
        contentHTML = `
            <div id="contentWrapper" class="resizable-container">
                <div id="q-view" class="content-view active question-content-scroll">${q.text}</div>
                <div id="ex-view" class="content-view question-content-scroll">${q.exhibit}</div>
                <div class="resizer-bar" onmousedown="initResize(event)"><div class="dots">● ● ● ● ●</div></div>
            </div>`;
    } else {
        // 非題組也維持同樣的結構，確保樣式一致
        contentHTML = `
            <div id="contentWrapper" class="resizable-container">
                <div class="question-content-scroll active">${q.text}</div>
                <div class="resizer-bar" onmousedown="initResize(event)"><div class="dots">● ● ● ● ●</div></div>
            </div>`;
    }

    let html = `<div id="qContainer" class="question-container active ${isReviewMode ? 'review-active' : ''}">
                ${tabsHTML}
                ${contentHTML}
                <div class="instruction">${q.instruction}</div>`;



    // --- 圖片判斷邏輯：只有當 q.image 存在且不為空字串時，才加入圖片區域 ---

    if (q.image && q.image !== "") {

        html += `<div class="img-area"><img src="${q.image}" class="question-img"></div>`;

    }

   

    if (q.type === "radio") {

        q.options.forEach(opt => {

            let checked = userAnswers[currentIdx] === opt ? "checked" : "";

            html += `<label><input type="radio" name="q" value="${opt}" ${checked} onchange="saveAns('${opt}')"> ${opt}</label><br><br>`;

        });

    } else if (q.type === "checkbox") {

        q.options.forEach(opt => {

            let checked = (userAnswers[currentIdx] || []).includes(opt) ? "checked" : "";

            html += `<label><input type="checkbox" value="${opt}" ${checked} onchange="saveCheckboxAns(this, ${q.max})"> ${opt}</label><br><br>`;

        });

    } else if (q.type === "hotspot") {
        // 如果題目有提供 hotspotHtml，就執行穿插模式
        if (q.hotspotHtml) {
            let inlineHtml = q.hotspotHtml;
            q.rows.forEach((row, rIdx) => {
                let val = (userAnswers[currentIdx] || [])[rIdx] || "";
                let selectHtml = `<select class="inline-dropdown" onchange="saveHotspotAns(${rIdx}, this.value)">
                                    <option value="">            </option>`;
                row.options.forEach(o => {
                    selectHtml += `<option value="${o}" ${val === o ? 'selected' : ''}>${o}</option>`;
                });
                selectHtml += `</select>`;
                // 將文字中的 {0}, {1} 替換成選單
                inlineHtml = inlineHtml.replace(`{${rIdx}}`, selectHtml);
            });
            html += `<div class="exam-code-block">${inlineHtml}</div>`;
        } 
        else {
            // --- 以下是你原本的功能，完全沒動 ---
            q.rows.forEach((row, rIdx) => {
                let val = (userAnswers[currentIdx] || [])[rIdx] || "";
                html += `<div style="margin-bottom:15px;"><label>${row.label}: </label>
                         <select class="inline-dropdown" onchange="saveHotspotAns(${rIdx}, this.value)"> <option value="">            </option>`;
                row.options.forEach(o => html += `<option value="${o}" ${val === o ? 'selected' : ''}>${o}</option>`);
                html += `</select></div>`;
            });
        }

    } else if (q.type === "rank") {
        let saved = userAnswers[currentIdx] || [];
        // 核心修改：根據正確答案的數量來決定右側需要幾個籃框，而非選項數量
        const targetCount = q.answer.length; 

        html += `<div class="drag-section">
                    <div class="source-box" ondrop="dropRank(event)" ondragover="allowDrop(event)">`;
        
        // 左側顯示所有「尚未被拖入」的選項
        q.options.forEach((opt, i) => {
            if (!saved.includes(opt)) {
                html += `<div class="drag-item" draggable="true" ondragstart="dragRank(event)" id="opt-${i}">${opt}</div>`;
            }
        });

        html += `</div><div class="rank-answer-box">`;
        
        // 核心修改：這裡改用 targetCount (即 answer.length) 來產生籃框
        for (let i = 0; i < targetCount; i++) {
            let content = saved[i] ? 
                `<div class="drag-item" draggable="true" ondragstart="dragRank(event)" id="saved-${i}">${saved[i]}</div>` : 
                `<span style="opacity: 0.6;">將步驟拖動至此 (步驟 ${i+1})</span>`;
                
            html += `<div class="drop-zone-rank" data-idx="${i}" ondrop="dropRank(event)" ondragover="allowDrop(event)">
                        ${content}
                     </div>`;
        }
        html += `</div></div>`;

   

    // 渲染後需要用 Timeout 補回已填入的文字（回顯功能）

    setTimeout(() => {

        let saved = userAnswers[currentIdx] || [];

        document.querySelectorAll('.drop-zone-fill').forEach((zone, i) => {

            if (saved[i]) {

                zone.innerHTML = `<span>${saved[i]}</span><span class="remove-btn" onclick="clearFill(this, ${i})">×</span>`;

            }

        });

    }, 0);

    } else if (q.type === "fill") {

        html += `<div class="drag-section">

                    <div class="source-box">`;

        q.options.forEach(opt => {

            html += `<div class="drag-item" draggable="true" ondragstart="dragFill(event)">${opt}</div>`;

        });

        html += `</div><div class="fill-text-area">${q.fillHtml}</div></div>`;

       

        // 渲染後回顯已填內容

        setTimeout(() => {

            let saved = userAnswers[currentIdx] || [];

            document.querySelectorAll('.drop-zone-fill').forEach((zone, i) => {

                if (saved[i]) {

                    zone.innerHTML = `<span>${saved[i]}</span><span class="remove-btn" onclick="clearFill(this, ${i})">×</span>`;

                    zone.style.borderStyle = "solid";

                }

            });

        }, 0);

    } else if (q.type === "matrix") {

        if (!userAnswers[currentIdx]) userAnswers[currentIdx] = new Array(q.rows.length).fill(null);

       

        html += `<table style="width:100%; border-collapse: collapse; margin-top:20px;">

                    <tr style="background:#f3f3f3;">

                        <th style="padding:10px; border:1px solid #ddd; text-align:left;">Statements</th>

                        <th style="padding:10px; border:1px solid #ddd; width:80px;">Yes</th>

                        <th style="padding:10px; border:1px solid #ddd; width:80px;">No</th>

                    </tr>`;

       

        q.rows.forEach((row, rIdx) => {

            let currentSelection = userAnswers[currentIdx][rIdx];

            html += `<tr>

                        <td style="padding:10px; border:1px solid #ddd;">${row.label}</td>

                        <td style="padding:10px; border:1px solid #ddd; text-align:center;">

                            <input type="radio" name="matrix_${currentIdx}_${rIdx}"

                                ${currentSelection === 'Yes' ? 'checked' : ''}

                                onclick="saveMatrixAns(${rIdx}, 'Yes')">

                        </td>

                        <td style="padding:10px; border:1px solid #ddd; text-align:center;">

                            <input type="radio" name="matrix_${currentIdx}_${rIdx}"

                                ${currentSelection === 'No' ? 'checked' : ''}

                                onclick="saveMatrixAns(${rIdx}, 'No')">

                        </td>

                    </tr>`;

        });

        html += `</table>`;

    }

    // 回顧模式顯示正確答案

    if (isReviewMode) {

    let isCorrect = checkIsCorrect(q, userAnswers[currentIdx]);

    let displayAns = "";



    // 針對不同題型格式化答案顯示

    if (q.type === "rank") {
            // 針對排序題，使用有序列表呈現步驟
            displayAns = `<ol style="margin: 10px 0; padding-left: 25px; line-height: 1.6;">`;
            q.answer.forEach(step => {
                displayAns += `<li>${step}</li>`;
            });
            displayAns += `</ol>`;
        }
        else if (q.type === "checkbox") {
            // 【只改這裡】複選題也比照 hotspot 加上「第幾項」並強制換行
            let ansLabels = q.answer.map((ans, i) => `第 ${i+1} 項: ${ans}`);
            displayAns = "<br>" + ansLabels.join("<br>");
        } 
        else if (q.type === "hotspot" || q.type === "matrix") {
            let ansLabels = q.rows.map((r, i) => `第 ${i+1} 項: ${r.answer}`);
            displayAns = "<br>" + ansLabels.join("<br>");
        } 
        else if (Array.isArray(q.answer)) {
            // 針對 checkbox 或其他陣列型答案
            displayAns = q.answer.join(', ');
        } 
        else {
            displayAns = q.answer;
        }

        html += `<div class="review-note ${isCorrect ? 'correct-ans' : 'wrong-ans'}">
                    <div style="font-size: 1.1em; margin-bottom: 5px;">
                        ${isCorrect ? '✓ 回答正確' : '✗ 回答錯誤'}
                    </div>
                    <strong>正確順序如下：</strong>${displayAns}
                 </div>`;
    }



    html += `</div>`;

    container.innerHTML = html;
    // 【新增這一段】確保每次渲染新題目時，預設移除 Case Study 模式，恢復短題目高度
    const qContainer = document.getElementById('qContainer');
    if (qContainer) qContainer.classList.remove('case-study-mode');
    

}



function saveAns(val) { userAnswers[currentIdx] = val; }



function saveCheckboxAns(el, max) {

    if (!userAnswers[currentIdx]) userAnswers[currentIdx] = [];

    if (el.checked) {

        if (userAnswers[currentIdx].length >= max) {

            alert(`最多選 ${max} 項`); el.checked = false; return;

        }

        userAnswers[currentIdx].push(el.value);

    } else {

        userAnswers[currentIdx] = userAnswers[currentIdx].filter(v => v !== el.value);

    }

}



function saveHotspotAns(rIdx, val) {

    // 如果這題還沒存過任何答案，先建立一個跟 row 一樣長的空陣列

    if (!userAnswers[currentIdx]) {

        userAnswers[currentIdx] = new Array(questions[currentIdx].rows.length).fill(null);

    }

    userAnswers[currentIdx][rIdx] = val;

}



function changeQ(step) {

    if (currentIdx + step >= 0 && currentIdx + step < questions.length) {

        currentIdx += step;

        renderQuestion();

    }

}



function checkIsCorrect(q, userAns) {

    if (!userAns) return false;

   

    // 判定：單選

    if (q.type === "radio") return userAns === q.answer;

   

    // 判定：複選 (不分順序，所以先排序再比對)

    if (q.type === "checkbox") {

        if (!Array.isArray(userAns)) return false;

        return JSON.stringify([...userAns].sort()) === JSON.stringify([...q.answer].sort());

    }



    // 判定：下拉選單 或 是非矩陣 (比對 rows 裡的 answer)

    if (q.type === "hotspot" || q.type === "matrix") {

        const correctArray = q.rows.map(r => r.answer);

        return JSON.stringify(userAns) === JSON.stringify(correctArray);

    }

   

    // 判定：排序題 或 填空題 (嚴格比對陣列順序)

    if (q.type === "rank" || q.type === "fill") {

        return JSON.stringify(userAns) === JSON.stringify(q.answer);

    }

   

    return false;

}



function endExam() {

    if (!confirm("確定要交卷嗎？交卷後將進入回顧模式。")) return;

    let score = 0;

    questions.forEach((q, i) => { if (checkIsCorrect(q, userAnswers[i])) score++; });

    alert(`測驗結束！您的得分：${score} / ${questions.length}`);

    isReviewMode = true;

    currentIdx = 0;

    renderQuestion();

}



// --- 拖拉排名邏輯 ---

function allowDrop(ev) { ev.preventDefault(); }



function dragRank(ev) { ev.dataTransfer.setData("rankText", ev.target.innerText); }



function dropRank(ev) {

    ev.preventDefault();

    let text = ev.dataTransfer.getData("rankText");

    let target = ev.target.closest('.drop-zone-rank, .source-box');

   

    if (!target) return;

    // 在 dropRank 函式內找到這一行並修改：
    if (!userAnswers[currentIdx]) userAnswers[currentIdx] = new Array(questions[currentIdx].answer.length).fill(null);
   

    if (target.classList.contains('drop-zone-rank')) {

        let idx = parseInt(target.getAttribute('data-idx'));

       

        // 如果已經有別的項目在裡面了

        if (target.querySelector('.drag-item')) {

            alert("此位置已有項目");

            return;

        }

       

        // 檢查這個文字是否已經在別的格子裡了（防止重複）

        let oldIdx = userAnswers[currentIdx].indexOf(text);

        if (oldIdx !== -1) userAnswers[currentIdx][oldIdx] = null;



        userAnswers[currentIdx][idx] = text;

    } else {

        // 移回左側池子

        let savedIdx = userAnswers[currentIdx].indexOf(text);

        if (savedIdx !== -1) userAnswers[currentIdx][savedIdx] = null;

    }

    renderQuestion(); // 重新渲染來刷新畫面和籃框高度

}



// --- 拖拉填空邏輯 ---

function dragFill(ev) { ev.dataTransfer.setData("fillText", ev.target.innerText); }



function dropFill(ev) {

    ev.preventDefault();

    let text = ev.dataTransfer.getData("fillText");

    let target = ev.target.closest('.drop-zone-fill');

   

    if (target) {

        let idx = parseInt(target.getAttribute('data-idx'));

       

        // 【核心改進】：根據當前題目所需的空格數初始化陣列

        if (!userAnswers[currentIdx]) {

            // 找出當前 HTML 裡有多少個空格，就建立多長的陣列

            let totalZones = document.querySelectorAll('.drop-zone-fill').length;

            userAnswers[currentIdx] = new Array(totalZones).fill(null);

        }

       

        userAnswers[currentIdx][idx] = text;

       

        target.innerHTML = `<span>${text}</span><span class="remove-btn" onclick="clearFill(this, ${idx})">×</span>`;

        target.style.borderStyle = "solid";

    }

}



function clearFill(el, idx) {

    userAnswers[currentIdx][idx] = null;

    el.parentElement.innerHTML = '';

}



function saveMatrixAns(rIdx, val) {

    if (!userAnswers[currentIdx]) {

        userAnswers[currentIdx] = new Array(questions[currentIdx].rows.length).fill(null);

    }

    userAnswers[currentIdx][rIdx] = val;

}



// 修改 checkIsCorrect 確保判定與顯示邏輯同步

function checkIsCorrect(q, userAns) {

    if (!userAns) return false;

   

    // 如果是 hotspot 或 matrix，正確答案陣列從 rows 裡面產生

    if (q.type === "hotspot" || q.type === "matrix") {

        const correctArray = q.rows.map(r => r.answer);

        return JSON.stringify(userAns) === JSON.stringify(correctArray);

    }

   

    // 其他維持不變...

    if (q.type === "radio") return userAns === q.answer;

    if (q.type === "checkbox") return JSON.stringify([...userAns].sort()) === JSON.stringify([...q.answer].sort());

    if (q.type === "rank" || q.type === "fill") return JSON.stringify(userAns) === JSON.stringify(q.answer);

   

    return false;

}

function shuffleArray(array) {

    for (let i = array.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];

    }

    return array;

}

function switchTab(btn, viewId, isCaseStudy) {
    const parent = btn.parentElement;
    parent.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const container = document.getElementById('qContainer');
    const wrapper = document.getElementById('contentWrapper');
    
    wrapper.querySelectorAll('.content-view').forEach(v => v.classList.remove('active'));
    const targetView = document.getElementById(viewId);
    targetView.classList.add('active');
    
    // 切換時自動回到頂部
    targetView.scrollTop = 0;

    if (isCaseStudy) {
        container.classList.add('case-study-mode');
    } else {
        container.classList.remove('case-study-mode');
    }
}

function initResize(e) {
    e.preventDefault();
    const container = e.target.closest('.resizable-container');
    const startHeight = container.offsetHeight;
    const startY = e.clientY;

    function doDrag(e) {
        const newHeight = startHeight + e.clientY - startY;
        // 限制最小高度為 100px，最大為 800px，避免拉壞畫面
        if (newHeight > 100 && newHeight < 800) {
            container.style.height = newHeight + 'px';
        }
    }

    function stopDrag() {
        document.removeEventListener('mousemove', doDrag);
        document.removeEventListener('mouseup', stopDrag);
        // 解決拖曳後可能產生的文字選取問題
        document.body.style.cursor = 'default';
    }

    document.addEventListener('mousemove', doDrag);
    document.addEventListener('mouseup', stopDrag);
}

initExam();

window.onload = initExam;