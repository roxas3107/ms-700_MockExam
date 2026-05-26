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
    // {
    //     type: "hotspot",
    //     text: "HOTSPOT\n\nYour company has a Microsoft Office 365 subscription.\nThe company has three departments.\nEach department contains a group as shown in the following table.\n<img src='images/12.png' class='question-img'>\nYou plan to create a team for each group.\nYou need to ensure that a team can be created for each group. The solution must minimize administrative effort.\nWhat should you do to each group? To answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one point.",
    //     instruction: "Hotspot: Select the appropriate options in the answer area.",
    //     rows: [
    //         {
    //             label: "HR:",
    //             options: [
    //                 "Change the group to an Office 365 group.",
    //                 "Recreate the group as an Office 365 group.",
    //                 "Change the group to a security group."
    //             ],
    //             answer: "Change the group to an Office 365 group."
    //         },
    //         {
    //             label: "R&D:",
    //             options: [
    //                 "Change the group to an Office 365 group.",
    //                 "Recreate the group as an Office 365 group.",
    //                 "Change the group to a universal group."
    //             ],
    //             answer: "Recreate the group as an Office 365 group."
    //         },
    //         {
    //             label: "Sales:",
    //             options: [
    //                 "Change the group to an Office 365 group.",
    //                 "Recreate the group as an Office 365 group.",
    //                 "Change the group to a global group."
    //             ],
    //             answer: "Recreate the group as an Office 365 group."
    //         }
    //     ]
    // },

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

        // // 題目編號：117
        // {
        //     type: "matrix",
        //     text: "Your company has a Microsoft Office 365 subscription.\nAll users use an email domain named @adatum.com.\nYou have the guest access settings shown in the Guest Access exhibit. (Click the Guest Access tab.)\n<img src='images/17.png' class='question-img'>\nYou have the organizational relationship settings shown in the Organizational Relationship exhibit. (ClickOrganizational Relationship tab.)\n<img src='images/18.png' class='question-img'>\nYou have a meeting policy that is configured as shown in the Meeting Policy exhibit. (Click the Meeting Policy tab.)\n<img src='images/19.png' class='question-img'>\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.",
        //     instruction: "Matrix: Select Yes or No for each statement.",
        //     rows: [
        //         {
        //             label: "Users at your company can share their screen with guest users during meetings.",
        //             answer: "Yes"
        //         },
        //         {
        //             label: "Users at your company can add users from a company that uses an email domain of fabrikam.com to teams.",
        //             answer: "No"
        //         },
        //         {
        //             label: "Users at your company can add users from a company that uses an email domain of contoso.com to teams.",
        //             answer: "Yes"
        //         }
        //     ]
        // },

        //     // 題目編號：118
        //     {
        //         type: "radio",
        //         text: "You manage the Microsoft Teams environment for your company.\nSeveral users report poor call quality.\nYou need to ensure that a user named Admin5 can review the call quality metrics of all the users at the company. The solution must use the principle of least privilege.\nWhich role should you assign to Admin5?",
        //         instruction: "Select the correct answer.",
        //         options: [
        //             "A. Teams Service Administrator",
        //             "B. Teams Communications Support Engineer",
        //             "C. Teams Communications Support Specialist",
        //             "D. Teams Communications Administrator"
        //         ],
        //         answer: "B. Teams Communications Support Engineer"
        //     },

        //     // 題目編號：119
        //     {
        //         type: "matrix",
        //         text: "Your company has a Microsoft Office 365 subscription.\nA user reports that a conference call on October 2 had poor audio quality.\nYou view the call history as shown in the Call History exhibit. (Click the Call History tab.)\n<img src='images/20.png' class='question-img'>\nYou view the call analytics as shown in the Call Analytics exhibit. (Click the Call Analytics tab.)\n<img src='images/21.png' class='question-img'>\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE: Each correct selection is worth one point.",
        //         instruction: "Matrix: Select Yes or No for each statement.",
        //         rows: [
        //             {
        //                 label: "On October 2, all participants experienced good quality audio during the conference call.",
        //                 answer: "No"
        //             },
        //             {
        //                 label: "On October 2, some participants on the conference call were external users.",
        //                 answer: "Yes"
        //             },
        //             {
        //                 label: "The organizer of the October 2 meeting is a user at the company.",
        //                 answer: "No"
        //             }
        //         ]
        //     },

            // // 題目編號：120
            // {
            //     type: "checkbox",
            //     text: "Your company deploys a Quality of Service (QoS) solution to its network.\nYou recently deployed Microsoft Teams for all users. Each user uses a domain-joined computer that runs\nWindows 10.\nThe users report poor audio quality when they use Microsoft Teams from the network.\nYou discover that the media traffic from Microsoft Teams is NOT processed by the QoS solution.\nYou need to ensure that all the media traffic is processed by the QoS solution.\nWhich two actions should you perform? Each correct solution presents part of the solution. NOTE: Each\ncorrect selection is worth one point.",
            //     instruction: "Checkbox: Select 2 items.",
            //     max: 2,
            //     options: [
            //         "A. From the Microsoft Teams admin center, set Insert Quality of Service (QoS) markers for real-time media traffic to On.",
            //         "B. From the Microsoft Teams client, select a certified Microsoft Teams audio device.",
            //         "C. From PowerShell, run the Set-CsQoEConfiguration cmdlet.",
            //         "D. From Group Policy Management, create a Group Policy Object (GPO) that contains the Policy based QoS settings, and then link the GPO to the domain.",
            //         "E. From the Microsoft Teams admin center, turn on logging for the device configuration profile."
            //     ],
            //     answer: [
            //         "A. From the Microsoft Teams admin center, set Insert Quality of Service (QoS) markers for real-time media traffic to On.",
            //         "D. From Group Policy Management, create a Group Policy Object (GPO) that contains the Policy based QoS settings, and then link the GPO to the domain."
            //     ]
            // },

            // // 題目編號：121
            // {
            //     type: "hotspot",
            //     text: "HOTSPOT\n\nYou have a Microsoft 365 subscription.\nYou need to create the call queues shown in the following table.\n<img src='images/22.png' class='question-img'>\nWhich routing method should you configure for each call queue? To answer, select the appropriate\noptions in the answer area. NOTE: Each correct selection is worth one point.",
            //     instruction: "Hotspot: Select the appropriate options in the answer area.",
            //     rows: [
            //         {
            //             label: "CQ1:",
            //             options: [
            //                 "Attendant routing",
            //                 "Round robin",
            //                 "Serial routing"
            //             ],
            //             answer: "Round robin"
            //         },
            //         {
            //             label: "CQ2:",
            //             options: [
            //                 "Attendant routing",
            //                 "Round robin",
            //                 "Serial routing"
            //             ],
            //             answer: "Attendant routing"
            //         }
            //     ]
            // },

        // // 題目編號：122
        // {
        //     type: "radio",
        //     text: "Your company has a Microsoft 365 subscription.\nYou plan to enable users to book meetings in several of the company’s conference rooms by using the Microsoft Teams client.\nYou need to create the required resources in Microsoft 365 for the conference rooms.\nWhat should you create for each conference room?",
        //     instruction: "Select the correct answer.",
        //     options: [
        //         "A. a team",
        //         "B. a resource mailbox",
        //         "C. an auto attendant",
        //         "D. an Office 365 group"
        //     ],
        //     answer: "A. a team"
        // },
        // // 題目編號：123
        // {
        //     type: "radio",
        //     text: "You plan to implement a pilot project on Phone System for 100 users.\nThe pilot project will use a Microsoft Calling Plan.\nYou need to ensure that the users can establish calls to the PSTN.\nWhich cmdlets should you run?",
        //     instruction: "Select the correct answer.",
        //     options: [
        //         "A. Set-AzureADUserLicense, Set-CSUser, and Set-AzureADUser",
        //         "B. Grant-CsOnlineVoiceRoutingPolicy, Set-CsOnlineVoiceUser, and Set-CSUser",
        //         "C. Set-AzureADUser, Grant-CsOnlineVoiceRoutingPolicy, and Set-CsOnlineVoiceUser",
        //         "D. Set-AzureADUserLicense, Set-CsOnlineVoiceUser, and Set-CSUser"
        //     ],
        //     answer: "D. Set-AzureADUserLicense, Set-CsOnlineVoiceUser, and Set-CSUser"
        // },
        
        // // 題目編號：124
        // {
        //     type: "hotspot",
        //     text: "124.HOTSPOT\nYour company has a Microsoft 365 subscription that uses Phone System.\nTwo employees have the user account shown in the following table.\n<img src='images/23.png' class='question-img'>\nThe employees are leaving the company.\nYou need to ensure that the phone numbers can be reassigned to other employees as quickly as possible.\nWhat should you use for each employee? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.",
        //     instruction: "Hotspot: Select the appropriate options in the answer area.",
        //     rows: [
        //         {
        //             label: "User1:",
        //             options: [
        //                 "The Azure Active Directory admin center",
        //                 "The Microsoft Teams admin center",
        //                 "The Set-CsUser cmdlet"
        //             ],
        //             answer: "The Microsoft Teams admin center"
        //         },
        //         {
        //             label: "User2:",
        //             options: [
        //                 "The Azure Active Directory admin center",
        //                 "The Microsoft Teams admin center",
        //                 "The Set-CsUser cmdlet"
        //             ],
        //             answer: "The Set-CsUser cmdlet"
        //         }
        //     ]
        // },

        // // 題目編號：125
        // {
        //     type: "checkbox",
        //     text: "125.You company has a Microsoft Office 365 subscription.\nUsers in the company’s sales department frequently invite guest users to meetings.\nYou need to ensure that when the sales department users invite guest users to meetings, the guest users are admitted by default. The solution must only apply to the sales department users.\nWhich two actions should you perform?\nEach correct solution presents part of the solution. NOTE: Each correct selection is worth one point.",
        //     instruction: "Checkbox: Select 2 items.",
        //     max: 2,
        //     options: [
        //         "A. In the global meeting policy, set Automatically admit users to Everyone.",
        //         "B. Create a new meeting policy and set Automatically admit users to Everyone.",
        //         "C. Apply the policy to the sales department users.",
        //         "D. In the global meeting policy, set Automatically admit users to Everyone in your organization."
        //     ],
        //     answer: [
        //         "B. Create a new meeting policy and set Automatically admit users to Everyone.",
        //         "C. Apply the policy to the sales department users."
        //     ]
        // },

        // // 題目編號：126
        // {
        //     type: "radio",
        //     text: "126.Your company has a Microsoft 365 subscription.\nYou have a Microsoft Teams team named Sales that is set to Private.\nUsers report that they can view the Sales team from a list of suggested teams.\nYou need to hide the team from the list of suggested teams.\nWhat should you do from the Microsoft Teams client?",
        //     instruction: "Select the correct answer.",
        //     options: [
        //         "A. Modify the Team discovery settings.",
        //         "B. Select the Hide team option.",
        //         "C. Modify the team privacy settings.",
        //         "D. Modify the team member permissions."
        //     ],
        //     answer: "A. Modify the Team discovery settings."
        // },

        // // 題目編號：127
        // {
        //     type: "radio",
        //     text: "127.You network contains an on-premises Active Directory domain that syncs to a Microsoft 365 subscription.\nFrom the Microsoft Teams client, you create a new team named Sales.\nYou need to ensure that the team includes all users in the company’s sales department. The solution must ensure that the new employees hired for the sales department are added automatically to the team.\nWhich tool should you use to configure the membership of the Sales group?",
        //     instruction: "Select the correct answer.",
        //     options: [
        //         "A. Active Directory Users and Computers",
        //         "B. the Microsoft 365 admin center",
        //         "C. Azure AD Connect",
        //         "D. the Azure Active Directory admin center"
        //     ],
        //     answer: "B. the Microsoft 365 admin center"
        // },

        // // 題目編號：128
        // {
        //     type: "radio",
        //     text: "128.You are a Microsoft Teams administrator for your company.\nThe company creates a new Microsoft Teams app named App1. A developer packages App1 as a ZIP file.\nYou need to ensure that App1 can be uploaded as a ZIP package to Microsoft Teams.\nWhich Apps setting should you turn on?",
        //     instruction: "Select the correct answer.",
        //     options: [
        //         "A. Allow uploading custom apps.",
        //         "B. Enable new external apps by default.",
        //         "C. Enable default apps.",
        //         "D. Allow external apps in Microsoft Teams."
        //     ],
        //     answer: "A. Allow uploading custom apps."
        // },

        // // 題目編號：129
        // {
        //     type: "radio",
        //     text: "129.Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYour company has 10 offices in North America and Europe.\nThe company has 5,000 users.\nYou plan to deploy Microsoft Teams for all the users.\nYou run a pilot project for the planned deployment.\nYou need to identify the network packet loss from the pilot computers to Microsoft Teams during calls.\nSolution: From the Microsoft Teams admin center, you review the Microsoft Call Quality Dashboard.\nDoes this meet the goal?",
        //     instruction: "Select the correct answer.",
        //     options: [
        //         "A. Yes",
        //         "B. No"
        //     ],
        //     answer: "A. Yes"
        // },

        // // 題目編號：130
        // {
        //     type: "radio",
        //     text: "130.Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYour company has 10 offices in North America and Europe.\nThe company has 5,000 users.\nYou plan to deploy Microsoft Teams for all the users.\nYou run a pilot project for the planned deployment.\nYou need to identify the network packet loss from the pilot computers to Microsoft Teams during calls.\nSolution: You run the Network Testing Companion.\nDoes this meet the goal?",
        //     instruction: "Select the correct answer.",
        //     options: [
        //         "A. Yes",
        //         "B. No"
        //     ],
        //     answer: "B. No"
        // },

        // // 題目編號：131
        // {
        //     type: "radio",
        //     text: "131.Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYour company has 10 offices in North America and Europe.\nThe company has 5,000 users.\nYou plan to deploy Microsoft Teams for all the users.\nYou run a pilot project for the planned deployment.\nYou need to identify the network packet loss from the pilot computers to Microsoft Teams during calls.\nSolution: From the Microsoft Teams admin center, you select Analytics & reports.\nDoes this meet the goal?",
        //     instruction: "Select the correct answer.",
        //     options: [
        //         "A. Yes",
        //         "B. No"
        //     ],
        //     answer: "B. No"
        // },

        // // 題目編號：132
        // {
        //     type: "radio",
        //     text: "132.Your company has a Microsoft 365 tenant that uses Microsoft Skype for Business Online.\nAll users connect to Skype for Business Online by using computers that run Windows 10.\nYou plan to upgrade all the users from Skype for Business Online to Microsoft Teams.\nYou need to ensure that the Microsoft Teams client is installed automatically on all the computers.\nWhat should you do from the Teams admin center?",
        //     instruction: "Select the correct answer.",
        //     options: [
        //         "A. From the Messaging policies settings, modify the Global (Org-wide default) messaging policy.",
        //         "B. From Org-wide settings, configure the Teams upgrade settings.",
        //         "C. From Teams apps, add an App setup policy."
        //     ],
        //     answer: "B. From Org-wide settings, configure the Teams upgrade settings."
        // },

        // // 題目編號：133
        // {
        //     type: "hotspot",
        //     text: "Your company has a Microsoft 365 subscription.\nThe company’s only messaging policy is a global messaging policy configured as shown in the following\nexhibit.\n<img src='images/24.png' class='question-img'>\nUse the drop-down menus to select the answer choice that completes each statement based on the\ninformation presented in the graphic. NOTE: Each correct selection is worth one point.\n",
        //     instruction: "Hotspot: Select the appropriate options in the answer area.",
        //     rows: [
        //         {
        //             label: "User [answer choice] sent chat messages.",
        //             options: [
        //                 "can only delete",
        //                 "can only modify",
        //                 "can delete and modify",
        //                 "cannot delete and modify"
        //             ],
        //             answer: "cannot delete and modify"
        //         },
        //         {
        //             label: "Team owners [answer choice] sent chat messages.",
        //             options: [
        //                 "can only delete",
        //                 "can only modify",
        //                 "can delete and modify",
        //                 "cannot delete and modify"
        //             ],
        //             answer: "can only delete"
        //         }
        //     ]
        // },
        // // 題目編號：134
        // {
        //     type: "radio",
        //     text: "Your company has five offices. Each office has a unique phone number.\nYou plan to deploy Phone System to all the offices.\nYou need to ensure that each office has a unique greeting message for the weekdays and a unique\ngreeting message for the weekends. The solution must minimize administrative effort.\nWhat should you create?\n",
        //     instruction: "Select the correct answer.",
        //     options: [
        //         "A. one auto attendant that contains all five phone numbers",
        //         "B. one call queue that contains all five phone numbers",
        //         "C. five auto attendants that each contains one phone number",
        //         "D. five call queues that each contains one phone number"
        //     ],
        //     answer: "C. five auto attendants that each contains one phone number"
        // },

        // // 題目編號：135
        // {
        //     type: "hotspot",
        //     text: "Your company has a Microsoft 365 subscription. You add guest users to the organization.\nThe company’s global live event policy is configured as shown in the following exhibit.\n<img src='images/25.png' class='question-img'>\nUse the drop-down menus to select the answer choice that completes each statement based on the\ninformation presented in the graphic. NOTE: Each correct selection is worth one point.\n",
        //     instruction: "Hotspot: Select the appropriate options in the answer area.",
        //     rows: [
        //         {
        //             label: "[Answer choice] can access live events.",
        //             options: [
        //                 "Users who have an Azure AD account",
        //                 "external access users",
        //                 "and guest users",
        //                 "Only users who have an Azure AD account and external access users",
        //                 "Only users who have an Azure AD account and guest users",
        //                 "Only users who have an Azure AD account only"
        //             ],
        //             answer: "Only users who have an Azure AD account and guest users"
        //         },
        //         {
        //             label: "[Answer choice] can schedule live events.[Answer choice] can schedule live events.",
        //             options: [
        //                 "All users who have an Azure AD account",
        //                 "All users who have an Azure AD account and guest users",
        //                 "Only global administrators",
        //                 "Only team owners"
        //             ],
        //             answer: "All users who have an Azure AD account"
        //         }
        //     ]
        // },

        // // 題目編號：136
        // {
        //     type: "checkbox",
        //     text: "Your company is upgrading from Microsoft Skype for Business Online to Microsoft Teams.\nThe company's Microsoft Teams upgrade policy is set to Islands coexistence mode. The company plans\nto maintain the coexistence mode for several months.\nSeveral users report that they receive email messages about missed chat conversations.\nYou need to recommend a solution to ensure that all the users receive chat messages.\nWhich two actions should you recommend? Each correct answer presents part of the solution. NOTE:\nEach correct selection is worth one point.\n",
        //     instruction: "Checkbox: Select 2 items.",
        //     max: 2,
        //     options: [
        //         "A. Install the Microsoft Teams clients on all the computers that run the Skype for Business client. Instruct the users to sign in to both client applications.",
        //         "B. Instruct the users to modify the permissions in the Microsoft Teams client.",
        //         "C. Modify the global app setup policy.",
        //         "D. Modify the global app permission policy.",
        //         "E. Install the Skype for Business client on all the computers that run the Microsoft Teams client. Instruct the users to sign in to both client applications."
        //     ],
        //     answer: [
        //         "A. Install the Microsoft Teams clients on all the computers that run the Skype for Business client. Instruct the users to sign in to both client applications.",
        //         "E. Install the Skype for Business client on all the computers that run the Microsoft Teams client. Instruct the users to sign in to both client applications."
        //     ]
        // },

        //         // 題目編號：137
        // {
        //     type: "checkbox",
        //     text: "Your company has a Microsoft 365 subscription.\nYou need to ensure that users from a partner company named Contoso, Ltd. can collaborate you’re your\ncompany's users in teams. The solution must ensure that the Contoso users can exchange chat\nmessages in channels.\nWhich three actions should you perform before you add the Contoso users to teams? Each correct\nanswer presents part of the solution. NOTE: Each correct selection is worth one point.\n",
        //     instruction: "Checkbox: Select 3 items.",
        //     max: 3,
        //     options: [
        //         "A. From the Services & add-ins settings in the Microsoft 365 admin center, set Let group members outside the organization access group content to On.",
        //         "B. From the Guest access settings in the Microsoft Teams admin center, set Allow guest access inMicrosoft Teams to On.",
        //         "C. From the External collaboration settings in the Azure Active Directory admin center, add Contoso's domain to the list of target domains.",
        //         "D. From the External access settings in the Microsoft Teams admin center, add Contoso's domain to the Allowed list of domains.",
        //         "E. From the External collaboration settings in the Azure Active Directory admin center, set Guest users permissions are limited to No.",
        //         "F. From the Services & add-ins settings in the Microsoft 365 admin center, set Let group owners add people outside the organization to groups to On."
        //     ],
        //     answer: [
        //         "B. From the Guest access settings in the Microsoft Teams admin center, set Allow guest access inMicrosoft Teams to On.",
        //         "D. From the External access settings in the Microsoft Teams admin center, add Contoso's domain to the Allowed list of domains.",
        //         "F. From the Services & add-ins settings in the Microsoft 365 admin center, set Let group owners add people outside the organization to groups to On."
        //     ]
        // },

        //         // 題目編號：138
        // {
        //     type: "checkbox",
        //     text: "Your company has a Microsoft 365 subscription.\nYou recently set the company's Microsoft Teams upgrade policy to Teams only coexistence mode.\nA user reports that several online meetings are configured to use Microsoft Skype for Business.\nYou need to convert the online meetings in the user’s calendar to use Microsoft Teams.\nWhat are two possible ways to achieve the goal? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.",
        //     instruction: "Checkbox: Select 2 items.",
        //     max: 2,
        //     options: [
        //         "A. From PowerShell, run the Start-CsExMeetingMigration cmdlet and specify the -identity parameter.",
        //         "B. Run the Skype for Business Meeting Update tool.",
        //         "C. From the External collaboration settings in the Azure Active Directory admin center, add Contoso's domain to the list of target domains.",
        //         "D. From PowerShell, run the Set-CsTeamsUpgradeConfiguration cmdlet.",
        //         "E. From the Microsoft Teams admin center, modify the Microsoft Teams upgrade policy."
        //     ],
        //     answer: [
        //         "A. From PowerShell, run the Start-CsExMeetingMigration cmdlet and specify the -identity parameter.",
        //         "B. Run the Skype for Business Meeting Update tool."
        //     ]
        // },

        //         // 題目編號：139
        // {
        //     type: "radio",
        //     text: "Your company has a Microsoft Office 365 subscription.\nThe company has the departments and teams shown in the following table.\n<img src='images/26.png' class='question-img'>\nYou need to ensure that only the following apps appear in the app bar of the Microsoft Teams client for\nonly the events department:\n✑ Activity\n✑ Shifts\n✑ Chat\nWhat should you do first?\n",
        //     instruction: "Select the correct answer.",
        //     options: [
        //         "A. Create a custom app permission policy.",
        //         "B. Modify the global app permission policy.",
        //         "C. Create a custom app setup policy.",
        //         "D. Modify the global app setup policy."
        //     ],
        //     answer: "C. Create a custom app setup policy."
        // },

        //         // 題目編號：140
        // {
        //     type: "radio",
        //     text: "Your company has a Microsoft 365 subscription.\nAn administrator reports that teams were deleted accidentally today.\nYou need to restore the teams as quickly as possible.\nWhich cmdlets should you run?\n",
        //     instruction: "Select the correct answer.",
        //     options: [
        //         "A. Get-AzureADMSDeletedGroup and Restore-AzureADMSDeletedDirectoryObject",
        //         "B. Get-Team and Restore-ADObject",
        //         "C. Get-AzureADMSDeletedGroup and Restore-ADObject",
        //         "D. Get-AzureADGroup and Restore-AzureADMSDeletedDirectoryObject",
        //         "E. Get-Team and Restore-AzureADMSDeletedDirectoryObject"
        //     ],
        //     answer: "C. Get-AzureADMSDeletedGroup and Restore-ADObject"
        // },

        //         // 題目編號：141
        // {
        //     type: "radio",
        //     text: "Your company has a Microsoft 365 subscription that contains 200 Microsoft Teams users and 20\nteams.\nYou discover that several teams do NOT have an owner.\nYou need to ensure that you receive a notification when a team is missing an owner.\nWhat should you do?\n",
        //     instruction: "Select the correct answer.",
        //     options: [
        //         "A. From PowerShell, run the Set-Team cmdlet.",
        //         "B. From the Microsoft Teams admin center, modify the Teams settings.",
        //         "C. From PowerShell, run the Add-AzureADMSLifecyclePolicyGroup cmdlet.",
        //         "D. From the Azure Active Directory admin center, modify the group expiration settings."
        //     ],
        //     answer: "D. From the Azure Active Directory admin center, modify the group expiration settings."
        // },

        //         // 題目編號：142
        // {
        //     type: "radio",
        //     text: "Your company has a Microsoft 365 subscription that uses Microsoft Office 365 E5 licenses and\nAzure Active Directory Premium Plan 1 licenses.\nYou have a team named Sales that contains all the users in the company's sales department.\nYou hire several new users in the sales department.\nYou discover that the new employees are never added to the team.\nYou need to ensure that when new sales department users are hired, they are added automatically to the\nteam.\nWhat should you do?\n",
        //     instruction: "Select the correct answer.",
        //     options: [
        //         "A. From the Microsoft Teams client, modify the settings of the Sales team.",
        //         "B. From the Azure Active Directory admin center, modify the membership type of the Sales group.",
        //         "C. From the Microsoft Teams admin center, modify the properties of the Sales team.",
        //         "D. From the Microsoft 365 admin center, modify the settings of the Sales group."
        //     ],
        //     answer: "B. From the Azure Active Directory admin center, modify the membership type of the Sales group."
        // },

        //         // 題目編號：143
        // {
        //     type: "radio",
        //     text: "Your company has a Microsoft 365 subscription.\nThe company’s global app permission policy is configured as shown in the following exhibit.\nUsers report that they can view the list of available third-party apps from the Microsoft Teams client.\n<img src='images/27.png' class='question-img'>\nYou need to ensure that the Who app is the only visible app from the Microsoft Teams client.\nWhat should you modify?\n",
        //     instruction: "Select the correct answer.",
        //     options: [
        //         "A. the Org-wide app settings",
        //         "B. the global app permission policy",
        //         "C. the global app setup policy",
        //         "D. the global teams policy"
        //     ],
        //     answer: "C. the global app setup policy"
        // },

        //         // 題目編號：144
        // {
        //     type: "radio",
        //     text: "Note: This question is part of a series of questions that present the same scenario. Each question in\nthe series contains a unique solution that might meet the stated goals. Some question sets might have\nmore than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYou have a Microsoft 365 subscription that contains several Microsoft SharePoint Online sites.\nYou need to ensure that the content stored in a SharePoint modern team site named Sales is available\nfrom Microsoft Teams. The solution must ensure that when a new channel is added to a team, a folder\nfor the channel is created in the Sales site.\nSolution: From PowerShell, you run the Set-AzureADGroup cmdlet.\nDoes this meet the goal?\nNote: This question is part of a series of questions that present the same scenario. Each question in\nthe series contains a unique solution that might meet the stated goals. Some question sets might have\nmore than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYou have a Microsoft 365 subscription that contains several Microsoft SharePoint Online sites.\nYou need to ensure that the content stored in a SharePoint modern team site named Sales is available\nfrom Microsoft Teams. The solution must ensure that when a new channel is added to a team, a folder\nfor the channel is created in the Sales site.\nSolution: From PowerShell, you run the Set-AzureADGroup cmdlet.\nDoes this meet the goal?\n",
        //     instruction: "Select the correct answer.",
        //     options: [
        //         "A. Yes",
        //         "B. No"
        //     ],
        //     answer: "B. No"
        // },


        //         // 題目編號：145
        // {
        //     type: "radio",
        //     text: "Note: This question is part of a series of questions that present the same scenario. Each question in\nthe series contains a unique solution that might meet the stated goals. Some question sets might have\nmore than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYour company has a Microsoft 365 subscription.\nYou need to prevent a user named User1 from permanently deleting private chats in Microsoft Teams.\nSolution: You create an In-Place Hold for the Microsoft OneDrive for Business site of User1.\nDoes this meet the goal?\n",
        //     instruction: "Select the correct answer.",
        //     options: [
        //         "A. Yes",
        //         "B. No"
        //     ],
        //     answer: "B. No"
        // },

        //         // 題目編號：146
        // {
        //     type: "radio",
        //     text: "Note: This question is part of a series of questions that present the same scenario. Each question in\nthe series contains a unique solution that might meet the stated goals. Some question sets might have\nmore than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYour company has a Microsoft 365 subscription and a Virtual Desktop Infrastructure (VDI) solution.\nThe company’s Microsoft Teams upgrade policy is set to Teams only coexistence mode.\nYou deploy the Microsoft Installer (MSI) package for Microsoft Teams to the VDI solution.\nSeveral months later, users of the VDI solution report that their workstation is missing several new\nMicrosoft Teams features.\nYou need to ensure that the VDI solution users can use the new Microsoft Teams features.\nSolution: From the Microsoft Teams admin center, you modify the Microsoft Teams upgrade policy.\nDoes this meet the goal?\n",
        //     instruction: "Select the correct answer.",
        //     options: [
        //         "A. Yes",
        //         "B. No"
        //     ],
        //     answer: "B. No"
        // },

