const topic3_questions = [
    // 題目編號：21
    {
        caseId: "Topic3",
        type: "hotspot",
        exhibit: T3_CASE_STUDY,
        hotspotType: "inline",
        text: `You need to configure a policy for the IT department to meet the technical requirements for training videos.\n\nHow should you complete the PowerShell cmdlet? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.`,
        instruction: "Hotspot: Select the appropriate options in the answer area.",
        hotspotHtml: `{0} -Identity IT {1}`,
        rows: [
            {
                options: [
                    "Set-CsTeamsMeetingPolicy",
                    "Set-CsTeamsMeetingBroadcastConfiguration",
                    "Set-CsTeamsMeetingBroadcastPolicy",
                    "Set-CsTeamsMeetingConfiguration"
                ],
                answer: "Set-CsTeamsMeetingPolicy"
            }, // 對應 {0}
            {
                options: [
                    "-NewMeetingRecordingExpirationDays",
                    "-AllowCloudRecording",
                    "-ChannelRecordingDownload",
                    "-RecordingStorageMode"
                ],
                answer: "-NewMeetingRecordingExpirationDays"
            }  // 對應 {1}
        ]
    },

    // 題目編號：22
    {
        caseId: "Topic3",
        type: "hotspot",
        exhibit: T3_CASE_STUDY,
        text: `HOTSPOT\n\nYou need to implement the planned changes for the marketing department and the project management\ndepartment. The solution must meet the technical requirements.\nWhich type of channel should you use for each department? To answer, select the appropriate options in\nthe answer area. NOTE: Each correct selection is worth one point.`,
        instruction: "Hotspot: Select the appropriate options in the answer area.",
        rows: [
            { 
                label: "Marketing:", 
                options: ["Shared", "Private", "Standard"], 
                answer: "Shared" 
            },
            { 
                label: "Project management:", 
                options: ["Private", "Shared", "Standard"], 
                answer: "Private" 
            }
        ]
    },

    // 題目編號：23
    {
        caseId: "Topic3",
        type: "checkbox",
        exhibit: T3_CASE_STUDY,
        text: `You need to implement the planned changes for the marketing department.\nWhich two actions should you perform? Each correct answer presents part of the solution. NOTE: Each\ncorrect selection is worth one point.`,
        options: [
            "A. Set Join external shared channels to On for the Teams policy of the marketing department.",
            "B. From the Azure Active Directory admin center, configure the B2B direct connect outbound access settings for external users and groups.",
            "C. Set invite external users to shared channels to On for the Teams policy of the marketing department.",
            "D. From the Azure Active Directory admin center, configure the B2B direct connect inbound access settings for external users and groups.",
            "E. Set invite external users to shared channels to On for the Global (Org-wide default) Teams policy."
        ],
        answer: ["C. Set invite external users to shared channels to On for the Teams policy of the marketing department.","D. From the Azure Active Directory admin center, configure the B2B direct connect inbound access settings for external users and groups.",]
    },
    // 題目編號： 24 
    {
        caseId: "Topic3",
        type: "radio",
        text: "You need to ensure that file sharing during Teams chats meets the technical requirements of the marketing department.\nWhat should you do?",
        options: [
            "A. Create a retention policy for Teams chats.",
            "B. Create a data loss prevention (DLP) policy for Teams chat and channel messages.",
            "C. Enable Customer Lockbox.",
            "D. Create a retention policy for the OneDrive accounts location.",
            "E. Create a retention policy for the SharePoint sites location."
        ],
        answer: "E. Create a retention policy for the SharePoint sites location."
    },
    // 題目編號： 25
    {
        caseId: "Topic3",
        type: "rank",
        // 這裡改為純文字，移除原本手寫的 div 容器
        text: "You need to implement the planned changes for Viva Connections.\n\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.",
        instruction: "拖選排名：請從左側選項中選擇正確的三個步驟，並按順序拖動到右側空格。",
        options: [
            "From the Microsoft Teams admin center, select Customize store.",
            "From the Microsoft Teams admin center, select Setup policies.",
            "From Org-wide app settings, enable tailored apps.",
            "From the Microsoft Teams admin center, select Manage apps.",
            "Select the Viva Connections app, and then select Customize.",
            "Modify and apply the app details."
        ],
        answer: [
            "From the Microsoft Teams admin center, select Manage apps.",
            "Select the Viva Connections app, and then select Customize.",
            "Modify and apply the app details."
        ]
    },
    // 題目編號： 26
    {
        caseId: "Topic3",
        type: "radio",
        text: "You need to resolve the issue reported by the project management department users.\nWhat should you do?",
        options: [
            "A. Uninstall the current Teams client and then reinstall the latest version of the client.",
            "B. From the Microsoft Teams admin center, modify the Meeting settings.",
            "C. From the Microsoft Teams admin center, create and assign a new meeting policy.",
            "D. Instruct the users to launch Teams and select Check for updates."
        ],
        answer: "C. From the Microsoft Teams admin center, create and assign a new meeting policy."
    },
    // 題目編號： 27
    {
        caseId: "Topic3",
        type: "radio",
        text: "Which license should you purchase to meet the technical requirements of the marketing department to apply a watermark?",
        options: [
            "A. Microsoft Priva Subject Rights Requests",
            "B. Microsoft Priva Privacy Risk Management",
            "C. Microsoft Teams Premium",
            "D. Microsoft Defender for Cloud Apps"
        ],
        answer: "C. Microsoft Teams Premium"
    }
    ]