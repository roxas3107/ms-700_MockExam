const questions = [

//     // 題目編號：63
//     {

//         type: "radio",
//         text: `Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYour company has a Microsoft 365 subscription.\n\nYou plan to configure the environment to allow external users to collaborate in Microsoft Teams by using guest access.\n\nThe company implements a new security policy that has the following requirements:\n✑ Only guest users from specific domains must be allowed to connect to collaborate by using Microsoft Teams.\n✑ Guest users must be prevented from inviting other guests.\n\nYou need to recommend a solution to meet the security policy requirements.`,
//         instruction: "Solution: From the Microsoft Teams admin center, you modify the global meeting policy.\n\nDoes this meet the goal?",
//         options: ["A. Yes", "B. No"],
//         answer: "B. No"
//     },

//     // 題目編號：64
//     {

//         type: "radio",
//         text: `Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYour company has a Microsoft 365 subscription.\n\nYou plan to configure the environment to allow external users to collaborate in Microsoft Teams by using guest access.\n\nThe company implements a new security policy that has the following requirements:\n✑ Only guest users from specific domains must be allowed to connect to collaborate by using Microsoft Teams.\n✑ Guest users must be prevented from inviting other guests.\n\nYou need to recommend a solution to meet the security policy requirements.`,
//         instruction: "Solution: From PowerShell, you run the New-AzureADPolicy and Set-AzureADPolicy cmdlets.\n\nDoes this meet the goal?",
//         options: ["A. Yes", "B. No"],
//         answer: "B. No"
//     },

    // // 題目編號：65
    // {

    //     type: "radio",
    //     text: `Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYour company has a Microsoft 365 subscription.\n\nYou plan to configure the environment to allow external users to collaborate in Microsoft Teams by using guest access.\n\nThe company implements a new security policy that has the following requirements:\n✑ Only guest users from specific domains must be allowed to connect to collaborate by using Microsoft Teams.\n✑ Guest users must be prevented from inviting other guests.\n\nYou need to recommend a solution to meet the security policy requirements.`,
    //     instruction: "Solution: From the Azure Active Directory, you modify the External collaboration settings.\n\nDoes this meet the goal?",
    //     options: ["A. Yes", "B. No"],
    //     answer: "A. Yes"
    // },


//     // 題目編號：66
//     {

//         type: "radio",
//         text: `Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYour company has a Microsoft 365 subscription that uses an Azure Active Directory (Azure AD) tenant named contoso.com.\n\nYou need to prevent guest users in the tenant from using cameras during Microsoft Teams meetings.`,
//         instruction: "Solution: From the Azure Active Directory admin center, you modify the External collaboration settings.\n\nDoes this meet the goal?",
//         options: ["A. Yes", "B. No"],
//         answer: "B. No"
//     },

//     // 題目編號：67
//     {

//         type: "radio",
//         text: `Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYour company has a Microsoft 365 subscription that uses an Azure Active Directory (Azure AD) tenant named contoso.com.\n\nYou need to prevent guest users in the tenant from using cameras during Microsoft Teams meetings.`,
//         instruction: "Solution: From Microsoft Teams admin center, you modify the External collaboration settings.\n\nDoes this meet the goal?",
//         options: ["A. Yes", "B. No"],
//         answer: "B. No"
//     },

//     // 題目編號：68
//     {

//         type: "radio",
//         text: `Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYour company has a Microsoft 365 subscription that uses an Azure Active Directory (Azure AD) tenant named contoso.com.\n\nYou need to prevent guest users in the tenant from using cameras during Microsoft Teams meetings.`,
//         instruction: "Solution: From the Microsoft 365 admin center, you modify the Sharing settings.\n\nDoes this meet the goal?",
//         options: ["A. Yes", "B. No"],
//         answer: "B. No"
//     },

//     // 題目編號：69
//     {

//         type: "radio",
//         text: `Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYour company has a Microsoft 365 subscription.\n\nYou need to prevent a user named User1 from permanently deleting private chats in Microsoft Teams.`,
//         instruction: "Solution: You place the mailbox of User1 on Litigation Hold.\n\nDoes this meet the goal?",
//         options: ["A. Yes", "B. No"],
//         answer: "A. Yes"
//     },

//     // 題目編號：70
//     {

//         type: "radio",
//         text: `Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYour company has a Microsoft 365 subscription.\n\nYou need to prevent a user named User1 from permanently deleting private chats in Microsoft Teams.`,
//         instruction: "Solution: You create an In-Place Hold for the Microsoft SharePoint site used by Microsoft Team.\n\nDoes this meet the goal?",
//         options: ["A. Yes", "B. No"],
//         answer: "B. No"
//     },

//     // 題目編號：71
//     {

//         type: "radio",
//         text: `Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYour company has a Microsoft 365 subscription.\n\nYou need to prevent a user named User1 from permanently deleting private chats in Microsoft Teams.`,
//         instruction: "Solution: You place the group mailboxes used by Microsoft Teams on Litigation Hold.\n\nDoes this meet the goal?",
//         options: ["A. Yes", "B. No"],
//         answer: "B. No"
//     },

//     // 題目編號：72
//     {

//         type: "radio",
//         text: `You are a Microsoft Teams administrator for your company.\n\nAll the teams used by the company’s legal department must meet the following compliance requirements:\n✑ Each team must expire 365 days after it is created.\n✑ All team content must be deleted when the team expires.\n✑ An administrator must be able to restore deleted team content for 30 days.`,
//         instruction: "What should you do?",
//         options: [
//             "A. From the Microsoft Teams admin center, modify the teams policy.",
//             "B. From PowerShell, run the New-AzureADMSGroupLifecyclePolicy cmdlet.",
//             "C. From the Security & Compliance admin center, create a data loss prevention (DLP) policy.",
//             "D. From the Microsoft 365 admin center, modify the Office 365 group settings."
//         ],
//         answer: "B. From PowerShell, run the New-AzureADMSGroupLifecyclePolicy cmdlet."
//     },

//     // 題目編號：73
//     {

//         type: "radio",
//         text: `Your company has a Microsoft 365 subscription that contains 20 teams.\n\nYou need to ensure that a team named Team1 is identified as Highly Confidential in the Microsoft Teams client.`,
//         instruction: "What should you use?",
//         options: [
//             "A. a classification label in the Azure Active Directory admin center",
//             "B. a sensitivity label in the Security & Compliance admin center",
//             "C. a supervisor policy in the Security & Compliance admin center",
//             "D. a teams policy in the Microsoft Teams admin center"
//         ],
//         answer: "B. a sensitivity label in the Security & Compliance admin center"
//     },

//     // 題目編號：74
//     {

//         type: "radio",
//         text: `Your company has a Microsoft 365 subscription.\n\nYou attempt to review call quality by location.\n\nWhen you sign in to the Microsoft Call Quality Dashboard, you discover that no locations are defined.\n\nYou need to ensure that all the call quality information in the dashboard is segmented by location.`,
//         instruction: "What should you do first?",
//         options: [
//             "A. From the Microsoft Teams admin center, configure reporting labels.",
//             "B. From an administrator’s computer, run the Network Testing Companion.",
//             "C. From PowerShell, run the Set-CsQoEConfiguration cmdlet.",
//             "D. From the Microsoft Teams admin center, run the Network Planner."
//         ],
//         answer: "A. From the Microsoft Teams admin center, configure reporting labels."
//     },

//     // 題目編號：75
//     {
//         type: "hotspot",
//         hotspotType: "inline",
//         text: `You have a Microsoft Office 365 subscription.\n\nYou create a team named Room1.\n\nYou need to ensure that Room1 automatically accepts meeting invitations. The solution must prevent meeting invitations from being accepted if the room is unavailable.\n\nHow should you complete the PowerShell command? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.`,
//         instruction: "Hotspot: Select the appropriate options in the answer area.",
//         hotspotHtml: `Set-CalendarProcessing -Identity 'Room1' -AutomateProcessing {0} -AllowConflicts {1}`,
//         rows: [
//             {
//                 options: [
//                     "AutoAccept",
//                     "AutoProcessing",
//                     "AutoUpdate"
//                 ],
//                 answer: "AutoAccept"
//             }, // 對應 {0}
//             {
//                 options: [
//                     "$false",
//                     "$null",
//                     "$true"
//                 ],
//                 answer: "$false"
//             }  // 對應 {1}
//         ]
//     },

//     // 題目編號：76
//     {
//         type: "radio",
//         text: `Your company uses Microsoft Teams.\n\nThe company has the departments and teams shown in the following table.\n<img src='images/6.png' class='q-img'>\nYou need to recommend a solution to prevent the users in each department from inviting users from other departments to their team.\n\nWhat should you include in the recommendation?`,
//         instruction: "Select the correct answer.",
//         options: [
//             "A. app permission policies",
//             "B. Azure Information Protection",
//             "C. supervision policies",
//             "D. information barrier policies"
//         ],
//         answer: "D. information barrier policies"
//     },

//     // 題目編號：77
//     {
//         type: "radio",
//         text: `Your company has a Microsoft 365 E5 subscription.\n\nThe company uses Microsoft Skype for Business Online and plans to upgrade to Microsoft Teams.\n\nThe network contains the following devices:\n\n✑100 computers that run Windows 10\n\n✑50 Android devices\n\n✑50 iPhone devices\n\nAll the devices have the Skype for Business app installed.\n\nYou need to deploy Microsoft Teams to all the devices.`,
//         instruction: "What should you do?",
//         options: [
//             "A. From the Microsoft Teams admin center, set Download the Teams app in the background for Skype for Business users to On.",
//             "B. Create a Group Policy Object (GPO) that contains an app package, and then link the GPO.",
//             "C. From the Microsoft Teams admin center, create an app setup policy that includes the Microsoft Teams app, and then assign the policy to all users.",
//             "D. From the Microsoft Office Intune, push Microsoft Teams to all the devices."
//         ],
//         answer: "D. From the Microsoft Office Intune, push Microsoft Teams to all the devices."
//     },

//     // 題目編號：78
//     {
//         type: "radio",
//         text: `Your company has a Microsoft 365 subscription that contains several teams.\n\nThe company’s security policy states that an administrator must be notified when a new team is created by using the Build a team from scratch option.\n\nYou need to configure the environment to meet the security policy requirement.`,
//         instruction: "What should you do?",
//         options: [
//             "A. From the Security & Compliance admin center, create a supervision policy.",
//             "B. From the Security & Compliance admin center, create an alert policy.",
//             "C. From the Azure Active Directory admin center, create a protection notification.",
//             "D. From the Microsoft Teams admin center, modify the global teams policy."
//         ],
//         answer: "B. From the Security & Compliance admin center, create an alert policy."
//     },

//     // 題目編號：79
//     {
//         type: "radio",
//         text: `Users report poor quality during Microsoft Teams audio conferences.\n\nYou run a network trace during an audio conference from a user’s device as shown in the following exhibit.\n\n<img src='images/7.png' class='q-img'>\n\nWhat causes the poor quality of the audio conferences?`,
//         instruction: "Select the correct answer.",
//         options: [
//             "A. The source port range for audio is too narrow.",
//             "B. The source port for audio is above 50,000.",
//             "C. The UDP traffic is being limited.",
//             "D. The TLS traffic is being limited."
//         ],
//         answer: "C. The UDP traffic is being limited."
//     },

//     // 題目編號：80
//     {
//         type: "radio",
//         text: `Your company has a Microsoft 365 subscription.\n\nAll users have a computer that runs Windows 10 and has Microsoft Teams installed.\n\nA user reports the following issues:\n\n✑ Users lose their connection during screen sharing.\n\n✑ The user selection process takes too long to complete.\n\n✑ The Microsoft Teams client crashes and restarts automatically.\n\nYou need to view the Microsoft Teams debug logs to troubleshoot the issues.`,
//         instruction: "What should you do?",
//         options: [
//             "A. From the Microsoft Teams client, select F1. Open the ETL files in the %Appdata%\\Microsoft\\Teams\\folder.",
//             "B. From the Microsoft Teams client, select Ctrl+Alt+Shift+1. Open the log files in the %Userprofile%\\Downloads\\ folder.",
//             "C. From Event Viewer, open the Application log and filter the log for a keyword of MSTeams.",
//             "D. Right-click the Microsoft Teams icon in the application tray, and then select Get logs. Open Logs.txt in the%Appdata%\\Microsoft\\Teams\\ folder."
//         ],
//         answer: "B. From the Microsoft Teams client, select Ctrl+Alt+Shift+1. Open the log files in the %Userprofile%\\Downloads\\ folder."
//     },

//     // 題目編號：81
//     {
//         type: "hotspot",
//         text: `You open the Microsoft Call Quality Dashboard as shown in the following exhibit.\n<img src='images/8.png' class='q-img'>\nUse the drop-down menus to select the answer choice that completes each statement based on the information presented in the graphic. NOTE: Each correct selection is worth one point.`,
//         instruction: "Hotspot: Select the appropriate options in the answer area.",
//         rows: [
//             {
//                 label: "During the month of July 2019, [answer choice] calls were established successfully.",
//                 options: ["0", "4", "66", "70"],
//                 answer: "70"
//             },
//             {
//                 label: "During the month of July 2019, [answer choice] calls included metric data.",
//                 options: ["0", "4", "66", "70"],
//                 answer: "66"
//             }
//         ]
//     },
//     // 題目編號：82
//     {
//         type: "radio",
//         text: `You have an Active Directory user named User1.\n\nYou need to ensure that User1 can view the following reports:\n\n✑ Microsoft Teams user activity report\n\n✑ Microsoft Teams device usage report\n\nThe solution must limit the ability of User1 to make changes to Microsoft 365 services.\n\nWhich role should you assign to User1?`,
//         instruction: "Select the correct answer.",
//         options: [
//             "A. Teams Service Administrator",
//             "B. Reports reader",
//             "C. Teams Communications Support Specialist",
//             "D. Message Center reader"
//         ],
//         answer: "B. Reports reader"
//     },

//     // 題目編號：83
//     {
//         type: "hotspot",
//         hotspotType: "inline",
//         text: `Your company plans to migrate to Microsoft Teams from Microsoft Skype for Business Online. The orgwide coexistence mode for Microsoft Teams is set to Teams Only.\nThe company has two named User1 and User2.\nYou need to implement a migration solution that meets the following requirements:\n✑ User1 must be able to chat and create meetings by using Skype for Business only.\n✑ User1 must be able to read and post messages by using Microsoft Teams channels.\n✑ User2 must use Microsoft Teams only.\nHow should you complete the PowerShell command? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.`,
//         instruction: "Hotspot: Select the appropriate options in the answer area.",
//         hotspotHtml: `{0} -PolicyName {1} -Identity {2}`,
//         rows: [
//             {
//                 options: [
//                     "Grant-CsClientPolicy",
//                     "Grant-CsTeamsUpgradePolicy",
//                     "Move-CsLegacyUser"
//                 ],
//                 answer: "Grant-CsTeamsUpgradePolicy"
//             }, // 對應 {0}
//             {
//                 options: [
//                     "Islands",
//                     "SfBOnly",
//                     "SfBWithTeamsCollab",
//                     "SfBWithTeamsCollabAndMeetings",
//                     "UpgradeToTeams"
//                 ],
//                 answer: "SfBWithTeamsCollab"
//             }, // 對應 {1}
//             {
//                 options: [
//                     "User1",
//                     "All"
//                 ],
//                 answer: "User1"
//             }  // 對應 {2}
//         ]
//     },
//     // 題目編號：84
//     {
//         type: "radio",
//         text: `Your company has a Microsoft 365 subscription.\nThe company deploys Microsoft Teams for 5,000 users.\nYou need to generate a report that contains the following information:\n- The number of active Microsoft Teams users during the last seven days.\n- The number of active team channels during the last seven days.\nWhich usage reports should you run?`,
//         instruction: "Select the correct answer.",
//         options: [
//             "A. Teams device usage",
//             "B. Teams live event usage",
//             "C. Teams user activity",
//             "D. Teams usage"
//         ],
//         answer: "D. Teams usage"
//     },
//     // 題目編號：85
//     {
//         type: "radio",
//         text: `Your company has a Microsoft 365 subscription.\nThe company has a Microsoft Teams group named Group1.\nYou need to remove inactive users from Group1. The members of Group1 must be validated every month.\nWhat should you use?`,
//         instruction: "Select the correct answer.",
//         options: [
//             "A. supervision policies in the Security & Compliance admin center",
//             "B. access reviews in the Azure Active Directory admin center",
//             "C. eDiscovery cases in the Security & Compliance admin center",
//             "D. usage reports in the Microsoft Teams admin center"
//         ],
//         answer: "B. access reviews in the Azure Active Directory admin center"
//     },

//     // 題目編號：86
//     {
//         type: "hotspot",
//         text: `Your company has a Microsoft 365 subscription that uses Phone System.\nYou need to configure Microsoft Teams to meet the following requirements:\n✑ Ensure that calls to the company’s sales department are routed to multiple users in the sales department.\n✑ Ensure that calls to the company’s marketing department are routed to multiple users in the marketing department.\n✑ Outside of business hours, ensure that calls from PSTN users receive a custom greeting.\n✑ During business hours, ensure that calls from PSTN users can be received by the sales and marketing department users.\nWhat is the minimum number of auto attendants and call queues you should configure to meet the requirements? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.`,
//         instruction: "Hotspot: Select the appropriate options in the answer area.",
//         rows: [
//             {
//                 label: "Auto attendants:",
//                 options: ["0", "1", "2", "3"],
//                 answer: "1"
//             },
//             {
//                 label: "Call queues:",
//                 options: ["0", "1", "2", "3"],
//                 answer: "2"
//             }
//         ]
//     },
//     // 題目編號：87
//     {
//         type: "hotspot",
//         text: `Your company has a Microsoft 365 subscription.\nYou need to configure Microsoft Teams to meet the requirements shown in the following table.\n<img src='images/9.png' class='q-img'>\nWhat should you configure for each requirement!? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.`,
//         instruction: "Hotspot: Select the appropriate options in the answer area.",
//         rows: [
//             {
//                 label: "Requirement1:",
//                 options: ["Live event policies", "Live events settings", "Meeting policies", "Meeting settings"],
//                 answer: "Live event policies"
//             },
//             {
//                 label: "Requirement2:",
//                 options: ["Live event policies", "Live events settings", "Meeting policies", "Meeting settings"],
//                 answer: "Meeting settings"
//             },
//             {
//                 label: "Requirement3:",
//                 options: ["Live event policies", "Live events settings", "Meeting policies", "Meeting settings"],
//                 answer: "Meeting policies"
//             }
//         ]
//     },

//     // 題目編號：88
//     {
//         type: "radio",
//         text: `Your company has a Microsoft Office 365 subscription.\nThe company has the departments and teams shown in the following table.\n<img src='images/10.png' class='q-img'>\nYou need to recommend which policies must be created to meet the following requirements:\n- Users in the HR department must be prevented from sending messages marked as Urgent.\n- Users in the finance department must be able to send messages marked as Urgent.\n- Users in the finance department must be able to delete sent messages.\nThe solution must only affect the HR department users and the finance department users.\nWhat is the minimum number of policies you should recommend?`,
//         instruction: "Select the correct answer.",
//         options: [
//             "A. two messaging policies",
//             "B. one messaging policy and one permission policy",
//             "C. one permission policy only",
//             "D. two permission policies",
//             "E. one messaging policy only"
//         ],
//         answer: "A. two messaging policies"
//     },
//     // 題目編號：89
//     {
//         type: "hotspot",
//         text: `Your company has a Microsoft Office 365 subscription.\nThe company has offices in France, United States, and Belgium.\nYou plan to implement Phone System to meet the following requirements:\n✑ The office in Belgium must use SIP trunks from the current telecommunication provider.\n✑ The office in France must integrate the phone number range and an on-premises IP-PBX.\n✑ The office in the United States must minimize the infrastructure required to deploy the planned Phone System.\nYou need to recommend which PSTN connectivity meets the requirements.\nWhich PSTN connectivity should you recommend for each office? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.`,
//         instruction: "Hotspot: Select the appropriate options in the answer area.",
//         rows: [
//             {
//                 label: "France:",
//                 options: ["Calling Plans", "Direct Routing"],
//                 answer: "Direct Routing"
//             },
//             {
//                 label: "Belgium:",
//                 options: ["Calling Plans", "Direct Routing"],
//                 answer: "Direct Routing"
//             },
//             {
//                 label: "United States:",
//                 options: ["Calling Plans", "Direct Routing"],
//                 answer: "Calling Plans"
//             }
//         ]
//     },
//     // 題目編號：90
//     {
//         type: "radio",
//         text: `Your company has a Microsoft 365 subscription.\nA user invites an external user to join a Microsoft Teams meeting by using a Microsoft Outlook meeting invitation.\nThe external user cannot join the meeting.\nYou need to ensure that all external users can join Microsoft Team meetings.\nWhat should you do from the Microsoft Teams admin center?`,
//         instruction: "What should you do?",
//         options: [
//             "A. From Guest access in the Org-wide settings, set Allow guest access in Microsoft Teams to On.",
//             "B. Edit the Meeting settings and set Anonymous users can join a meeting to On.",
//             "C. Edit the global meeting policy and set Allow scheduling private meetings to On.",
//             "D. Edit the live events policy and set Who can join live events to Everyone."
//         ],
//         answer: "B. Edit the Meeting settings and set Anonymous users can join a meeting to On."
//     },
//     // 題目編號：91
//     {
//         type: "hotspot",
//         text: `Your company has a Microsoft 365 subscription that uses Phone System.\nYou need to configure the environment to the meet the following requirements:\n✑ Only users in the company’s sales department must have Call forwarding and simultaneous ringing to external phone numbers set to Off.\n✑ Only users in the marketing department must have Inbound calls can be routed to call groups set to Off.\n✑ All outbound calls to the PSTN must use the auto attendant number as the caller ID.\nWhat is the minimum number of policies that should be created? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.`,
//         instruction: "Hotspot: Select the appropriate options in the answer area.",
//         rows: [
//             {
//                 label: "Caller ID policies:",
//                 options: ["0", "1", "2"],
//                 answer: "1"
//             },
//             {
//                 label: "Call park policies:",
//                 options: ["0", "1", "2"],
//                 answer: "0"
//             },
//             {
//                 label: "Calling policies:",
//                 options: ["0", "1", "2"],
//                 answer: "2"
//             }
//         ]
//     },
//     // 題目編號：92
//     {
//         type: "checkbox",
//         text: `Your company has a Microsoft 365 subscription.\nA user named User5 cannot establish call from Microsoft Teams.\nYou review the Microsoft Teams client for User5 and discover that the dial pad is unavailable.\nOther users at the company can establish calls successfully.\nYou need to ensure that User5 can establish calls.\nWhich two actions should you perform? Each correct answer represents part of the solution. NOTE: Each correct selection is worth one point.`,
//         instruction: "Checkbox: Select 2 items.",
//         max: 2,
//         options: [
//             "A. Modify the caller ID properties of User5.",
//             "B. Assign a Phone System license to User5.",
//             "C. Assign a SIP address to User5.",
//             "D. Assign an app setup policy to User5.",
//             "E. Enable User5 for Enterprise Voice."
//         ],
//         answer: [
//             "B. Assign a Phone System license to User5.",
//             "E. Enable User5 for Enterprise Voice."
//         ]
//     },
//     // 題目編號：93
//     {
//         type: "radio",
//         text: `Your company has a Microsoft 365 subscription.\nThe company plans to host Microsoft Teams live events for groups of users larger than 5,000.\nYou need to recommend a solution that minimizes the bandwidth required to stream the events.\nWhat should you include in the recommendation?`,
//         instruction: "What should you do?",
//         options: [
//             "A. a Session Border Controller (SBC)",
//             "B. a third-party encoder",
//             "C. an eCDN provider",
//             "D. a Cloud Video Interop (CVI)"
//         ],
//         answer: "C. an eCDN provider"
//     },

//     // 題目編號：94
//     {
//         type: "radio",
//         text: `Your company has a Microsoft 365 subscription.\nYou need to prevent users from using Microsoft Teams to communicate with users in a partner company that uses an email domain named litewareinc.com.\nWhat should you do from the Microsoft Teams admin center?`,
//         instruction: "Select the correct answer.",
//         options: [
//             "A. Turn off guest access.",
//             "B. Create a new messaging policy.",
//             "C. Modify the External access settings.",
//             "D. Create a new meeting policy."
//         ],
//         answer: "C. Modify the External access settings."
//     },
//     // 題目編號：95
//     {
//         type: "radio",
//         text: `Your company has a Microsoft 365 subscription.\nThe company has a main office in Chicago.\nThe company opens a new office in Toronto that has 500 users.\nYou need to ensure that the correct address is available to emergency responders.\nWhat should you do?`,
//         instruction: "What should you do?",
//         options: [
//             "A. Create a configuration profile and assign the profile to the device of each user.",
//             "B. Add an emergency address, and then modify each phone number.",
//             "C. Add an emergency address, and then modify each user.",
//             "D. Create a calling policy and assign the policy to each user."
//         ],
//         answer: "B. Add an emergency address, and then modify each phone number."
//     },
//     // 題目編號：96
//     {
//         type: "radio",
//         text: `Your company has a Microsoft 365 tenant.\nGuest users report that they cannot access files or Microsoft OneNote from Microsoft Teams. The guest users can access channels, chats, and conversations.\nYou need to ensure that the guest users can access the files and OneNote from Microsoft Teams.\nFor what should you configure external sharing?`,
//         instruction: "Select the correct answer.",
//         options: [
//             "A. Microsoft Teams",
//             "B. Microsoft SharePoint Online",
//             "C. Microsoft OneDrive for Business",
//             "D. Microsoft Yammer."
//         ],
//         answer: "B. Microsoft SharePoint Online"
//     },
//     // 題目編號：97
//     {
//         type: "checkbox",
//         text: `You company has a Microsoft 365 subscription that uses Phone System and Calling Plans.\nYou plan to implement a toll phone number for the helpdesk.\nYou need to implement the following call features for the helpdesk phone number:\n✑ Must include a greeting and hold music\n✑ Must bypass menu options when a call is established to the helpdesk\nWhat two resources should you create? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.`,
//         instruction: "Checkbox: Select 2 items.",
//         max: 2,
//         options: [
//             "A. a call queue",
//             "B. a call park",
//             "C. an auto attendant",
//             "D. a resource account",
//             "E. a calling policy"
//         ],
//         answer: [
//             "A. a call queue",
//             "C. an auto attendant"
//         ]
//     },
//     // 題目編號：98
//     {
//         type: "checkbox",
//         text: `You have an org wide team named Team1.\nThe members of Team1 report that they receive an excessive amount of notifications from channel messages.\nYou need to reduce the amount of notifications by implementing the following changes:\nAllow only global administrators to create new posts in the General channel.\nPrevent @members for the org-wide team members.\nWhich two actions should you perform from the Microsoft Teams client? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.`,
//         instruction: "Checkbox: Select 2 items.",
//         max: 2,
//         options: [
//             "A. From the Team1 settings, clear Give members the option to edit their messages.",
//             "B. From the General Channel settings of Team1, set the channel moderation preference to Anyone can post; show alert that postings will notify everyone (recommended for large teams).",
//             "C. From the General Channel settings of Team1, set the channel moderation preference to Only owners can post messages.",
//             "D. From the Team1 settings, disable all the Fun stuff settings.",
//             "E. From the Team1 settings, set Show members the option to @team or @[team name] to Off."
//         ],
//         answer: [
//             "C. From the General Channel settings of Team1, set the channel moderation preference to Only owners can post messages.",
//             "E. From the Team1 settings, set Show members the option to @team or @[team name] to Off."
//         ]
//     },
//     // 題目編號：99
//     {
//         type: "checkbox",
//         text: `Your company has a Microsoft 365 subscription.\nFrom the Microsoft Teams client, you review the teams shown in the exhibit. (Click the Exhibit tab.)\n<img src='images/11.png' class='q-img'>\nMembers of the Retail team report that they cannot create channels.\nYou need to ensure that the Retail team members can create channels.\nWhich two actions should you perform? Each correct answer presents a complete solution. NOTE: Each correct selection is worth one point.`,
//         instruction: "Checkbox: Select 2 items.",
//         max: 2,
//         options: [
//             "A. From the Azure Active Directory admin center, change the membership type of the Office 365 group for the Retail team to Assigned.",
//             "B. From the Microsoft Teams client, promote all the Retail team members to an owner role.",
//             "C. From the Microsoft Teams admin center, unarchive the Retail team.",
//             "D. Instruct the Retail team owner to restore the team by using the Microsoft Teams client.",
//             "E. From PowerShell, modify the information barrier policy."
//         ],
//         answer: [
//             "C. From the Microsoft Teams admin center, unarchive the Retail team.",
//             "D. Instruct the Retail team owner to restore the team by using the Microsoft Teams client."
//         ]
//     },
//     // 題目編號：100
//     {
//         type: "radio",
//         text: `Your company has a Microsoft subscription.\nThe Microsoft 365 tenant uses a domain named contoso.com.\nYou need to ensure that team channels can receive email only from users in the company and email addresses that use an email domain named @fabrikam.com.\nWhat should you modify?`,
//         instruction: "Select the correct answer.",
//         options: [
//             "A. the External collaboration settings in the Azure Active Directory admin center",
//             "B. the list of accepted domains in Microsoft Exchange Online",
//             "C. the org-wide Teams settings",
//             "D. the global teams policy"
//         ],
//         answer: "C. the org-wide Teams settings"
//     },
//     // 題目編號：101
//     {
//         type: "radio",
//         text: `Your company has a Microsoft 365 subscription that contains a team named Sales.\nYou need to recommend a solution to ensure that all guest users who are members of Sales receive an email message each year to verify that they want to remain in the team.\nWhat should you include in the recommendation?`,
//         instruction: "Select the correct answer.",
//         options: [
//             "A. an identity provider",
//             "B. a Microsoft Outlook add-in",
//             "C. a supervision policy",
//             "D. an access review"
//         ],
//         answer: "D. an access review"
//     },

//     // 題目編號：102
//     { 
//         type: "hotspot",
//         text: `HOTSPOT

// Your company has a Microsoft Office 365 subscription.
// The company has three departments.
// Each department contains a group as shown in the following table.
// <img src='images/12.png' class='question-img'>
// You plan to create a team for each group.
// You need to ensure that a team can be created for each group. The solution must minimize administrative effort.

// What should you do to each group? To answer, select the appropriate options in the answer area. NOTE:
// Each correct selection is worth one point.`,
//         instruction: "Hotspot: Select the appropriate options in the answer area.",
//         rows: [
//             {
//                 label: "HR:",
//                 options: [
//                     "Change the group to an Office 365 group.",
//                     "Recreate the group as an Office 365 group.",
//                     "Change the group to a security group."
//                 ],
//                 answer: "Change the group to an Office 365 group."
//             },
//             {
//                 label: "R&D:",
//                 options: [
//                     "Change the group to an Office 365 group.",
//                     "Recreate the group as an Office 365 group.",
//                     "Change the group to a universal group."
//                 ],
//                 answer: "Recreate the group as an Office 365 group."
//             },
//             {
//                 label: "Sales:",
//                 options: [
//                     "Change the group to an Office 365 group.",
//                     "Recreate the group as an Office 365 group.",
//                     "Change the group to a global group."
//                 ],
//                 answer: "Recreate the group as an Office 365 group."
//             }
//         ]
//     },
// // 題目編號：102
//     {
//     type: "hotspot",
//     text: "HOTSPOT\n\nYour company has a Microsoft Office 365 subscription.\nThe company has three departments.\nEach department contains a group as shown in the following table.\n<img src='images/12.png' class='question-img'>\nYou plan to create a team for each group.\nYou need to ensure that a team can be created for each group. The solution must minimize administrative effort.\nWhat should you do to each group? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.",
//     instruction: "Hotspot: Select the appropriate options in the answer area.",
//     rows: [
//     {
//     label: "HR:",
//     options: [
//     "Change the group to an Office 365 group.",
//     "Recreate the group as an Office 365 group.",
//     "Change the group to a security group."
//     ],
//     answer: "Change the group to an Office 365 group."
//     },
//     {
//     label: "R&D:",
//     options: [
//     "Change the group to an Office 365 group.",
//     "Recreate the group as an Office 365 group.",
//     "Change the group to a universal group."
//     ],
//     answer: "Recreate the group as an Office 365 group."
//     },
//     {
//     label: "Sales:",
//     options: [
//     "Change the group to an Office 365 group.",
//     "Recreate the group as an Office 365 group.",
//     "Change the group to a global group."
//     ],
//     answer: "Recreate the group as an Office 365 group."
//     }
//     ]
//     },

//     // 題目編號：103
//     {
//         type: "rank",
//         text: "Your company has a custom Microsoft Teams app named App1.\nYou need to deploy App1. The solution must ensure that App1 appears as the first item on the app bar of the Microsoft Teams client.\nWhich four actions should you perform in sequence? To answer, move the actions from the list of actions to the answer area and arrange them in the correct order.",
//         instruction: "拖選排名：請從左側選項中選擇正確的四個步驟，並按順序拖動到右側空格。",
//         options: [
//             "From the Microsoft Teams client,upload App1.",
//             "From the Microsoft Teams admin center,set Allow interaction with custom apps to On.",
//             "From the Microsoft Teams admin center, modify the list of pinned apps.",
//             "From the app setup policy in the Microsoft Teams admin center, add App1 as a pinned app.",
//             "From the app permission policy in the Microsoft Teams admin center set, the Microsoft apps setting to Allow all apps.",
//             "From the app permission policy in the Microsoft Teams admin center, set the Third-party apps setting to Allow all apps."
//         ],
//         answer: [
//             "From the Microsoft Teams admin center, set Allow interaction with custom apps to On.",
//             "From the Microsoft Teams client,upload App1.",
//             "From the app setup policy in the Microsoft Teams admin center, add App1 as a pinned app.",
//             "From the Microsoft Teams admin center, modify the list of pinned apps."
//         ]
//     },

    // // 題目編號：104
    // {
    //     type: "radio",
    //     text: "Your company has a Microsoft 365 subscription.\nYou have a team that uses the following dynamic rule.\n(user.department contains \"Sales\" -or user.department contains \"Marketing\") -and\n(user.userType -Contains \"Guest\") -and (user.country -eq \"us\")\nWhich user will be included in the group?",
    //     instruction: "Select the correct answer.",
    //     options: [
    //         "A. A guest user in a department named Global Sales that has the country attribute set to USA.",
    //         "B. A member user in a department named Marketing Division that has the country attribute set to USA.",
    //         "C. A member user in a department named Marketing/Sales that has the country attribute set to US.",
    //         "D. A guest user in a department named US Marketing Division that has the country attribute set to US."
    //     ],
    //     answer: "D. A guest user in a department named US Marketing Division that has the country attribute set to US."
    // },

//     // 題目編號：105
//     {
//         type: "checkbox",
//         text: "Your company has a Microsoft 365 subscription.\nThe company has a group named Sales.\nYou need to configure Microsoft Teams for the Sales group.\nThe solution must meet the following requirements:\n✑ Ensure that only the Activity, Shifts, Chat, and Calling apps are always visible in the app bar of the Microsoft Teams client.\n✑ Prevent only the users in the company’s sales department from adding other apps to Microsoft Teams.\nWhich two actions should you perform? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.",
//         instruction: "Checkbox: Select 2 items.",
//         max: 2,
//         options: [
//             "A. Modify the global app setup policy.",
//             "B. Modify the global app permission policy.",
//             "C. Create an app setup policy.",
//             "D. Modify the org-wide Teams settings.",
//             "E. Create an app permission policy."
//         ],
//         answer: [
//             "C. Create an app setup policy.",
//             "E. Create an app permission policy."
//         ]
//     },

//     // 題目編號：106
//     {
//         type: "radio",
//         text: "Your company has a Microsoft 365 subscription.\nThe company uses Microsoft Teams.\nYou need to ensure that only Microsoft apps can be used in Microsoft Teams.\nWhat should you do from the Microsoft Teams admin center?",
//         instruction: "Select the correct answer.",
//         options: [
//             "A. From the global app setup policy, disable the Upload custom apps setting.",
//             "B. From the Org-wide app settings, disable the Allow interaction with custom apps setting.",
//             "C. From the Org-wide app settings, disable the Allow third party or custom apps setting.",
//             "D. From the global app permission policy, enable the Allow All Apps setting for Microsoft apps."
//         ],
//         answer: "C. From the Org-wide app settings, disable the Allow third party or custom apps setting."
//     },

    // // 題目編號：107
    // {
    //     type: "matrix",
    //     text: "You are Microsoft Teams administrator for your company.\nYou have the Org-wide app settings shown in the App Settings exhibit. (Click the App Settings tab.)\n<img src='images/13.png' class='question-img'>\nThe company’s global app permission policy is configured as shown in the Permission Policy exhibit. (Click the Permission Policy tab.)\n<img src='images/14.png' class='question-img'>\nThe company’s global app setup policy is configured as shown in the Setup Policy exhibit. (Click the Setup Policy tab.)\n<img src='images/15.png' class='question-img'>\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.",
    //     instruction: "Matrix: Select Yes or No for each statement.",
    //     rows: [
    //         {
    //             label: "Team members can upload apps from the Microsoft Teams client.",
    //             answer: "Yes"
    //         },
    //         {
    //             label: "All team members can add the Microsoft Flow app to a team.",
    //             answer: "Yes"
    //         },
    //         {
    //             label: "All team members can add the Microsoft Planner app to a team.",
    //             answer: "Yes"
    //         }
    //     ]
    // },

    // // 題目編號：108
    // {
    //     type: "radio",
    //     text: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYou have a Microsoft 365 subscription that contains several Microsoft SharePoint Online sites.\nYou need to ensure that the content stored in a SharePoint modern team site named Sales is available from Microsoft Teams. The solution must ensure that when a new channel is added to a team, a folder for the channel is created in the Sales site.",
    //     instruction: "Solution: From a team, you add a tab for the Sales site.\n\nDoes this meet the goal?",
    //     options: ["A. Yes", "B. No"],
    //     answer: "B. No"
    // },

    // // 題目編號：109
    // {
    //     type: "radio",
    //     text: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYou have a Microsoft 365 subscription that contains several Microsoft SharePoint Online sites.\nYou need to ensure that the content stored in a SharePoint modern team site named Sales is available from Microsoft Teams. The solution must ensure that when a new channel is added to a team, a folder for the channel is created in the Sales site.",
    //     instruction: "Solution: From the Microsoft Teams client, you create a new team and select Create from an existing Office 365 group or team.\n\nDoes this meet the goal?",
    //     options: ["A. Yes", "B. No"],
    //     answer: "A. Yes"
    // },

    // // 題目編號：110
    // {
    //     type: "radio",
    //     text: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYou have a Microsoft 365 subscription that contains several Microsoft SharePoint Online sites.\nYou need to ensure that the content stored in a SharePoint modern team site named Sales is available from Microsoft Teams. The solution must ensure that when a new channel is added to a team, a folder for the channel is created in the Sales site.",
    //     instruction: "Solution: From the Sales site, you use the Create a Team option.\n\nDoes this meet the goal?",
    //     options: ["A. Yes", "B. No"],
    //     answer: "B. No"
    // },

    // // 題目編號：111
    // {
    //     type: "radio",
    //     text: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYou company has a Microsoft 365 subscription and a Virtual Desktop Infrastructure (VDI) solution.\nThe company’s Microsoft Teams upgrade policy is set to Teams only coexistence mode.\nYou deploy the Microsoft Installer (MSI) package for Microsoft Teams to the VDI solution.\nSeveral months later, users of the VDI solution report that their workstation is missing several new Microsoft Teams features.\nYou need to ensure that the VDI solution users can use the new Microsoft Teams features.",
    //     instruction: "Solution: You run the Grant-CsTeamsUpgradePolicy cmdlet and specify the -PolicyName parameter.\n\nDoes this meet the goal?",
    //     options: ["A. Yes", "B. No"],
    //     answer: "B. No"
    // },

    // // 題目編號：112
    // {
    //     type: "radio",
    //     text: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYou company has a Microsoft 365 subscription and a Virtual Desktop Infrastructure (VDI) solution.\nThe company’s Microsoft Teams upgrade policy is set to Teams only coexistence mode.\nYou deploy the Microsoft Installer (MSI) package for Microsoft Teams to the VDI solution.\nSeveral months later, users of the VDI solution report that their workstation is missing several new Microsoft Teams features.\nYou need to ensure that the VDI solution users can use the new Microsoft Teams features.",
    //     instruction: "Solution: You uninstall the Microsoft Teams MSI package, and then reinstall a new Microsoft Teams MSI package.\n\nDoes this meet the goal?",
    //     options: ["A. Yes", "B. No"],
    //     answer: "A. Yes"
    // },

    // // 題目編號：113
    // {
    //     type: "radio",
    //     text: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYou company has a Microsoft 365 subscription and a Virtual Desktop Infrastructure (VDI) solution.\nThe company’s Microsoft Teams upgrade policy is set to Teams only coexistence mode.\nYou deploy the Microsoft Installer (MSI) package for Microsoft Teams to the VDI solution.\nSeveral months later, users of the VDI solution report that their workstation is missing several new Microsoft Teams features.\nYou need to ensure that the VDI solution users can use the new Microsoft Teams features.",
    //     instruction: "Solution: You run the Get-WUInstall cmdlet and specify the -AcceptAll parameter.\n\nDoes this meet the goal?",
    //     options: ["A. Yes", "B. No"],
    //     answer: "B. No"
    // },

        // // 題目編號：114
        // {
        //     type: "radio",
        //     text: "You company has a Microsoft 365 subscription that contains the teams shown in the following exhibit.\n<img src='images/16.png' class='question-img'>\nGuest users report that they cannot create posts in Monthly Reports.\nYou need to ensure that the guest users can post to Monthly Reports.\nWhat should you do?",
        //     instruction: "Select the correct answer.",
        //     options: [
        //         "A. From the Microsoft Teams client, modify the privacy setting.",
        //         "B. From the Microsoft Teams admin center, modify the Guest access settings.",
        //         "C. From the Microsoft Teams client, modify the channel moderation preferences.",
        //         "D. From the Microsoft Teams admin center, modify the messaging policy."
        //     ],
        //     answer: "B. From the Microsoft Teams admin center, modify the Guest access settings."
        // },

        // // 題目編號：115
        // {
        //     type: "radio",
        //     text: "Your company has a Microsoft 365 subscription.\nAll users have computers that run Windows 10. The computers are joined to Azure Active Directory (Azure AD) and enrolled in Microsoft Intune. All the users are standard users.\nThe company plans to start using Microsoft Teams.\nYou need to deploy the Microsoft Teams client to the computers.\nWhat should you use?",
        //     instruction: "Select the correct answer.",
        //     options: [
        //         "A. an Azure AD app registration",
        //         "B. a domain-based Group Policy Object (GPO)",
        //         "C. Azure App Service",
        //         "D. an app in Microsoft Intune"
        //     ],
        //     answer: "D. an app in Microsoft Intune"
        // },

        // // 題目編號：116
        //     {
        //         type: "fill",
        //         text: `Your company has a Microsoft 365 subscription.\nYou need to prevent guest users from creating or updating channels.\nHow should you complete the PowerShell script? To answer, drag the appropriate options to the correct blanks. Each option may be used once, more than once, or not at all. NOTE: Each correct selection is worth one point.`,
        //         instruction: "拖選填空：將選項拖入空格。",
        //         options: [
        //             "Get-AzureADGroup",
        //             "Get-AzureADUser",
        //             "Get-Team",
        //             "Set-AzureADGroup",
        //             "Set-AzureADUser",
        //             "Set-Team"
        //         ],
        //         fillHtml: `
        //             <div class='question-content-scroll'><div><div class='drop-zone-fill' data-idx='0' ondrop='dropFill(event)' ondragover='allowDrop(event)'></div> | <div class='drop-zone-fill' data-idx='1' ondrop='dropFill(event)' ondragover='allowDrop(event)'></div>-AllowGuestCreateUpdateChannels $false</div></div>
        //         `,
        //         answer: ["Get-Team", "Set-Team"]
        //     },

        // 題目編號：117
        {
            type: "matrix",
            text: "Your company has a Microsoft Office 365 subscription.\nAll users use an email domain named @adatum.com.\nYou have the guest access settings shown in the Guest Access exhibit. (Click the Guest Access tab.)\n<img src='images/17.png' class='question-img'>\nYou have the organizational relationship settings shown in the Organizational Relationship exhibit. (ClickOrganizational Relationship tab.)\n<img src='images/18.png' class='question-img'>\nYou have a meeting policy that is configured as shown in the Meeting Policy exhibit. (Click the Meeting Policy tab.)\n<img src='images/19.png' class='question-img'>\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.",
            instruction: "Matrix: Select Yes or No for each statement.",
            rows: [
                {
                    label: "Users at your company can share their screen with guest users during meetings.",
                    answer: "Yes"
                },
                {
                    label: "Users at your company can add users from a company that uses an email domain of fabrikam.com to teams.",
                    answer: "No"
                },
                {
                    label: "Users at your company can add users from a company that uses an email domain of contoso.com to teams.",
                    answer: "Yes"
                }
            ]
        },

            // 題目編號：118
            {
                type: "radio",
                text: "You manage the Microsoft Teams environment for your company.\nSeveral users report poor call quality.\nYou need to ensure that a user named Admin5 can review the call quality metrics of all the users at the company. The solution must use the principle of least privilege.\nWhich role should you assign to Admin5?",
                instruction: "Select the correct answer.",
                options: [
                    "A. Teams Service Administrator",
                    "B. Teams Communications Support Engineer",
                    "C. Teams Communications Support Specialist",
                    "D. Teams Communications Administrator"
                ],
                answer: "B. Teams Communications Support Engineer"
            },

            // 題目編號：119
            {
                type: "matrix",
                text: "Your company has a Microsoft Office 365 subscription.\nA user reports that a conference call on October 2 had poor audio quality.\nYou view the call history as shown in the Call History exhibit. (Click the Call History tab.)\n<img src='images/20.png' class='question-img'>\nYou view the call analytics as shown in the Call Analytics exhibit. (Click the Call Analytics tab.)\n<img src='images/21.png' class='question-img'>\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.",
                instruction: "Matrix: Select Yes or No for each statement.",
                rows: [
                    {
                        label: "On October 2, all participants experienced good quality audio during the conference call.",
                        answer: "No"
                    },
                    {
                        label: "On October 2, some participants on the conference call were external users.",
                        answer: "Yes"
                    },
                    {
                        label: "The organizer of the October 2 meeting is a user at the company.",
                        answer: "No"
                    }
                ]
            },





    // ...topic1_questions,
    // ...topic2_questions,
    // ...topic3_questions,
    // ...topic5_questions,
];

    // ==========================================
    // 2. 拖選題與範例
    // ==========================================
    
    // ,
    // {
    //     caseId: "Topic2",
    //     type: "radio",
    //     text: `<div class="question-content-scroll">Topic 2 範例題 下列哪一個是 Microsoft Teams 的主要管理中心？\n<img src='images/1.png' class='question-img'></div>`,
    //     instruction: "單選題：請選擇一個正確答案。",
    //     options: ["Azure Portal", "Teams Admin Center", "Exchange Admin Center"],
    //     answer: "Teams Admin Center"
    // },
    // {
    //     type: "fill",
    //     text: `<div class="question-content-scroll">範例題 請根據 383 題圖示完成配置：</div>`,
    //     instruction: "拖選填空：將選項拖入空格。",
    //     options: ["Yes", "No", "Maybe"],
    //     fillHtml: `
    //         敘述 1：<div class='drop-zone-fill' data-idx='0' ondrop='dropFill(event)' ondragover='allowDrop(event)'></div><br>
    //         敘述 2：<div class='drop-zone-fill' data-idx='1' ondrop='dropFill(event)' ondragover='allowDrop(event)'></div><br>
    //         敘述 3：<div class='drop-zone-fill' data-idx='2' ondrop='dropFill(event)' ondragover='allowDrop(event)'></div><br>
    //         敘述 4：<div class='drop-zone-fill' data-idx='3' ondrop='dropFill(event)' ondragover='allowDrop(event)'></div>
    //     `,
    //     answer: ["No", "No", "No", "Yes"]
    // }