//         // 題目編號：147
// {
//     type: "radio",
//     text: "Your company has a Microsoft 365 E5 subscription.\nYou enable guest access for Microsoft Teams.\nYou need to prevent all users from downloading and opening files that contain malware by using\nMicrosoft Teams channels.\nWhat should you do first?",
//     instruction: "Select the correct answer.",
//     options: [
//         "A. From the Security & Compliance admin center, create a data loss prevention (DLP) policy.",
//         "B. From the Azure Active Directory admin center, enable the End user protection baseline policy.",
//         "C. From the Security & Compliance admin center, select Turn on ATP for SharePoint, OneDrive, and Microsoft Teams.",
//         "D. From the Azure Active Directory admin center, add an identity provider."
//     ],
//     answer: "C. From the Security & Compliance admin center, select Turn on ATP for SharePoint, OneDrive, and Microsoft Teams."
// },

    //         // 題目編號：148
    //         {
    //             type: "fill",
    //             text: `Your company has a Microsoft Office 365 subscription.\nThe company has the administrators and the security requirements shown in the following table.\n\n<img src='images/28.png' class='question-img'>\n\nYou need to assign a role to each administrator to ensure that the administrators can meet the security requirements by using the Microsoft Teams admin center. The solution must use the principle of least privilege.\nWhich role should you assign to each administrator? To answer, drag the appropriate roles to the correct users. Each role may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content. NOTE: Each correct selection is worth one point.`,
    //             instruction: "拖選填空：將選項拖入空格。",
    //             options: [
    //           "Teams Communications Administrator",
    //           "Teams Communications Support Engineer",
    //           "Teams Communications Support Specialist",
    //           "Teams Service Administrator"
    // ],
    //             fillHtml: `
    //                 <div class='question-content-scroll'><div><div>Admin5：<div class='drop-zone-fill' data-idx='0' ondrop='dropFill(event)' ondragover='allowDrop(event)'></div></div>
    //                 <div>Admin6：<div class='drop-zone-fill' data-idx='1' ondrop='dropFill(event)' ondragover='allowDrop(event)'></div></div>
    //                 <div>Admin7：<div class='drop-zone-fill' data-idx='2' ondrop='dropFill(event)' ondragover='allowDrop(event)'></div></div></div></div>
    //             `,
    //             answer: ["Teams Communications Support Specialist","Teams Communications Administrator","Teams Service Administrator"]
    //         },

        //             // 題目編號：149
        // {
        //     type: "hotspot",
        //     text: "HOTSPOT\nYour company has a Microsoft 365 subscription.\nYou need to review the following information:\n- The Rate My Call data provided by users.\n- The number of Microsoft Teams live event views from the past three months.\nWhat should you use to view the information? To answer, select the appropriate options in the answer\narea.\n",
        //     instruction: "Hotspot: Select the appropriate options in the answer area.",
        //     rows: [
        //         {
        //             label: "The Rate My Call data provided by users:",
        //             options: [
        //                 "Analytics & reports in the Microsoft Teams admin center",
        //                 "Call History in the Microsoft Teams admin center",
        //                 "Microsoft Call Quality Dashboard",
        //                 "Microsoft Office 365 usage reports"
        //             ],
        //             answer: "Microsoft Call Quality Dashboard"
        //         },
        //         {
        //             label: "The number of Microsoft Teams live event views from the past three months:",
        //             options: [
        //                 "Analytics & reports in the Microsoft Teams admin center",
        //                 "Call History in the Microsoft Teams admin center",
        //                 "Microsoft Call Quality Dashboard",
        //                 "Microsoft Office 365 usage reports"
        //             ],
        //             answer: "Analytics & reports in the Microsoft Teams admin center"
        //         }
        //     ]
        // },

