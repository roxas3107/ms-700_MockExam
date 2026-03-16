const topic5_questions = [
    // 題目編號：21
    // 題目編號：52
    {
        caseId: "Topic5",
        type: "radio",
        exhibit: T5_CASE_STUDY,
        text: "What should you create to meet the meeting requirements for the quarterly CEO event?",
        options: [
            "A. a town hall",
            "B. a meeting",
            "C. a virtual appointment",
            "D. a webinar"
        ],
        answer: "A. a town hall"
    },
    // 題目編號：53
    {
        caseId: "Topic5",
        type: "radio",
        exhibit: T5_CASE_STUDY,
        text: "What should you create to meet the governance requirements for animated GIFs?",
        options: [
            "A. a messaging policy",
            "B. a meeting policy",
            "C. a compliance policy",
            "D. an app setup policy"
        ],
        answer: "A. a messaging policy"
    },
    // 題目編號：54
    {
        caseId: "Topic5",
        type: "hotspot",
        exhibit: T5_CASE_STUDY,
        hotspotType: "inline",
        text: `You need to meet the governance requirements for new teams.\n\nHow should you complete the script? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.`,
        instruction: "Hotspot: Select the appropriate options in the answer area.",
        hotspotHtml: `$NameList = Get-Content "C:\\work\\currentblockedwordslist.txt"
    $NameList = [string]::join(",", $NameList)
    $Setting = Get-MgBetaDirectorySetting | where {$_.DisplayName -eq "Group.Unified"}
    if ($Setting.Count -eq 0) {
        $Template = Get-MgBetaDirectorySettingTemplate | where {$_.DisplayName -eq "Group.Unified"}
        $Params = @{ templateId = $Template.Id }
        $Setting = {0} -BodyParameter $Params
    }
    $params = @{
        name = "PrefixSuffixNamingRequirement"
        value = "GRP_[GroupName]_[Department]"
    }
    @{
        name = "CustomBlockedWordsList"
        value = "$NameList"
    }
    )
    }
    {1} -DirectorySettingId $Setting.Id -BodyParameter $params`,
        rows: [
            { 
                options: [
                    "New-MgBetaDataPolicyOperation", 
                    "New-MgBetaDirectoryObject", 
                    "New-MgBetaDirectoryRole", 
                    "New-MgBetaDirectorySetting"
                ], 
                answer: "New-MgBetaDirectorySetting" 
            }, // 對應 {0}
            { 
                options: [
                    "Update-MgBetaDirectory", 
                    "Update-MgBetaDirectoryObject", 
                    "Update-MgBetaDirectoryRole", 
                    "Update-MgBetaDirectorySetting"
                ], 
                answer: "Update-MgBetaDirectorySetting" 
            }  // 對應 {1}
        ]
    },
    // 題目編號：55
    {
        caseId: "Topic5",
        type: "radio",
        exhibit: T5_CASE_STUDY,
        text: "What should you configure to meet the monitoring requirements?",
        options: [
            "A. Microsoft Teams Network Assessment Tool",
            "B. a change notification in Microsoft Graph",
            "C. an alert in Azure Monitor",
            "D. a device state rule"
        ],
        answer: "C. an alert in Azure Monitor"
    },

    // 題目編號：56
    {
        caseId: "Topic5",
        type: "radio",
        exhibit: T5_CASE_STUDY,
        text: `Which type of license is required to meet the call handling requirements?`,
        options: [
            "A. Teams Shared Device",
            "B. Teams Phone Standard",
            "C. Teams Phone Resource Account",
            "D. Teams Phone with Calling Plan bundle"
        ],
        answer: "C. Teams Phone Resource Account"
    },

    // 題目編號：57
    {
        caseId: "Topic5",
        type: "radio",
        exhibit: T5_CASE_STUDY,
        text: `You need to troubleshoot the reported user issues.\nWhat should you use?`,
        options: [
            "A. the WebRTC logs",
            "B. the Teams support log files",
            "C. the Application log in Event Viewer",
            "D. the System log in Event Viewer"
        ],
        answer: "B. the Teams support log files"
    },

    // 題目編號：58
    {
        caseId: "Topic5",
        type: "checkbox",
        exhibit: T5_CASE_STUDY,
        text: `Which two actions should you perform to meet the collaboration requirements? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.`,
        instruction: "Checkbox: Select 2 items.",
        max: 2,
        options: [
            "A. Configure the inbound settings.",
            "B. Create a meeting policy.",
            "C. Add Fabrikam as an organization.",
            "D. Create a messaging policy.",
            "E. Configure the outbound settings."
        ],
        answer: [
            "C. Add Fabrikam as an organization.",
            "E. Configure the outbound settings."
        ]
    },

    // 題目編號：59
    {
        caseId: "Topic5",
        type: "radio",
        exhibit: T5_CASE_STUDY,
        text: `What is the minimum compliance required for third-party apps to be included in the pilot project?`,
        options: [
            "A. Microsoft 365 certification",
            "B. publisher attestation",
            "C. publisher verification",
            "D. certified for Microsoft Teams"
        ],
        answer: "B. publisher attestation"
    },

    // 題目編號：60
    {
        caseId: "Topic5",
        type: "radio",
        exhibit: T5_CASE_STUDY,
        text: `Which governance requirement is met by using a team template?`,
        options: [
            "A. The team name must contain a GRP prefix.",
            "B. The team name must be validated against a blocklist of team names.",
            "C. Team channels must include a pinned tab that displays the Wingtip Toys website.",
            "D. Team members must be prevented from deleting messages from team channels."
        ],
        answer: "A. The team name must contain a GRP prefix."
    },

    // 題目編號：61
    {
        caseId: "Topic5",
        type: "radio",
        exhibit: T5_CASE_STUDY,
        text: `What should you create to meet the meeting requirements for the R&D department?`,
        options: [
            "A. a meeting policy",
            "B. a team policy",
            "C. a data loss prevention (DLP) policy",
            "D. an app setup policy"
        ],
        answer: "A. a meeting policy"
    },
    // 題目編號：62
    {
        caseId: "Topic5",
        type: "matrix",
        exhibit: T5_CASE_STUDY,
        text: `For each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\nNOTE: Each correct selection is worth one point.`,
        instruction: "Matrix: Select Yes or No for each statement.",
        rows: [
            { 
                label: "The compliance requirement for the third-party apps can be met by using the Microsoft Teams admin center.", 
                answer: "Yes" 
            },
            { 
                label: "The governance requirement for new teams can be met by using the Microsoft Teams admin center.", 
                answer: "No" 
            },
            { 
                label: "The governance requirement for existing teams can be met by using the Microsoft Teams admin center.", 
                answer: "Yes" 
            }
        ]
    }

    ]