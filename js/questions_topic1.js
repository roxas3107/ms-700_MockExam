const topic1_questions = 
// ==========================================
    // 1. 正式題庫區塊 (Topic 1)
    // ==========================================
    [
        {
            caseId: "Topic1",
            type: "radio",
            exhibit: T1_CASE_STUDY,
            text: `Topic 1, Contoso, Ltd Case study\n\nSecurity Requirements:\nUsers in the R&D group must be prevented from sending chat messages to users in other departments.\n\nYou need to configure the environment to meet the security requirements for the R&D group.\nWhat should you do first?`,
            instruction: "Single Choice: Select the best answer.",
            options: [
                "A. Start the information barrier policy application.",
                "B. Add an identity provider.",
                "C. Create two information barrier segments.",
                "D. Create one information barrier policy."
            ],
            answer: "C. Create two information barrier segments."
        },
        {
            caseId: "Topic1",
            type: "radio",
            exhibit: T1_CASE_STUDY,
            text: `Topic 1, Contoso, Ltd Case study\n\nSecurity Requirements:\nTo meet the company’s compliance policy, users in the sales department must continue to use on-premises Skype for Business for IM and calling only.\n\nYou need to configure the user accounts of the sales department users to meet the security requirements.\nWhat should you do for each user?`,
            instruction: "Single Choice: Select the best answer.",
            options: [
                "A. From the Microsoft Teams admin center, set the Microsoft Teams upgrade policy to Skype for Business with Teams collaboration and meetings coexistence mode.",
                "B. From PowerShell, run the Grant-CsTeamsUpgradePolicy -PolicyName SfBWithTeamsCollab cmdlet.",
                "C. From PowerShell, run the Grant-CsTeamsUpgradePolicy -PolicyName Islands cmdlet.",
                "D. From the Microsoft Teams admin center, set the Microsoft Teams upgrade policy to Skype for Business coexistence mode."
            ],
            answer: "D. From the Microsoft Teams admin center, set the Microsoft Teams upgrade policy to Skype for Business coexistence mode."
        },
        {
            caseId: "Topic1",
            type: "radio",
            exhibit: T1_CASE_STUDY,
            text: `Topic 1, Contoso, Ltd Case study\n\nPilot Project Issue:\nMicrosoft Teams users report that they often receive continuous notifications from the Microsoft Teams client for 20 minutes.\n\nYou need to resolve the notification issues identified during the pilot project.\nWhat should you modify?`,
            instruction: "Single Choice: Select the best answer.",
            options: [
                "A. the global meeting policy",
                "B. the global messaging policy",
                "C. the org-wide Teams settings",
                "D. the app permission policy"
            ],
            answer: "C. the org-wide Teams settings"
        },
        {
            caseId: "Topic1",
            type: "radio",
            exhibit: T1_CASE_STUDY,
            text: `Topic 1, Contoso, Ltd Case study\n\nTechnical Requirements:\nGuest users must be prevented from making private calls.\n\nYou need to configure the environment to meet the technical requirements for guest users.\nWhat should you modify from the Microsoft Teams admin center?`,
            instruction: "Single Choice: Select the best answer.",
            options: [
                "A. the global app permission policy",
                "B. Guest access in Users",
                "C. the global meeting policy",
                "D. the global messaging policy"
            ],
            answer: "B. Guest access in Users"
        },
        {
            caseId: "Topic1",
            type: "radio",
            exhibit: T1_CASE_STUDY,
            text: `Topic 1, Contoso, Ltd Case study\n\nPilot Project Issue:\nTwo pilot users in the HR department report that they are not members of the HR team.\n(Context: All groups are created by using dynamic group membership that use the department attribute.)\n\nYou need to resolve the membership issues for the two pilot users.\nWhat should you do?`,
            instruction: "Single Choice: Select the best answer.",
            options: [
                "A. Modify the department attribute of both users.",
                "B. Invite both users to the HR team.",
                "C. Add both users to the HR group.",
                "D. Modify the privacy level of the HR team."
            ],
            answer: "A. Modify the department attribute of both users."
        },
        {
            caseId: "Topic1",
            type: "hotspot",
            exhibit: T1_CASE_STUDY,
            text: `Topic 1, Contoso, Ltd Case study\n\nYou need to recommend which inbound ports to the network and outbound ports to Office 365 must be allowed on the company’s firewall after the planned upgrade.`,
            instruction: "Hotspot: Select the appropriate options in the answer area.",
            rows: [
                { label: "Outbound TCP", options: ["135", "80 and 443", "3478 to 3481", "50000 to 59999", "None"], answer: "80 and 443" },
                { label: "Outbound UDP", options: ["135", "80 and 443", "3478 to 3481", "50000 to 59999", "None"], answer: "3478 to 3481" },
                { label: "Inbound TCP", options: ["135", "80 and 443", "3478 to 3481", "50000 to 59999", "None"], answer: "None" },
                { label: "Inbound UDP", options: ["135", "80 and 443", "3478 to 3481", "50000 to 59999", "None"], answer: "None" }
            ]
        },
        {
            caseId: "Topic1",
            type: "radio",
            exhibit: T1_CASE_STUDY,
            text: `Topic 1, Contoso, Ltd Case study\n\nYou need to configure the user accounts of the sales department users to meet the security requirements.\nWhat should you do for each user?`,
            instruction: "Single Choice: Select the best answer.",
            options: [
                "A. From PowerShell, run the Grant-CsTeamsUpgradePolicy -PolicyName SfBWithTeamsCollabAndMeetings cmdlet.",
                "B. From the Microsoft Teams admin center, set the Microsoft Teams upgrade policy to Islands coexistence mode.",
                "C. From PowerShell, run the Grant-CsTeamsUpgradePolicy -PolicyName Islands cmdlet.",
                "D. From PowerShell, run the Grant-CsTeamsUpgradePolicy -PolicyName SfBOnly cmdlet."
            ],
            answer: "A. From PowerShell, run the Grant-CsTeamsUpgradePolicy -PolicyName SfBWithTeamsCollabAndMeetings cmdlet."
        },
        {
            caseId: "Topic1",
            type: "radio",
            exhibit: T1_CASE_STUDY,
            text: `Topic 1, Contoso, Ltd Case study\n\nYou need to configure the environment to meet the security requirements for team names.\nWhat should you do?`,
            instruction: "Single Choice: Select the best answer.",
            options: [
                "A. From the Security & Compliance admin center, create a sensitivity label and a sensitivity policy.",
                "B. From the Microsoft Teams admin center, modify the Teams setting policies.",
                "C. From the Azure Active Directory admin center, upload a blocked word list for the group naming policy."
            ],
            answer: "C. From the Azure Active Directory admin center, upload a blocked word list for the group naming policy."
        },
        {
            caseId: "Topic1",
            type: "matrix",
            exhibit: T1_CASE_STUDY,
            text: `Topic 1, Contoso, Ltd Case study\n\nDuring the pilot project, you review the global policies in the Microsoft Teams admin center.\nContoso has a global meeting policy configured as shown in the following exhibit.<img src='images/1.png' class='q-img'>\nContoso has a global live events policy configured as shown in the following exhibit.\n<img src='images/2.png' class='q-img'>\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.`,
            instruction: "Matrix: Select Yes or No for each statement.",
            rows: [
                { label: "The policies meet Requirement1 for meeting and live events.", answer: "Yes" },
                { label: "The policies meet Requirement2 for meeting and live events.", answer: "No" },
                { label: "The policies meet Requirement3 for meeting and live events.", answer: "Yes" }
            ]
        },
        {
            caseId: "Topic1",
            type: "radio",
            exhibit: T1_CASE_STUDY,
            text: `Topic 1, Contoso, Ltd Case study\n\nYou need to configure the environment to meet the device requirements for the Microsoft Teams phones.\nWhat should you do from the Microsoft Teams admin center?`,
            instruction: "Single Choice: Select the best answer.",
            options: ["A. Create a configuration profile", "B. Modify the Teams settings", "C. Create a meeting policy", "D. Create a calling policy"],
            answer: "A. Create a configuration profile"
        },
        {
            caseId: "Topic1",
            type: "fill",
            exhibit: T1_CASE_STUDY,
            text: `Topic 1, Contoso, Ltd Case study\n\nYou need to recommend a voice topology for the departments. The topology must meet the calling requirements and the security requirements.`,
            instruction: "拖選填空：請將左側的語音拓撲選項拖入對應部門的空格中。",
            options: ["Calling Plans", "Direct Routing", "On-premises call handling", "Skype for Business Cloud Connector Edition"],
            fillHtml: `<div style="line-height: 2.5;">HR: <div class='drop-zone-fill' data-idx='0' ondrop='dropFill(event)' ondragover='allowDrop(event)'></div><br>Sales: <div class='drop-zone-fill' data-idx='1' ondrop='dropFill(event)' ondragover='allowDrop(event)'></div><br>R&D: <div class='drop-zone-fill' data-idx='2' ondrop='dropFill(event)' ondragover='allowDrop(event)'></div></div>`,
            answer: ["Direct Routing", "Calling Plans", "Skype for Business Cloud Connector Edition"]
        }
    ]