//         // 題目編號：150
// {
//     type: "radio",
//     text: "Your company has a Microsoft 365 subscription.\nWhen making voice calls from Microsoft Teams, users report poor call quality at specific times of the day.\nYou need to verify whether Quality of Service (QoS) is being applied to the calls.\nWhat should you use?",
//     instruction: "Select the correct answer.",
//     options: [
//         "A. the Microsoft Teams client",
//         "B. Microsoft Call Quality Dashboard",
//         "C. Network Testing Companion",
//         "D. Network Monitor"
//     ],
//     answer: "D. Network Monitor"
// },

//         // 題目編號：151
//         {
//             type: "checkbox",
//             text: "Your company has a Microsoft 365 subscription.\nYou need to ensure that only the members of the company's IT group can create private channels.\nWhich three actions should you perform? Each correct answer presents part of the solution. NOTE: Each\ncorrect selection is worth one point.",
//             instruction: "Checkbox: Select 3 items.",
//             max: 3,
//             options: [
//                 "A. Modify the global teams policy.",
//                 "B. Assign the members of the IT group to the policy.",
//                 "C. Create a custom teams policy.",
//                 "D. Run the Sec-TeamsChannel cmdlet.",
//                 "E. Modify the global messaging policy.",
//                 "F. Create a custom messaging policy."
//             ],
//             answer: [
//                 "A. Modify the global teams policy.",
//                 "B. Assign the members of the IT group to the policy.",
//                 "C. Create a custom teams policy."
//             ]
//         },

