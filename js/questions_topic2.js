// questions_topic2.js
const topic2_questions =
// ==========================================
    // 2. 正式題庫區塊 (Topic 2)
    // ==========================================
    
    [
        {
            caseId: "Topic2",
            type: "hotspot",
            exhibit: T2_CASE_STUDY,
            text: `Topic 2, Litware, inc Case study\n\nYou need to recommend a solution to perform the network validation tasks for the platform upgrade.\nWhich tool and role should you recommend for each user? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.`,
            instruction: "Hotspot: Select the appropriate options in the answer area.",
            rows: [
                // 第一列：Admin5 的工具
                { 
                    label: "Admin5 - Tool", 
                    options: ["Microsoft Call Quality Dashboard", "Network Monitor", "Network Planner", "Network Testing Companion"], 
                    answer: "Network Planner" 
                },
                // 第二列：Admin5 的角色
                { 
                    label: "Admin5 - Role", 
                    options: ["Teams Communications Administrator", "Teams Communications Support Engineer", "Teams Communications Support Specialist"], 
                    answer: "Teams Communications Administrator" 
                },
                // 第三列：Admin6 的工具
                { 
                    label: "Admin6 - Tool", 
                    options: ["Microsoft Call Quality Dashboard", "Network Monitor", "Network Planner", "Network Testing Companion"], 
                    answer: "Microsoft Call Quality Dashboard" 
                },
                // 第四列：Admin6 的角色
                { 
                    label: "Admin6 - Role", 
                    options: ["Teams Communications Administrator", "Teams Communications Support Engineer", "Teams Communications Support Specialist"], 
                    answer: "Teams Communications Support Specialist" 
                }
            ]
        },

        // 題目編號：13 (單選題)
        {
            caseId: "Topic2",
            type: "radio",
            exhibit: T2_CASE_STUDY,
            text: `Topic 2, Litware, inc Case study\n\nYou need to implement a solution to meet the Microsoft Teams requirements for the compliance department.\nWhat should you do first?`,
            instruction: "Single Choice: Select the best answer.",
            options: [
                "A. Add all the compliance department users as members of an org-wide team.",
                "B. Add all the compliance department users to a universal security group.",
                "C. Add all the compliance department users to an Office 365 group.",
                "D. Assign the Teams Communications Support Engineer role to all the compliance department users."
            ],
            answer: "B. Add all the compliance department users to a universal security group."
        },

        // 題目編號：14 (單選題)
        {
            caseId: "Topic2",
            type: "radio",
            exhibit: T2_CASE_STUDY,
            text: `Topic 2, Litware, inc Case study\n\nYou need to configure the IP phones to meet the device requirements.\nWhat is the minimum number of configuration profiles you should create?`,
            instruction: "Single Choice: Select the best answer.",
            options: [
                "A. 1",
                "B. 2",
                "C. 3",
                "D. 4"
            ],
            answer: "B. 2"
        },

        // 題目編號：15 (Matrix Yes/No 題)
        {
            caseId: "Topic2",
            type: "matrix",
            exhibit: T2_CASE_STUDY,
            text: `Topic 2, Litware, inc Case study\n\nYou need to configure Microsoft Teams to meet the department upgrade requirements.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.`,
            instruction: "Matrix: Select Yes or No for each statement.",
            rows: [
                { label: "The Microsoft Teams upgrade policy be set to Skype for Business with Teams collaboration and meetings coexistence mode for the sales department users.", answer: "No" },
                { label: "The Microsoft Teams upgrade policy be set to Skype for Business only coexistence mode for the HR department users.", answer: "No" },
                { label: "The Microsoft Teams upgrade policy be set to Teams only coexistence mode for the IT department users.", answer: "Yes" }
            ]
        },

        // 題目編號：16 (複選題)
        {
            caseId: "Topic2",
            type: "checkbox",
            exhibit: T2_CASE_STUDY,
            text: `Topic 2, Litware, inc Case study\n\nYou need to identify the requirements for the voice pilot project.\nWhich two actions should you perform? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point. `,
            instruction: "Checkbox: Select 2 items.",
            max: 2,
            options: [
                "A. Assign an additional license and phone number to each user.",
                "B. Deploy a Session Border Controller (SBC) for Litware.",
                "C. Purchase a Calling Plan for each user.",
                "D. Create a dial plan for Litware.",
                "E. Purchase a Calling Plan for Litware."
            ],
            answer: ["A. Assign an additional license and phone number to each user.", "C. Purchase a Calling Plan for each user."]
        },

        // 題目編號：17 (複選題)
        {
            caseId: "Topic2",
            type: "checkbox",
            exhibit: T2_CASE_STUDY,
            text: `Topic 2, Litware, inc Case study\n\nYou need to configure Microsoft Teams to meet the collaboration and meeting requirements.\nWhich two actions should you perform from the Microsoft Teams admin center? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.`,
            instruction: "Checkbox: Select 2 items.",
            max: 2,
            options: [
                "A. Modify the Meeting settings.",
                "B. Create a teams policy.",
                "C. Create a meeting policy.",
                "D. Create a live events policy.",
                "E. Modify the Teams settings."
            ],
            answer: ["A. Modify the Meeting settings.", "C. Create a meeting policy."]
        },

        // 題目編號：18 (單選題)
        {
            caseId: "Topic2",
            type: "radio",
            exhibit: T2_CASE_STUDY,
            text: `Topic 2, Litware, inc Case study\n\nWhat should you recommend to meet the Microsoft Teams requirements for guest access?`,
            instruction: "Single Choice: Select the best answer.",
            options: [
                "A. From the Azure Active Directory admin center, modify the External collaboration settings to include fabrikam.com only.",
                "B. From the Microsoft 365 admin center, modify the Office 365 groups settings.",
                "C. From the External access settings in the Microsoft Teams admin center, add fabrikam.com to the Allowed list of domains.",
                "D. From the Microsoft Teams admin center, turn off org-wide guest access and manually add guest users from fabrikam.com to teams."
            ],
            answer: "A. From the Azure Active Directory admin center, modify the External collaboration settings to include fabrikam.com only."
        },

        // 題目編號：19 (單選題)
        {
            caseId: "Topic2",
            type: "radio",
            exhibit: T2_CASE_STUDY,
            text: `Topic 2, Litware, inc Case study\n\nYou need to create a team for the sales department.\nWhat should you do first?`,
            instruction: "Single Choice: Select the best answer.",
            options: [
                "A. Create an Office 365 group and modify the membership rule for the group.",
                "B. From PowerShell, run the Add-AzureAdGroupMember cmdlet.",
                "C. From PowerShell, run the New-Team cmdlet.",
                "D. Create a team and select Build a team from scratch."
            ],
            answer: "A. Create an Office 365 group and modify the membership rule for the group."
        },

        // 題目編號：20 (拖曳填空題)
        {
            caseId: "Topic2",
            type: "fill",
            exhibit: T2_CASE_STUDY,
            text: `Topic 2, Litware, inc Case study\n\nYou need to configure data retention policies for the teams. The solution must meet the data retention requirements.\nWhich content location should you include in the retention policies? To answer, drag the appropriate content locations to the correct requirements. Each content location may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content. NOTE: Each correct selection is worth one point.`,
            instruction: "Drag and Drop: Drag the appropriate content locations to the correct requirements.",
            options: ["Exchange email", "OneDrive accounts", "SharePoint sites", "Teams channel messages", "Teams chat"],
            fillHtml: `
                <div style="line-height: 1.5;">
                    Requirement1: <div class='drop-zone-fill' data-idx='0' ondrop='dropFill(event)' ondragover='allowDrop(event)'></div><br><br>
                    Requirement2: <div class='drop-zone-fill' data-idx='1' ondrop='dropFill(event)' ondragover='allowDrop(event)'></div><br><br>
                    Requirement3: <div class='drop-zone-fill' data-idx='2' ondrop='dropFill(event)' ondragover='allowDrop(event)'></div>
                </div>
            `,
            // 根據圖片答案：Req1 -> Exchange email, Req2 -> SharePoint sites, Req3 -> OneDrive accounts
            answer: ["Exchange email", "SharePoint sites", "OneDrive accounts"]
        }
    ]