//         // 題目編號：152
// {
//     type: "radio",
//     text: "Your company has a Microsoft 365 subscription.\nYou need to create an auto attendant from the Microsoft Teams admin center.\nWhich object must be associated to the auto attendant?",
//     instruction: "Select the correct answer.",
//     options: [
//         "A. a conferencing bridge",
//         "B. a shared mailbox",
//         "C. a Calling Plan",
//         "D. a resource account"
//     ],
//     answer: "D. a resource account"
// },

// // 題目編號：153
// {
//     type: "checkbox",
//     text: "Your company has a Microsoft 365 subscription that uses Microsoft Teams.\nYou purchase an app named App1 from the Microsoft Teams Store.\nYou need to add App1 to the Microsoft Teams client for a specific group of users.\nWhich two actions should you perform from the Microsoft Teams admin center? Each correct answer\npresents part of the solution. NOTE: Each correct selection is worth one point.",
//     instruction: "Select 2 items.",
//     max: 2,
//     options: [
//         "A. From the Meeting settings, modify the Network settings.",
//         "B. From App setup policies, create a new app setup policy.",
//         "C. From App setup policies, modify the global app setup policy.",
//         "D. From the properties of each user, edit the assigned policies.",
//         "E. From the Org-wide settings, modify the Devices settings."
//     ],
//     answer: [
//         "B. From App setup policies, create a new app setup policy.",
//         "D. From the properties of each user, edit the assigned policies."
//     ]
// },

// // 題目編號：154
// {
//     type: "radio",
//     text: "Your company has 200 users.\nYou plan to upgrade all the users from Microsoft Skype for Business Online to Microsoft Teams.\nEnterprise Voice must be enabled for all users.\nYou need to recommend a coexistence mode for the Microsoft Teams upgrade policy.\nWhich mode should you recommend?",
//     instruction: "Select the correct answer.",
//     options: [
//         "A. Skype for Business with Teams collaboration",
//         "B. Islands",
//         "C. Teams only",
//         "D. Skype for Business with Teams collaboration and meetings"
//     ],
//     answer: "B. Islands"
// },

// // 題目編號：155
//             {
//                 type: "fill",
//                 text: `DRAG DROP\nYour company uses Microsoft Teams.\nYou are planning the compliance strategy for Microsoft Teams. All compliance tasks must be performed\nby a user in the compliance department who will be assigned the Global admin role and will not be a\nteam owner.\nYou need to identify which tools to use for the following tasks:\n* Archive a team.\n* Restore a deleted team.\n* Permanently delete a team.\nWhich tool should you identify for each task? To answer, drag the appropriate tools to the correct tasks.\nEach tool may be used once, more than once, or not at all. You may need to drag the split bar between\npanes or scroll to view content. NOTE: Each correct selection is worth one point.`,
//                 instruction: "拖選填空：將選項拖入空格。",
//                 options: [
//               "The Microsoft Teams admin center",
//               "The Azure Active Directory admin center",
//               "The Microsoft Teams desktop client"
//     ],
//                 fillHtml: `
//                     <div class='question-content-scroll'><div><div>Restore a deleted team:：<div class='drop-zone-fill' data-idx='0' ondrop='dropFill(event)' ondragover='allowDrop(event)'></div></div>
//                     <div>Archive a team:：<div class='drop-zone-fill' data-idx='1' ondrop='dropFill(event)' ondragover='allowDrop(event)'></div></div>
//                     <div>Permanently delete a team:：<div class='drop-zone-fill' data-idx='2' ondrop='dropFill(event)' ondragover='allowDrop(event)'></div></div></div></div>
//                 `,
//                 answer: ["The Azure Active Directory admin center","The Microsoft Teams admin center","The Microsoft Teams admin center"]
//             },

//             // 題目編號：156
// {
//     type: "radio",
//     text: "Note: This question is part of a series of questions that present the same scenario. Each question in\nthe series contains a unique solution that might meet the stated goals. Some question sets might have\nmore than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYour company has a Microsoft 365 subscription.\nYou need to prevent temporary employees from using the private chat feature in Microsoft Teams.\nSolution: You create a meeting policy and assign the policy to the users.\nDoes this meet the goal?",
//     instruction: "Select the correct answer.",
//     options: [
//         "A. Yes",
//         "B. No"
//     ],
//     answer: "B. No"
// },

// // 題目編號：157
// {
//     type: "radio",
//     text: "Note: This question is part of a series of questions that present the same scenario. Each question in\nthe series contains a unique solution that might meet the stated goals. Some question sets might have\nmore than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYour company has a Microsoft 365 subscription.\nYou need to prevent temporary employees from using the private chat feature in Microsoft Teams.\nSolution: You create a teams policy and assign the policy to the users.\nDoes this meet the goal?",
//     instruction: "Select the correct answer.",
//     options: [
//         "A. Yes",
//         "B. No"
//     ],
//     answer: "B. No"
// },

// // 題目編號：158
// {
//     type: "radio",
//     text: "Note: This question is part of a series of questions that present the same scenario. Each question in\nthe series contains a unique solution that might meet the stated goals. Some question sets might have\nmore than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYour company has a Microsoft 365 subscription.\nYou need to prevent temporary employees from using the private chat feature in Microsoft Teams.\nSolution: You create a messaging policy and assign the policy to the users.\nDoes this meet the goal?",
//     instruction: "Select the correct answer.",
//     options: [
//         "A. Yes",
//         "B. No"
//     ],
//     answer: "A. Yes"
// },

// // 題目編號：159
// {
//     type: "radio",
//     text: "Your company has a Microsoft Office 365 subscription.\nAll users can create private channels.\nYou need to prevent specific users from creating private channels.\nWhat should you create from the Microsoft Teams admin center?",
//     instruction: "Select the correct answer.",
//     options: [
//         "A. a Teams policy",
//         "B. a meeting policy",
//         "C. a setup policy",
//         "D. a permission policy"
//     ],
//     answer: "A. a Teams policy"
// },

// // 題目編號：160
// {
//     type: "radio",
//     text: "Your company has a Microsoft 365 subscription.\nYou need to prevent only users in the company’s research department from deleting chat messages.\nWhat should you do first from the Microsoft Teams admin center?",
//     instruction: "Select the correct answer.",
//     options: [
//         "A. Configure the Meeting settings.",
//         "B. Create a new messaging policy.",
//         "C. Modify the global messaging policy.",
//         "D. Create a new meeting policy."
//     ],
//     answer: "B. Create a new messaging policy."
// }
//     // 題目編號：161
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
    //     // 題目編號：162
    //     {
    //         type: "hotspot",
    //         text: "HOTSPOT\nYou open the Microsoft Call Quality Dashboard as shown in the following exhibit.\nAll Audio Streams\nThis Report shows the monthly audio streams count, poor count, and poor ratio for the last 7 months.\nThere are no filters applied so the data reflects all the call data that was captured by the Service. Audio\ncalls made over wireless and external networks can cause poor call rates to go up.\nHOTSPOT\nYou open the Microsoft Call Quality Dashboard as shown in the following exhibit.\nAll Audio Streams\nThis Report shows the monthly audio streams count, poor count, and poor ratio for the last 7 months.\nThere are no filters applied so the data reflects all the call data that was captured by the Service. Audio\ncalls made over wireless and external networks can cause poor call rates to go up.",
    //         instruction: "Hotspot: Select the appropriate options in the answer area.",
    //         rows: [
    //             {
    //                 label: "During the month of July 2019, [answer choice] calls were established successfully.",
    //                 options: [
    //                     "0",
    //                     "4",
    //                     "66",
    //                     "70"
    //                 ],
    //                 answer: "70"
    //             },
    //             {
    //                 label: "During the month of July 2019, (answer choice) calls included metric data.",
    //                 options: [
    //                     "0",
    //                     "4",
    //                     "66",
    //                     "70"
    //                 ],
    //                 answer: "66"
    //             }
    //         ]
    //     },
    //     // 題目編號：163
    // {
    //     type: "hotspot",
    //     hotspotType: "inline",
    //     text: `HOTSPOT\nYou have a Microsoft Teams team named Team1.\nTeam1 is deleted accidentally.\nYou need to recover Team1.\nHow should you complete the PowerShell script? To answer, select the appropriate options in the answer\narea. NOTE: Each correct selection is worth one point.\n`,
    //     instruction: "Hotspot: Select the appropriate options in the answer area.",
    //     hotspotHtml: `$Team = Get-AzureADMSDeletedGroup {0} Teams {1} -Id $Teams.Id`,
    //     rows: [
    //         {
    //             options: [
    //                           "-All",
    //                           "-Filter",
    //                           "-SearchString"
    //                 ],
    //             answer: "-SearchString"
    //         }, // 對應 {0}
    //         {
    //             options: [
    //                           "Restore-ADObject",
    //                           "Restore-AzureADDeletedApplication",
    //                           "Restore-AzureADMS DeletedDirectoryObject"
    //                 ],
    //             answer: "Restore-AzureADMS DeletedDirectoryObject"
    //         } // 對應 {1}
    //     ]
    // },

//             // 題目編號：164
//         {
//             type: "hotspot",
//             text: "HOTSPOT\nYou have a Microsoft 365 tenant that uses Microsoft Skype for Business on-premises.\nYou plan to upgrade to Microsoft Teams in stages based on groups.\nThe features required by each group are shown in the following table.\n<img src='images/29.png' class='question-img'>\nHow should you configure the upgrade policy for the groups? To answer, select the appropriate options\nin the answer area.\n",
//             instruction: "Hotspot: Select the appropriate options in the answer area.",
//             rows: [
//                 {
//                     label: "Sales:",
//                     options: [
//                         "Skype for Business only",
//                         "Skype for Business with Teams Collaboration",
//                         "Skype for Business with Teams Collaboration and Meetings",
//                         "Teams only"
//                     ],
//                     answer: "Teams only"
//                 },
//                 {
//                     label: "Human Resources:",
//                     options: [
//                         "Skype for Business only",
//                         "Skype for Business with Teams Collaboration",
//                         "Skype for Business with Teams Collaboration and Meetings",
//                         "Teams only"
//                     ],
//                     answer: "Skype for Business with Teams Collaboration,Skype for Business with Teams Collaboration and Meetings"
//                 },
//                 {
//                     label: "Research:",
//                     options: [
//                         "Skype for Business only",
//                         "Skype for Business with Teams Collaboration",
//                         "Skype for Business with Teams Collaboration and Meetings",
//                         "Teams only"
//                     ],
//                     answer: "Skype for Business with Teams Collaboration"
//                 }
//             ]
//         },


//         // 題目編號：165
// {
//     type: "radio",
//     text: "You have a Microsoft 365 subscription that contains a user named Used.\nUser1 experiences audio issues while sharing his screen during Microsoft Teams meetings.\nYou need to investigate whether the headset of User1 causes the issues.\nWhich report should you use?",
//     instruction: "Select the correct answer.",
//     options: [
//         "A. Quality of Experience",
//         "B. Media reliability metrics",
//         "C. Customer endpoint information support",
//         "D. Failure Drill Down"
//     ],
//     answer: "A. Quality of Experience"
// },

// // 題目編號：166
// {
//     type: "radio",
//     text: "You have a Microsoft Office 365 subscription.\nYou need to prevent guest users from deleting channels from a Microsoft Teams team.\nWhat should you use?",
//     instruction: "Select the correct answer.",
//     options: [
//         "A. the Microsoft 365 admin center",
//         "B. the Microsoft Teams PowerShell module",
//         "C. the Azure Active Directory admin center",
//         "D. the Security & Compliance admin center"
//     ],
//     answer: "B. the Microsoft Teams PowerShell module"
// },

// // 題目編號：167
// {
//     type: "radio",
//     text: "Note: This question is part of a series of questions that present the same scenario. Each question in\nthe series contains a unique solution that might meet the stated goals. Some question sets might have\nmore than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYour company has a Microsoft 365 subscription that uses an Azure Active Directory (Azure AD) tenant\nnamed contoso.com.\nYou need to prevent guest users in the tenant from using cameras during Microsoft Teams meetings.\nSolution: From Microsoft Teams admin center, you modify the Guest access settings.\nDoes this meet the goal?",
//     instruction: "Select the correct answer.",
//     options: [
//         "A. Yes",
//         "B. No"
//     ],
//     answer: "A. Yes"
// },

// // 題目編號：168
// {
//     type: "radio",
//     text: "Note: This question is part of a series of questions that present the same scenario. Each question in\nthe series contains a unique solution that might meet the stated goals. Some question sets might have\nmore than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYour company has a Microsoft 365 subscription that uses an Azure Active Directory (Azure AD) tenant\nnamed contoso.com.\nYou need to prevent guest users in the tenant from using cameras during Microsoft Teams meetings.\nSolution: From Microsoft Teams admin center, you modify the External sharing settings.\nDoes this meet the goal?",
//     instruction: "Select the correct answer.",
//     options: [
//         "A. Yes",
//         "B. No"
//     ],
//     answer: "A. Yes"
// },

// // 題目編號：169
// {
//     type: "checkbox",
//     text: "Your company has a Microsoft 365 subscription that contains three groups named HR, Marketing,\nand Sales.\nYou need to configure the Microsoft Teams desktop client.\nThe solution must meet the following requirements:\n✑ Members of the HR group must be prevented from pinning apps to their app bar.\n✑ Members of the Marketing group must have the Microsoft Planner app pinned to their app bar.\n✑ Members of the Sales group must not be affected by policies applied to the Marketing and HR groups.\nWhich two actions should you perform? Each correct answer presents part of the solution. NOTE: Each\ncorrect selection is worth one point.",
//     instruction: "Select 2 items.",
//     max: 2,
//     options: [
//         "A. Modify the global app setup policy.",
//         "B. Modify the global app permission policy.",
//         "C. Create an app setup policy for HR.",
//         "D. Create an app setup policy for Marketing.",
//         "E. Create an app permission policy for Marketing.",
//         "F. Create an app permission policy for HR."
//     ],
//     answer: [
//         "C. Create an app setup policy for HR.",
//         "D. Create an app setup policy for Marketing."
//     ]
// },
// // 題目編號：170
//             {
//                 type: "matrix",
//                 text: `HOTSPOT\nYou have a Microsoft 365 E5 subscription that uses Microsoft Teams and a hybrid deployment of\nMicrosoft Skype for Business Server.\nCoexistence mode in Microsoft Teams is set to Islands.\nCoexistence mode is configured for three users named User1, User2, and User3 as shown in the\nfollowing table.\n\n<img src='images/30.png' class='question-img'>\n\nThe Skype for Business user accounts are homed as shown in the following table.\n\n<img src='images/31.png' class='question-img'>\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE:\nEach correct selection is worth one point.\n`,
//                 instruction: "Matrix: Select Yes or No for each statement.",
//                 rows: [
//                     {
//                         label: "User3 must use the Microsoft Teams client to initiate a new chat with User1.",
//                         answer: "Yes"
//                     },
//                     {
//                         label: "User1 must use the Microsoft Teams client to initiate a new chat with User2.",
//                         answer: "No"
//                     },
//                     {
//                         label: "User2 must use the Skype for Business client to initiate a new chat with User1 and User3.",
//                         answer: "Yes"
//                     }
//                 ]
//             },
// // 題目編號：171
// {
//     type: "radio",
//     text: "Note: This question is part of a series of questions that present the same scenario. Each question in\nthe series contains a unique solution that might meet the stated goals. Some question sets might have\nmore than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYour company has 10 offices in North America and Europe.\nThe company has 5,000 users.\nYou plan to deploy Microsoft Teams for all the users.\nYou run a pilot project for the planned deployment.\nYou need to identify the network packet loss from the pilot computers to Microsoft Teams during calls.\nSolution: From the Microsoft Teams admin center, you run the Network Planner.\nDoes this meet the goal?",
//     instruction: "Select the correct answer.",
//     options: [
//         "A. Yes",
//         "B. No"
//     ],
//     answer: "B. No"
// },
// // 題目編號：172
// {
//     type: "radio",
//     text: "You have a Microsoft Office 365 subscription.\nYou need to prevent guest users from deleting channels from a Microsoft Teams team.\nWhat should you use?",
//     instruction: "Select the correct answer.",
//     options: [
//         "A. the Microsoft 365 admin center",
//         "B. the Azure portal",
//         "C. the Microsoft Teams client",
//         "D. the Security & Compliance admin center"
//     ],
//     answer: "A. the Microsoft 365 admin center"
// },
// // 題目編號：173
// {
//     type: "radio",
//     text: "You have a Microsoft 365 subscription and an on-premises Active Directory domain that syncs by\nusing Azure AD Connect.\nYou need to change the Membership type of a group from Assigned (static) to Dynamic User.\nWhat should you use?",
//     instruction: "Select the correct answer.",
//     options: [
//         "A. Active Directory Users and Computers",
//         "B. the Microsoft Teams client",
//         "C. the Azure Active Directory admin center",
//         "D. the Microsoft Teams admin center"
//     ],
//     answer: "C. the Azure Active Directory admin center"
// },
// // 題目編號：174
//             {
//                 type: "matrix",
//                 text: `HOTSPOT\nYour company uses Microsoft Skype for Business Online and Microsoft Teams.\nAll Skype for Business Online users can make and receive PSTN calls. Microsoft Teams is configured for\nPSTN calls.\nYou plan to upgrade the Skype for Business Online users to Microsoft Teams.\nThe Teams upgrade settings are configured as shown in the Teams upgrade exhibit. (Click the Teams\nupgrade tab.)\n\n<img src='images/32.png' class='question-img'>\n\nYou apply TeamsUpgradePolicy to the user accounts of the company’s R&D and human resources (HR)\ndepartments by using the coexistence modes shown in the following table.\n\n<img src='images/33.png' class='question-img'>\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE:\nEach correct selection is worth one point.\n`,
//                 instruction: "Matrix: Select Yes or No for each statement.",
//                 rows: [
//                     {
//                         label: "Users in the R&D department will not be able to join Skype for Business Online meetings.",
//                         answer: "No"
//                     },
//                     {
//                         label: "Existing Skype for Business Online meetings scheduled by users in the HR department will migrate automatically to Microsoft Teams.",
//                         answer: "Yes"
//                     },
//                     {
//                         label: "Users in the HR department will be able to make and receive PSTN calls by using Microsoft Teams.",
//                         answer: "No"
//                     }
//                 ]
//             },
// // 題目編號：175
// {
//     type: "radio",
//     text: "Your company has a Microsoft 365 subscription that contains a Microsoft Teams auto attendant.\nCalls to the auto attendant will be redirected to a shared voicemail.\nYou need to create a group for the shared voicemail.\nWhich type of group should you create?",
//     instruction: "Select the correct answer.",
//     options: [
//         "A. mail-enabled security",
//         "B. distribution",
//         "C. security",
//         "D. Microsoft 365"
//     ],
//     answer: "D. Microsoft 365"
// },
// // 題目編號：176
// {
//     type: "radio",
//     text: "Note: This question is part of a series of questions that present the same scenario. Each question in\nthe series contains a unique solution that might meet the stated goals. Some question sets might have\nmore than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these\nquestions will not appear in the review screen.\nYour company has a Microsoft 365 subscription.\nYou need to prevent temporary employees from using the private chat feature in Microsoft Teams.\nSolution: You create an app permission policy and assign the policy to the users.\nDoes this meet the goal?",
//     instruction: "Select the correct answer.",
//     options: [
//         "A. Yes",
//         "B. No"
//     ],
//     answer: "B. No"
// },
        // // 題目編號：177
        // {
        //     type: "hotspot",
        //     text: "HOTSPOT\nYour company has a Microsoft Office 365 subscription.\nThe company has offices in France, United States, and Belgium.\nYou plan to implement Phone System to meet the following requirements:\nThe office in Belgium must use SIP trunks from the current telecommunication provider.\nThe office in France must integrate the phone number range and an on-premises IP-PBX.\nThe office in the United States must minimize the infrastructure required to deploy the planned Phone\nSystem.\nYou need to recommend which PSTN connectivity meets the requirements.\nWhich PSTN connectivity should you recommend for each office? To answer, select the appropriate\noptions in the answer area. NOTE: Each correct selection is worth one point.\n",
        //     instruction: "Hotspot: Select the appropriate options in the answer area.",
        //     rows: [
        //         {
        //             label: "France:",
        //             options: [
        //                 "Calling Plans",
        //                 "Direct Routing"
        //             ],
        //             answer: "Direct Routing"
        //         },
        //         {
        //             label: "Belgium:",
        //             options: [
        //                 "Calling Plans",
        //                 "Direct Routing"
        //             ],
        //             answer: "Direct Routing"
        //         },
        //         {
        //             label: "United States:",
        //             options: [
        //                 "Calling Plans",
        //                 "Direct Routing"
        //             ],
        //             answer: "Calling Plans"
        //         }
        //     ]
        // },

    //     // 題目編號：178
    // {
    //     type: "hotspot",
    //     hotspotType: "inline",
    //     text: `HOTSPOT\nYou have a Microsoft 365 subscription.\nYou need to create a new Microsoft Teams team named Human Resources that meets the following\nrequirements:\n✑ All join requests must be approved by an owner of the team.\n✑ The URL for the Microsoft SharePoint Online site of the team must be /teams/HR.\n✑ Two users named jane@contoso.com and bob@contoso.com must be assigned as team owners.\nHow should you complete the PowerShell command? To answer, select the appropriate options in the\nanswer area. NOTE: Each correct selection is worth one point.\n`,
    //     instruction: "Hotspot: Select the appropriate options in the answer area.",
    //     hotspotHtml: `Connect-MicrosoftTeams \n $TeamId New-Team -DisplayName "Human Resources" {0} Private \n -Owner jane.doe@contoso.com -MailNickName {1} \n {2} -GroupId $TeamId. GroupId -User bob@contoso.com -Role Owner:`,
    //     rows: [
    //         {
    //             options: [
    //                           "-Classification",
    //                           "-ShowinTeamsSearchAndSuggestions",
    //                           "-Template",
    //                           "-Visibility"
    //                 ],
    //             answer: "-Visibility"
    //         }, // 對應 {0}
    //         {
    //             options: [
    //                           "HR",
    //                           "/sites/HR",
    //                           "/teams/HR"
    //                 ],
    //             answer: "HR"
    //         }, // 對應 {1}
    //         {
    //             options: [
    //                           "Add-TeamChannelUser",
    //                           "Add-TeamUser",
    //                           "Set-Team",
    //                           "Set-TeamMemberSettings"
    //                 ],
    //             answer: "Add-TeamUser"
    //         } // 對應 {2}
    //     ]
    // },
//     // 題目編號：179
//     {
//         type: "hotspot",
//         hotspotType: "inline",
//         text: `HOTSPOT\nYou have a Microsoft 365 subscription that contains a user named User1.\nYou have a custom policy named AppPolicy that has the following configurations:\n✑ Allow all apps published by Microsoft.\n✑ Allow only specified third-party apps.\n✑ Block all custom apps.\nYou need to assign AppPolicy to User1.\nHow should you complete the PowerShell command? To answer, select the appropriate options in the\nanswer area. NOTE: Each correct selection is worth one point.\n`,
//         instruction: "Hotspot: Select the appropriate options in the answer area.",
//         hotspotHtml: `{0} -Identity "User1" {1} AppPolicy`,
//         rows: [
//             {
//                 options: [
//                               "Grant-CsTeamsAppSetupPolicy",
//                               "Grant-CsTeamsAppPermissionPolicy",
//                               "Set-CsTeamsAppSetupPolicy",
//                               "Set-CsTeamsAppPermissionPolicy"
//                     ],
//                 answer: "Grant-CsTeamsAppPermissionPolicy"
//             }, // 對應 {0}
//             {
//                 options: [
//                               "-Description",
//                               "-PinnedAppBarApps",
//                               "-PolicyName"
//                     ],
//                 answer: "-PolicyName"
//             },
//         ]
//     },
//     // 題目編號：180
// {
//     type: "radio",
//     text: "You have a Microsoft 365 E5 subscription that is linked to an Azure Active Directory (Azure AD)\ntenant.\nThe tenant contains the groups shown in the following table.\n\n<img src='images/34.png' class='question-img'>\n\nYou need to create a new team by using the Microsoft Teams client.\nWhich group can you use to create the new team?",
//     instruction: "Select the correct answer.",
//     options: [
//         "A. Group4",
//         "B. Group1",
//         "C. Group2",
//         "D. Group3"
//     ],
//     answer: "D. Group3"
// },
// // 題目編號：181
// {
//     type: "checkbox",
//     text: "HOTSPOT\nYou have a Microsoft 365 E5 subscription that contains a hybrid deployment of Microsoft Skype for\nBusiness Server and a user named User1.\nYou need User1 to perform a tenant readiness assessment for Skype for Business upgrade by using\nAdvisor for Teams.\nWhich two additional licenses should you assign to User1? To answer, select the appropriate settings in\nthe answer area. NOTE: Each correct selection is worth one point.",
//     instruction: "Select 2 items.",
//     max: 2,
//     options: [
//         "A. Microsoft Forms (Plan E5)  Office 365 E5",
//         "B. Microsoft Information Governance Office 365 E5",
//         "C. Microsoft Kaizala Pro Office 365 E5",
//         "D. Microsoft MyAnalytics (Full)  Office 365 E5",
//         "E. Microsoft Planner Office 365 E5",
//         "F. Microsoft Records Management Office 365 E5"
//     ],
//     answer: [
//         "A. Microsoft Forms (Plan E5)  Office 365 E5",
//         "E. Microsoft Planner Office 365 E5"
//     ]
// },
// // 題目編號：182
// {
//     type: "radio",
//     text: "You have a Microsoft 365 subscription that uses Microsoft Teams and 300 Microsoft Teams-certified\nIP phones.\nYou need to locate, group, and filter the IP phones based on keywords.\nWhat should you use?",
//     instruction: "Select the correct answer.",
//     options: [
//         "A. device tags",
//         "B. reporting labels",
//         "C. a configuration profile",
//         "D. a label policy"
//     ],
//     answer: "A. device tags"
// },
// // 題目編號：183
// {
//     type: "radio",
//     text: "Your company has a Microsoft 365 subscription.\nYou need to customize meeting invitation emails to include the company logo.\nWhat should you do in the Microsoft Teams admin center?",
//     instruction: "Select the correct answer.",
//     options: [
//         "A. From Teams settings, modify the Email integration settings.",
//         "B. From Meeting settings, modify the Email invitation settings.",
//         "C. From Meeting policies, create a new meeting policy and assign the policy.",
//         "D. From Meeting policies, modify the Global (Org-wide default) policy."
//     ],
//     answer: "B. From Meeting settings, modify the Email invitation settings."
// },
// // 題目編號：184
// {
//     type: "checkbox",
//     text: "Your company has a Microsoft 365 subscription. The subscription contains 200 Microsoft Teams\nusers and a team named IT Support that has 50 members.\nYou need to ensure that the caller ID for outbound PSTN calls from IT Support is the phone number of\nthe company's IT helpdesk. The solution must minimize administrative effort.\nWhich two tools should you include in the solution? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.",
//     instruction: "Select 2 items.",
//     max: 2,
//     options: [
//         "A. the Microsoft Teams PowerShell module",
//         "B. the Azure Active Directory (Azure AD) PowerShell for Graph module",
//         "C. the Call Quality Dashboard (CQD)",
//         "D. the Windows PowerShell module for Microsoft Skype for Business Online",
//         "E. the Skype for Business admin center"
//     ],
//     answer: [
//         "A. the Microsoft Teams PowerShell module",
//         "D. the Windows PowerShell module for Microsoft Skype for Business Online"
//     ]
// },

// // 題目編號：185
//             {
//                 type: "fill",
//                 text: `DRAG DROP\nYou have a Microsoft 365 subscription that has Azure Active Directory Premium Plan 2 licenses.\nYou need to implement Microsoft Teams lifecycle management to meet the following requirements:\n✑ All unused teams must be deleted after 180 days.\n✑ Inactive guest users must be removed from teams automatically every three months.\n✑ Microsoft Teams admin roles must only be assigned for specific time periods.\nWhich feature should you use for each requirement? To answer, drag the appropriate features to the\ncorrect requirements. Each feature may be used once, more than once, or not at all. You may need to\ndrag the split bar between panes or scroll to view content. NOTE: Each correct selection is worth one\npoint.\n`,
//                 instruction: "拖選填空：將選項拖入空格。",
//                 options: [
//               "A Microsoft 365 group expiration policy",
//               "Access reviews in Azure Active Directory (Azure AD)",
//               "Azure Active Directory (Azure AD) Privileged Identity Management (PIM)",
//               "Entitlement management in Azure Active Directory (Azure AD)"
//     ],
//                 fillHtml: `
//                     <div class='question-content-scroll'><div><div>All unused teams must be deleted after 180 days:：<div class='drop-zone-fill' data-idx='0' ondrop='dropFill(event)' ondragover='allowDrop(event)'></div></div>
//                     <div>Inactive guest users must be removed from teams automatically every three months:：<div class='drop-zone-fill' data-idx='1' ondrop='dropFill(event)' ondragover='allowDrop(event)'></div></div>
//                     <div>Microsoft Teams Admin roles must only be assigned for specific time periods:：<div class='drop-zone-fill' data-idx='2' ondrop='dropFill(event)' ondragover='allowDrop(event)'></div></div></div></div>
//                 `,
//                 answer: ["A Microsoft 365 group expiration policy","Access reviews in Azure Active Directory (Azure AD)","Azure Active Directory (Azure AD) Privileged Identity Management (PIM)"]
//             },

//       // 題目編號：186
// {
//     type: "radio",
//     text: "You have a Microsoft 365 E5 subscription that contains a user named User1.\nYou need to change the default conferencing toll phone number for User1 by using the Microsoft Teams\nadmin center.\nWhat should you modify for User1?",
//     instruction: "Select the correct answer.",
//     options: [
//         "A. the Account settings",
//         "B. Calling policy",
//         "C. the Voice settings",
//         "D. Meeting policy"
//     ],
//     answer: "A. the Account settings"
// },

// // 題目編號：187
//             {
//                 type: "matrix",
//                 text: `HOTSPOT\nYou have a Microsoft 365 E5 subscription that contains a Microsoft Teams team named Sales Team.\nSales Team contains the members shown in the following table.\n\n<img src='images/35.png' class='question-img'>\n\nYou create a channel named Sales Project and configure the Channel moderation settings as shown in\nthe following exhibit.\n\n<img src='images/36.png' class='question-img'>\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE:\nEach correct selection is worth one point.\n`,
//                 instruction: "Matrix: Select Yes or No for each statement.",
//                 rows: [
//                     {
//                         label: "Users in the R&D department will not be able to join Skype for Business Online meetings.",
//                         answer: "Yes"
//                     },
//                     {
//                         label: "Existing Skype for Business Online meetings scheduled by users in the HR department will migrate automatically to Microsoft Teams.",
//                         answer: "Yes"
//                     },
//                     {
//                         label: "Users in the HR department will be able to make and receive PSTN calls by using Microsoft Teams.",
//                         answer: "No"
//                     }
//                 ]
//             },


// // 題目編號：188
//     {
//         type: "rank",
//         text: `Your company has a custom Microsoft Teams app named App1.\nYou need to deploy App1. The solution must ensure that App1 appears as the first item on the app bar of the Microsoft Teams client.\nWhich four actions should you perform in sequence? To answer, move the actions from the list of actions to the answer area and arrange them in the correct order.`,
//         instruction: "請由上而下依照正確的答案拖移至右側",
//         options: [
//             "Phone numbers",
//             "Emergency policies",
//             "Dial plans",
//             "Direct Routing",
//             "Voice routing policies",
//             "Call queues",
//             "Auto attendants",
//             "Call park policies",
//             "Calling policies",
//             "Caller ID policies"
//         ],
//         answer: [
//             "Auto attendants",
//             "Calling policies"
//         ]
//     },

//     // 題目編號：189
// {
//     type: "radio",
//     text: "You have a Microsoft Office 365 subscription.\nYou discover that apps from a third-party publisher have security issues.\nYou need to block all apps from the publisher.\nWhat should you use in the Microsoft Teams admin center?",
//     instruction: "Select the correct answer.",
//     options: [
//         "A. Org-wide app settings",
//         "B. Policy packages",
//         "C. Permission policies",
//         "D. Manage apps"
//     ],
//     answer: "D. Manage apps"
// },


//         // 題目編號：190
//         {
//             type: "hotspot",
//             text: "HOTSPOT\nYou have a Microsoft Office 365 subscription.\nYou need to meet the following requirements:\n✑ Pin specific apps to the Microsoft Teams app bar.\n✑ Prevent users from installing third-party apps published in the Teams app store.\n✑ Prevent users from pinning apps to the Microsoft Teams app bar.\nWhat should you use to meet each requirement? To answer, select the appropriate options in the answer\narea. NOTE: Each correct selection is worth one point.\nHOTSPOT\nYou have a Microsoft Office 365 subscription.\nYou need to meet the following requirements:\n✑ Pin specific apps to the Microsoft Teams app bar.\n✑ Prevent users from installing third-party apps published in the Teams app store.\n✑ Prevent users from pinning apps to the Microsoft Teams app bar.\nWhat should you use to meet each requirement? To answer, select the appropriate options in the answer\narea. NOTE: Each correct selection is worth one point.\n",
//             instruction: "Hotspot: Select the appropriate options in the answer area.",
//             rows: [
//                 {
//                     label: "Pin specific apps to the app bar:",
//                     options: [
//                         "App permission policies",
//                         "App setup policies",
//                         "Microsoft Teams policies",
//                         "Microsoft Teams settings"
//                     ],
//                     answer: "App setup policies"
//                 },
//                 {
//                     label: "Prevent users from pinning apps to the app bar:",
//                     options: [
//                         "App permission policies",
//                         "App setup policies",
//                         "Microsoft Teams policies",
//                         "Microsoft Teams settings"
//                     ],
//                     answer: "App setup policies"
//                 },
//                 {
//                     label: "Prevent users from installing third-party apps published to the Teams app store:",
//                     options: [
//                         "App permission policies",
//                         "App setup policies",
//                         "Microsoft Teams policies",
//                         "Microsoft Teams settings"
//                     ],
//                     answer: "App permission policies"
//                 }
//             ]
//         },   


// // 題目編號：191
// {
//     type: "radio",
//     text: "You have a Microsoft Office 365 subscription.\nYou plan to upgrade from Microsoft Skype for Business to Microsoft Teams.\nYou use the following workloads in Skype for Business:\n✑ Audio/video conferencing\n✑ Dial-in conferencing\n✑ Enterprise Voice\n✑ Persistent Chat\n✑ Chat\nYou need to ensure that users can evaluate Microsoft Teams while maintaining PSTN calling by using\nthe Skype for Business client.\nWhich coexistence mode should you use?",
//     instruction: "Select the correct answer.",
//     options: [
//         "A. Islands",
//         "B. Skype for Business with Teams collaboration",
//         "C. Skype for Business only",
//         "D. Meetings First"
//     ],
//     answer: "D. Meetings First"
// },

// // 題目編號：192
//             {
//                 type: "fill",
//                 text: `DRAG DROP\nYou have a Microsoft 365 subscription that has Azure Active Directory Premium Plan 2 licenses.\nYou need to implement Microsoft Teams lifecycle management to meet the following requirements:\n✑ All unused teams must be deleted after 180 days.\n✑ Inactive guest users must be removed from teams automatically every three months.\n✑ Microsoft Teams admin roles must only be assigned for specific time periods.\nWhich feature should you use for each requirement? To answer, drag the appropriate features to the\ncorrect requirements. Each feature may be used once, more than once, or not at all. You may need to\ndrag the split bar between panes or scroll to view content. NOTE: Each correct selection is worth one\npoint.\n`,
//                 instruction: "拖選填空：將選項拖入空格。",
//                 options: [
//               "App setup policies",
//               "Teams policies",
//               "Team templates",
//               "Update policies"
//     ],
//                 fillHtml: `
//                     <div class='question-content-scroll'><div><div>All new teams must include the wiki and planner apps:：<div class='drop-zone-fill' data-idx='0' ondrop='dropFill(event)' ondragover='allowDrop(event)'></div></div>
//                     <div>Users in specific groups must be prevented from creating private channels:Users in specific groups must be prevented from creating private channels:：<div class='drop-zone-fill' data-idx='1' ondrop='dropFill(event)' ondragover='allowDrop(event)'></div></div>
//                     <div>Only users in the company's IT department must have early access to the unreleased features of Microsoft Teams:：<div class='drop-zone-fill' data-idx='2' ondrop='dropFill(event)' ondragover='allowDrop(event)'></div></div></div></div>
//                 `,
//                 answer: ["App setup policies","Teams policies","Update policies"]
//             },

//             // 題目編號：193
//             {
//                 type: "matrix",
//                 text: `HOTSPOT\nYou have a Microsoft 365 subscription that uses Microsoft Teams and contains a user named User1.\nYou have the following Microsoft Team templates:\n✑ Manage an Event\n✑ Manage a Project\n✑ Quality and Safety\n✑ Onboard Employees\nYou have the Microsoft Teams template policies shown in the following table.\n\n<img src='images/37.png' class='question-img'>\n\nThe Templates policy settings for User1 are configured as shown in the following exhibit.\n\n<img src='images/38.png' class='question-img'>\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE:\nEach correct selection is worth one point.\n`,
//                 instruction: "Matrix: Select Yes or No for each statement.",
//                 rows: [
//                     {
//                         label: "User1 can create new teams by using the Onboard Employees template.",
//                         answer: "Yes"
//                     },
//                     {
//                         label: "User1 must use the Microsoft Teams admin center to create a new O team by using a template.",
//                         answer: "No"
//                     },
//                     {
//                         label: "User1 must be assigned the Teams Administrator role to create O new teams by using the Manage a Project template.",
//                         answer: "No"
//                     }
//                 ]
//             },

// // 題目編號：194
// {
//     type: "checkbox",
//     text: "You have a Microsoft 365 subscription.\nYou create an org-wide team named Team1. Users named User1 and User2 are the owners of Team1.\nYou need to configure Team1 to meet following requirements:\n✑ Ensure that only User1 and User2 can create new posts in the General channel.\n✑ Prevent @mentions for the org-wide team members.\nWhich two actions should you perform from the Microsoft Teams client? Each correct answer presents\npart of the solution. NOTE: Each correct selection is worth one point.",
//     instruction: "Select 2 items.",
//     max: 2,
//     options: [
//         "A. From the Team1 settings, clear Give members the option to edit their messages",
//         "B. From the General Channel settings of Team1, set the channel moderation preference to Anyone can post; show alert that postings will notify everyone (recommended for large teams)",
//         "C. From the General Channel settings of Team1. set the channel moderation preference to Only owners can post messages.",
//         "D. From the Team1 settings, disable all the Fun stuff settings.",
//         "E. From the Team1 settings, set Show members the option to @team or @[team name] to Off."
//     ],
//     answer: [
//         "C. From the General Channel settings of Team1. set the channel moderation preference to Only owners can post messages.",
//         "E. From the Team1 settings, set Show members the option to @team or @[team name] to Off."
//     ]
// },

// // 題目編號：195
//             {
//                 type: "fill",
//                 text: `DRAG DROP\nYou have a Microsoft Office 365 subscription named contoso.com.\nYou need to create the Microsoft Teams teams shown in the following table.\n\n<img src='images/39.png' class='question-img'>\n\nWhat should you configure each team? To answer, drag the appropriate team types to the correct teams.\nEach team type may be used once, more than once, or not at all. You may need to drag the split bar\nbetween panes or scroll to view content. NOTE: Each correct selection is worth one point.\n`,
//                 instruction: "拖選填空：將選項拖入空格。",
//                 options: [
//               "Org-wide",
//               "Private",
//               "Public"
//     ],
//                 fillHtml: `
//                     <div class='question-content-scroll'><div><div>Sales:：<div class='drop-zone-fill' data-idx='0' ondrop='dropFill(event)' ondragover='allowDrop(event)'></div></div>
//                     <div>General:：<div class='drop-zone-fill' data-idx='1' ondrop='dropFill(event)' ondragover='allowDrop(event)'></div></div>
//                     <div>Project:：<div class='drop-zone-fill' data-idx='2' ondrop='dropFill(event)' ondragover='allowDrop(event)'></div></div></div></div>
//                 `,
//                 answer: ["Private","Org-wide","Public"]
//             },

        //        // 題目編號：196
        // {
        //     type: "hotspot",
        //     text: "HOTSPOT\nYou have a Microsoft 365 subscription.\nYou need to configure the following for all users:\n✑ Prevent the use of third-party apps in Microsoft Teams.\n✑ Configure the Microsoft Teams app navigation bar.\nThe solution must minimize administrative effort.\nWhat should you do? To answer, select the appropriate options in the answer area. NOTE: Each correct\nselection is worth one point.\n",
        //     instruction: "Hotspot: Select the appropriate options in the answer area.",
        //     rows: [
        //         {
        //             label: "Prevent the use of third-party apps in Microsoft Teams:",
        //             options: [
        //                 "From the Microsoft 365 admin center. modify the Microsoft Teams Org settings.",
        //                 "From the Microsoft 365 admin center. modify the User owned apps and services Org settings.",
        //                 "From the Microsoft Teams admin center. modify the Org-wide app settings.",
        //                 "From the Microsoft Teams admin center. modify the Org-wide settings."
        //             ],
        //             answer: "From the Microsoft Teams admin center. modify the Org-wide app settings."
        //         },
        //         {
        //             label: "Configure the Microsoft Teams app navigation bar:",
        //             options: [
        //                 "Create a new app permission policy.",
        //                 "Create a new app setup policy.",
        //                 "Modify the global app permission policy.",
        //                 "Modify the global app setup policy."
        //             ],
        //             answer: "Modify the global app setup policy."
        //         }
        //     ]
        // },

        // // 題目編號：197
        //     {
        //         type: "matrix",
        //         text: `HOTSPOT\nYour company has a Microsoft Teams deployment that contains a team named HR Taskforce.\nThe members of HR Taskforce are shown in the HR Taskforce exhibit.\n\n<img src='images/40.png' class='question-img'>\n\nThe members of a private channel named Staff Reviews are shown in the Members exhibit.\n\n<img src='images/41.png' class='question-img'>\n\nThe files in the Staff Reviews channel are shown in the Files exhibit.\n\n<img src='images/42.png' class='question-img'>\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE:\nEach correct selection is worth one point\n`,
        //         instruction: "Matrix: Select Yes or No for each statement.",
        //         rows: [
        //             {
        //                 label: "A user named Megan Bowen can view the name, description, and owner of the Staff Reviews channel.",
        //                 answer: "Yes"
        //             },
        //             {
        //                 label: "A user named Megan Bowen can open the Staff Reviews Q4.docx file.",
        //                 answer: "No"
        //             },
        //             {
        //                 label: "A user named Megan Bowen can add new members to the Staff Reviews channel.",
        //                 answer: "No"
        //             }
        //         ]
        //     },

//                     // 題目編號：198
//         {
//             type: "hotspot",
//             text: "HOTSPOT\nYou have a Microsoft 365 subscription that contains a group named Group1.\nYou need to configure Group1 to meet the following requirements:\nUsers must not be permitted to pin apps to the Microsoft Teams app bar.\nOnly the Chat, Teams, and Calendar apps must appear on the Microsoft Teams app bar.\nWhich policy type should you create and which PowerShell cmdlet should you run to assign the policy?\nTo answer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one\npoint.\n",
//             instruction: "Hotspot: Select the appropriate options in the answer area.",
//             rows: [
//                 {
//                     label: "Policy type:",
//                     options: [
//                         "App permission",
//                         "App setup",
//                         "Messaging",
//                         "Microsoft Teams"
//                     ],
//                     answer: "App setup"
//                 },
//                 {
//                     label: "PowerShell cmdlet:",
//                     options: [
//                         "Grant-CsTeamsAppPermission Policy",
//                         "Grant-CsTeamsAppSetupPolicy",
//                         "Grant-CsTeams Messaging Policy",
//                         "Grant-CsTeams MobilityPolicy"
//                     ],
//                     answer: "Grant-CsTeamsAppSetupPolicy"
//                 }
//             ]
//         },

//         // 題目編號：199
//             {
//                 type: "matrix",
//                 text: `HOTSPOT\nYou are a Microsoft Teams administrator for your company.\nYou have the Org-wide app settings shown in the App Settings exhibit. (Click the App Settings tab.)\n\n<img src='images/43.png' class='question-img'>\n\nThe company’s global app permission policy is configured as shown in the Permission Policy exhibit.\n(Click the Permission Policy tab.)\n\n<img src='images/44.png' class='question-img'>\n\nThe company’s global app setup policy is configured as shown in the Setup Policy exhibit. (Click the\nSetup Policy tab.)\n\n<img src='images/45.png' class='question-img'>\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE:\nEach correct selection is worth one point.\n`,
//                 instruction: "Matrix: Select Yes or No for each statement.",
//                 rows: [
//                     {
//                         label: "Team members can upload apps from the Microsoft Teams client.",
//                         answer: "Yes"
//                     },
//                     {
//                         label: "All team members can add the Microsoft Flow app to a team.",
//                         answer: "Yes"
//                     },
//                     {
//                         label: "All team members can add the Microsoft Planner app to a team.",
//                         answer: "No"
//                     }
//                 ]
//             },

//             // 題目編號：200
//             {
//                 type: "matrix",
//                 text: `HOTSPOT\nYour company has a Microsoft Office 365 subscription.\nThe assigned licenses are shown in the Licenses exhibit. (Click the Licenses tab.)\n\n<img src='images/46.png' class='question-img'>\n\nThe available phone numbers are shown in the Phone numbers exhibit. (Click the Phone Numbers tab.)\n\n<img src='images/47.png' class='question-img'>\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE:\nEach correct selection is worth one point.\n`,
//                 instruction: "Matrix: Select Yes or No for each statement.",
//                 rows: [
//                     {
//                         label: "Phone number +1 952 222 8948 can be assigned to a user.",
//                         answer: "No"
//                     },
//                     {
//                         label: "Phone number +1 952 222 8948 can be assigned to a call queue.",
//                         answer: "Yes"
//                     },
//                     {
//                         label: "Phone number +1 952 222 8948 can be assigned to a conference bridge.",
//                         answer: "Yes"
//                     }
//                 ]
//             },

// // 題目編號：201
// {
//     type: "checkbox",
//     text: "You have a Microsoft 365 subscription that contains two users named User1 and User2. The users\nare provisioned for Microsoft Teams calling.\nUser1 is on leave for two weeks.\nYou need to ensure that User2 is notified of all calls to User1 while User1 is away.\nWhich two actions should you perform? Each correct answer presents part of the solution. NOTE: Each\ncorrect selection is worth one point.",
//     instruction: "Select 2 items.",
//     max: 2,
//     options: [
//         "A. From Voice, add User2 to group call pickup.",
//         "B. From Voice, add User1 to group call pickup.",
//         "C. From Policies, modify the voice routing policy.",
//         "D. From the Microsoft Teams admin center, modify the settings of User2.",
//         "E. From the Microsoft Teams admin center, modify the settings of User1."
//     ],
//     answer: [
//         "A. From Voice, add User2 to group call pickup.",
//         "E. From the Microsoft Teams admin center, modify the settings of User1."
//     ]
// },

//         // 題目編號：202
//         {
//             type: "hotspot",
//             text: "HOTSPOT\nYou have a Microsoft 365 subscription that has the licenses shown in the following table.\n<img src='images/48.png' class='question-img'>\nWhat is the maximum number of user phone numbers and toll-free service numbers you can acquire? To\nanswer, select the appropriate options in the answer area. NOTE: Each correct selection is worth one\npoint.\n",
//             instruction: "Hotspot: Select the appropriate options in the answer area.",
//             rows: [
//                 {
//                     label: "User phone numbers:",
//                     options: [
//                         "100",
//                         "120",
//                         "235"
//                     ],
//                     answer: "120"
//                 },
//                 {
//                     label: "Toll-free service numbers:",
//                     options: [
//                         "30",
//                         "100",
//                         "135"
//                     ],
//                     answer: "30"
//                 }
//             ]
//         },

//         // 題目編號：203
// {
//     type: "radio",
//     text: "Your company uses Phone System.\nA group of users make outbound calls on behalf of the company’s billing department.\nYou need to ensure that when the users make the outbound calls, their numbers are replaced by a\nphone number that is associated to an existing call queue.\nWhat should you do first?",
//     instruction: "Select the correct answer.",
//     options: [
//         "A. Create a new calling policy and set Make private calls to On.",
//         "B. Create a new calling policy and set Inbound calls can be routed to call groups to On.",
//         "C. Create a new caller ID policy and set Replace caller ID to Anonymous.",
//         "D. Create a new caller ID policy and set Replace caller ID to Service number."
//     ],
//     answer: "D. Create a new caller ID policy and set Replace caller ID to Service number."
// },

// // 題目編號：204
//             {
//                 type: "matrix",
//                 text: `HOTSPOT\nYou have a Microsoft Office 365 subscription.\nAll users are assigned a Calling Plan license.\nYou configure emergency calling.\nThe global emergency calling policy is configured as shown in the Emergency Calling exhibit. (Click the Emergency Calling tab.)\n\n<img src='images/49.png' class='question-img'>\n\nThe global emergency call routing policy is configured as shown in the Emergency Call Routing exhibit.\n(Click the Emergency Call Routing tab.)\n\n<img src='images/50.png' class='question-img'>\n\nThe network topology is configured as shown in the Network Topology exhibit. (Click the Network\nTopology tab.)\n\n<img src='images/51.png' class='question-img'>\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE:\nEach correct selection is worth one point.\n`,
//                 instruction: "Matrix: Select Yes or No for each statement.",
//                 rows: [
//                     {
//                         label: "Calling Plan users will connect to emergency services when they dial an emergency number.",
//                         answer: "Yes"
//                     },
//                     {
//                         label: "The Testing and Validation group will conference in to all emergency calls.",
//                         answer: "No"
//                     },
//                     {
//                         label: "The NAPT Office site is assigned the appropriate polices to make emergency calls.",
//                         answer: "Yes"
//                     }
//                 ]
//             },

// 題目編號：205
{
    type: "checkbox",
    text: "You have a Microsoft 365 subscription that uses Microsoft Teams.\nYou plan to deploy Microsoft Teams voice.\nWhich two settings require a resource account? Each correct answer presents part of the solution.\nNOTE: Each correct selection worth one point.",
    instruction: "Select 2 items.",
    max: 2,
    options: [
        "A. Call park policies",
        "B. Auto attendant",
        "C. Call queues",
        "D. Emergency polices",
        "E. Guest access"
    ],
    answer: [
        "B. Auto attendant",
        "C. Call queues"
    ]
},

// 題目編號：206
{
    type: "radio",
    text: "You have a Microsoft 365 subscription that uses Microsoft Teams and contains a user named User.\nYou need to ensure that User1 can investigate call-quality issues and identify the following types of\ninformation:\n✑ Caller and recipient names\n✑ Device names and IP addresses\n✑ The number and names of all meeting participants\nThe solution must use the principle of least privilege.\nWhich role should you assign to User1?\n\n\n\n\n206.You have a Microsoft 365 subscription that uses Microsoft Teams and contains a user named User.\nYou need to ensure that User1 can investigate call-quality issues and identify the following types of\ninformation:\n✑ Caller and recipient names\n✑ Device names and IP addresses\n✑ The number and names of all meeting participants\nThe solution must use the principle of least privilege.\nWhich role should you assign to User1?\n\n\n\nAnswer: B",
    instruction: "Select the correct answer.",
    options: [
        "A. Teams Device Administrator",
        "B. Teams communication support engineer",
        "C. Teams Administrator",
        "D. Teams communication admin",
        "E. Teams Device Administrator",
        "F. Teams communication support engineer"
    ],
    answer: "B. Teams communication support engineer"
},

// 題目編號：207
            {
                type: "matrix",
                text: `HOTSPOT\nYou have a Microsoft 365 subscription that uses Microsoft Teams and contains the users shown in the\nfollowing table.\n\n<img src='images/52.png' class='question-img'>\n\nYou have the team shown in the following table.\nA new access review needs to be created for Project1.\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No. NOTE:\nEach correct selection is worth one point.\n`,
                instruction: "Matrix: Select Yes or No for each statement.",
                rows: [
                    {
                        label: "User1 can create and manage the access review.",
                        answer: "Yes"
                    },
                    {
                        label: "User2 can be assigned as a reviewer of the access review.",
                        answer: "Yes"
                    },
                    {
                        label: "Guest1 can be assigned as a reviewer of the access review.",
                        answer: "No"
                    }
                ]
            },

            // 題目編號：208
{
    type: "radio",
    text: "You have a Microsoft 365 subscription that uses Microsoft Teams.\nYou plan to implement Microsoft Teams Rooms. The solution must meet the following requirements:\n- Support Microsoft Teams Rooms, Microsoft Surface Hub, and collaboration bars for Microsoft Teams.\n- Ensure that Microsoft manages firmware and application updates for room systems and peripherals.\n- Ensure that Microsoft monitors and troubleshoots room system and peripherals.\nWhich license should you purchase?",
    instruction: "Select the correct answer.",
    options: [
        "A. Advanced Communications",
        "B. Microsoft Teams Rooms Premium",
        "C. Microsoft Teams Rooms Standard",
        "D. Microsoft 365 Business Voice"
    ],
    answer: "B. Microsoft Teams Rooms Premium"
},

// 題目編號：209
{
    type: "radio",
    text: "You have a Microsoft 365 subscription that uses Microsoft Teams.\nThe subscription contains 1,000 users in the groups shown in the following table.\n\n<img src='images/53.png' class='question-img'>\n\nYou need to configure Microsoft Teams to meet the requirements. The solution must minimize\nadministrative effort.\nWhat should you use?",
    instruction: "Select the correct answer.",
    options: [
        "A. policy packages",
        "B. app setup policies",
        "C. Microsoft Teams policies",
        "D. Meetings policies"
    ],
    answer: "A. policy packages"
},

        // 題目編號：210
        {
            type: "hotspot",
            text: "HOTSPOT\nYour company has a Microsoft 365 E5 subscription.\nYou plan to create a team that will automatically include all new and existing users at the company.\nYou need to identify which role-based access control (RBAC) role is required to create the team, and\nwhich tool must be used to create the team. The solution must use the principle of least privilege.\nWhat should you identify? To answer, select the appropriate options in the answer area. NOTE: Each\ncorrect selection is worth one point.\n",
            instruction: "Hotspot: Select the appropriate options in the answer area.",
            rows: [
                {
                    label: "Role:",
                    options: [
                        "Global Administrator",
                        "Groups administrator",
                        "Teams Administrator",
                        "User Administrator"
                    ],
                    answer: "Global Administrator"
                },
                {
                    label: "Tool:",
                    options: [
                        "Azure Active Directory admin center",
                        "Microsoft Teams admin center",
                        "Microsoft Teams client",
                        "Microsoft Teams PowerShell"
                    ],
                    answer: "Microsoft Teams client"
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
