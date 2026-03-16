const T1_CASE_STUDY = `
<div style="line-height: 1; text-align: left;">
<h1 style="text-align: left; margin: 0;">1. Topic 1, Contoso, Ltd</h1>
<br>
<b style="display: block; text-align: left;">Case study</b>
<b style="display: block; text-align: left;">Overview</b>
This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.<br>
<br>
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.<br>
<br>
At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.<br>
<br>
<b style="display: block; text-align: left;">To start the case study</b>
To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirement, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.<br>
<br>
<b style="display: block; text-align: left;">Overview</b>
Contoso, Ltd. is a pharmaceutical company that has 3,000 users in offices across North America.<br>
<br>
<b style="display: block; text-align: left;">Existing Environment</b>
<b style="display: block; text-align: left;">Active Directory</b>
The network contains an on-premises Active Directory domain. All user accounts are in departmental organizational units (OUs).<br>
<br>
<b style="display: block; text-align: left;">Microsoft Office 365</b>
All users are assigned a Microsoft Office 365 E5 license and are enabled for the following services:<br>
✑ Microsoft Yammer<br>
✑ Microsoft Exchange Online<br>
✑ Microsoft SharePoint Online<br>
✑ Microsoft OneDrive for Business<br>
✑ Azure Active Directory (Azure AD)<br>
✑ Azure AD<br>
✑ dynamic group membership<br>
<br>
<b style="display: block; text-align: left;">Microsoft Skype for Business</b>
Contoso has an on-premises deployment of Microsoft Skype for Business Server 2015. All the latest cumulative updates are installed on all the servers.<br>
The following services are used in Skype for Business Server 2015:<br>
✑ Meetings<br>
✑ PSTN calling<br>
✑ Instant messaging (IM)<br>
✑ Federation to external companies<br>
<br>
<b style="display: block; text-align: left;">Departments</b>
Contoso has the following departments:<br>
✑ IT<br>
✑ Sales<br>
✑ Human resources (HR)<br>
✑ Research and deployment (R&D)<br>
All groups are created by using dynamic group membership that use the department attribute.<br>
<br>
<b style="display: block; text-align: left;">Requirements</b>
<b style="display: block; text-align: left;">Business goals</b>
Contoso identifies the following business goals:<br>
✑ Migrate the maximum number of users to Microsoft Teams.<br>
✑ Minimize administrative effort.<br>
<br>
<b style="display: block; text-align: left;">Device requirements</b>
Contoso identifies the following device requirements:<br>
✑ Replace Skype for Business IP phones with Microsoft Teams phones.<br>
✑ All Microsoft Teams phones must be set to lock automatically after 60 seconds.<br>
<br>
<b style="display: block; text-align: left;">Meeting and Live Event Requirements</b>
Contoso identifies the following meeting and live event requirements:<br>
✑ Requirement1: Guest users must be able to join live events.<br>
✑ Requirement2: Guest users must always wait in a meeting lobby.<br>
✑ Requirement3: Contoso users must always bypass the meeting lobby when they join by using the Microsoft Teams client.<br>
✑ Requirement4: After the upgrade to Microsoft Teams, all meetings must be scheduled by using Microsoft Teams.<br>
<br>
<b style="display: block; text-align: left;">Calling Requirements</b>
Contoso identifies the following calling requirements:<br>
✑ Migrate all existing auto attendants and response groups to Office 365.<br>
✑ Minimize the on-premises PSTN infrastructure.<br>
<br>
<b style="display: block; text-align: left;">Technical Requirements</b>
Guest users must be prevented from making private calls.<br>
<br>
<b style="display: block; text-align: left;">Security Requirements</b>
Contoso has the following security requirements for the Microsoft Teams deployment:<br>
✑ The number of ports allowed on the company’s firewall must be limited.<br>
✑ Team names must be prevented from containing the name of any products produced by Contoso.<br>
✑ Users in the R&D group must be prevented from sending chat messages to users in other departments.<br>
✑ To meet the company’s compliance policy, users in the sales department must continue to use on-premises Skype for Business for IM and calling only.<br>
<br>
<b style="display: block; text-align: left;">Pilot Project</b>
Contoso begins a pilot project for the upgrade to Microsoft Teams.<br>
You identify the following issues during the pilot project:<br>
✑ Microsoft Teams users report that they often receive continuous notifications from the Microsoft Teams client for 20 minutes.<br>
✑ Two pilot users in the HR department report that they are not members of the HR team.<br>
</div>
`;

const T2_CASE_STUDY = `
<div style="line-height: 1; text-align: left;">
<h1 style="text-align: left; margin: 0;">Topic 2, Litware, inc</h1>
<br>
<b style="display: block; text-align: left;">Case study</b>
<b style="display: block; text-align: left;">Overview</b>
This is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.<br>
<br>
To answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.<br>
<br>
At the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.<br>
<br>
<b style="display: block; text-align: left;">To start the case study</b>
To display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirement, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.<br>
<br>
<b style="display: block; text-align: left;">Overview</b>
<b style="display: block; text-align: left;">General overview</b>
Litware, Inc. is an international manufacturing company that has 4,000 users.
The company has the following four departments:
✑ IT
✑ HR
✑ R&D
✑ Sales<br>
<br>
<b style="display: block; text-align: left;">Physical locations</b>
Litware has two main offices. The offices are located in New York and London.
All offices connect to each other by using a WAN link. Each office connects directly to the Internet.<br>
<br>
<b style="display: block; text-align: left;">Existing environment</b>
All user accounts have an Azure Active Directory Premium Plan P1 license.
Litware has a Microsoft 365 subscription that has Office 365 Enterprise E3 licenses for all users. All the E3 products and services are enabled for each user.
Litware uses Microsoft Skype for Business Online.<br>
<br>
<b style="display: block; text-align: left;">Requirements</b>
<b style="display: block; text-align: left;">Planned Upgrade</b>
Litware identifies the following requirements for a planned upgrade from Skype for Business Online to Microsoft Teams:
✑ Provide high quality audio, video, and online meeting experience for Microsoft Teams end users.
✑ Implement a data retention solution in Microsoft Teams.
✑ Minimize costs and administrative effort.
✑ Use the principle of least privilege.<br>
<br>
For the sales department, Litware plans to create a team that dynamically updates its membership when users leave and join the department.<br>
<br>
<b style="display: block; text-align: left;">Department Upgrade Requirements</b>
Litware plans to implement upgrade requirements for the departments as shown below:<br>
<br>
<img src="images/3.png" alt="Department Upgrade Requirements Table" style="display: block; max-width: 100%; height: auto; margin-top: 5px; text-align: left; border: 1px solid #ccc;"></p>
<br>
<b style="display: block; text-align: left;">Microsoft Teams Requirements</b>
All teams must meet the following requirements:
✑ Only users in a partner company that uses a domain named fabrikam.com must be able to collaborate in teams by using guest accounts.
✑ Only users in the compliance department of Litware must be able to create teams.<br>
<br>
<b style="display: block; text-align: left;">Planned Network Tasks</b>
Litware identifies the following network validation tasks:
✑ An administrator named Admin5 must be able to review the required bandwidth to support audio conferencing, video conferencing, and screen sharing in Microsoft Teams.
✑ An administrator named Admin6 must be able to review network issues that cause poor call quality reported by users.<br>
<br>
<b style="display: block; text-align: left;">Data Retention Requirements</b>
Litware identifies the following data retention requirements:
✑ Requirement1: All messages in team collaborations must be deleted after seven years.
✑ Requirement2: all files used in team collaborations must be retained for five years.
✑ Requirement3: All files used in personal chats must be retained for five years.<br>
<br>
<b style="display: block; text-align: left;">Device Requirements</b>
You provide Microsoft Teams-certified IP phones to users in the IT and R&D departments.
Each device must meet the following requirements:
✑ The time zone on the phones used by the R&D department must be set to UTC-8.
✑ The time zone on the phones used by the IT department must be set to UTC-5.
✑ All phones must lock automatically after 60 seconds of inactivity.<br>
<br>
<b style="display: block; text-align: left;">Voice Pilot Requirements</b>
Litware wants to pilot Phone System as a calling solution for 20 IT department users. The pilot project will receive phone numbers from Microsoft Teams.<br>
<br>
<b style="display: block; text-align: left;">Collaboration and Meeting Requirements</b>
Litware identifies the following collaboration and meeting requirements:
✑ Cloud recording must be disabled for all Microsoft Teams meetings organized by users in the HR departments only.
✑ Meeting email invitations must be customized to include the Logo URL, Legal URL, and Help URL of Litware.
</div>
`;

// Topic 3, A. Datum Corporation Case Study
// exhibits.js
const T3_CASE_STUDY = `
<div style="line-height: 1; text-align: left;">
<h1 style="text-align: left; margin: 0;">Topic 3, A. Datum Corporation</h1>
<br>
<b style="display: block; text-align: left;">Overview</b>
A Datum Corporation is an energy company that has offices across North America and 3,000 employees.<br>
A Datum has the offices shown in the following table.<br>
<br>
<img src="images/4.png" alt="Offices Location and Type Table" style="display: block; max-width: 100%; height: auto; margin-top: 5px; text-align: left; border: 1px solid #ccc;">
<br>
The office in Calgary has a 1 -Gbps internet circuit. The offices in San Diego and New York have 100-Mbps internet circuits. The field site in Edmonton has a 3-Mbps internet circuit.<br>
A Datum has the following departments:<br>
• Information technology (IT)<br>
• Project management<br>
• Marketing<br>
A Datum recently purchased a Microsoft 365 E5 subscription that has the Microsoft Teams Domestic Calling Plan add-on. All users are assigned Microsoft 365 E5 and Microsoft Teams Domestic Calling Plan licenses and Calling Plans is deployed.<br>
Azure AD has the default Cross-tenant access settings configured.<br>
The Teams policies settings are configured as shown in the following exhibit<br>
<br>
<img src="images/5.png" alt="Teams Policies Summary Exhibit" style="display: block; max-width: 100%; height: auto; margin-top: 5px; text-align: left; border: 1px solid #ccc;">
<br>
The Teams client is deployed to a non-persistent Virtual Desktop infrastructure (VDI) used by the project management department.<br>
Allow guest access in Teams is set to Off.<br>
The Microsoft Viva Connections app is deployed to all users.<br>
A Datum identifies the following issues:<br>
• An executive at the San Diego office reports that video drops during Teams meetings.<br>
• The Edmonton field site has limited bandwidth, and users report poor audio during Teams calls and meetings.<br>
• Users in the project management department report that they cannot give or take control during Teams calls and meetings while sharing their VDI desktop.<br>
<br>
<b style="display: block; text-align: left;">A Datum plans to implement the following changes:</b>
• Configure the media bit rate settings for the users at the Edmonton field site. The settings must apply only to the users while they are at the site, but NOT when they are at a different office.<br>
• Create a Teams channel to enable the project management department to collaborate with the IT department on a device upgrade project.<br>
• Implement a pilot rollout of Operator Connect for the users in the New York office. A port request was accepted already.<br>
• Create a Teams channel for the marketing department for external collaboration.<br>
• Rename the Viva Connections icon as Start portal.<br>
<br>
<b style="display: block; text-align: left;">A Datum identifies the following technical requirements:</b>
• The marketing department requires that all the files shared by using Teams remain available for at least three years after deletion.<br>
• The marketing department must be able to apply a watermark to content and video shared during Teams meetings.<br>
• All users require indefinite access to training videos recorded in Teams by the IT department<br>
• All access to Teams and shared resources must use the principle of least privilege.<br>
• Guest access must remain disabled.
</div>
`;

const T5_CASE_STUDY = `
<div style="line-height: 1; text-align: left;">
<h1 style="text-align: left; margin: 0;">Topic 5, Wingtip Toys</h1>
<br>
<b style="display: block; text-align: left;">Overview</b>
<b style="display: block; text-align: left;">General Overview</b>
Wingtip Toys is a manufacturing company that has 5,000 users, and locations across North America and Europe.<br>
<br>
<b style="display: block; text-align: left;">Departments</b>
The company has the following departments:<br>
• IT<br>
• Sales<br>
• Security<br>
• Customer support<br>
• Human resources (HR)<br>
• Research and development (R&D)<br>
<br>
<b style="display: block; text-align: left;">Partners</b>
Wingtip Toys has an external partner named Fabrikam, Inc. that has a Microsoft 365 subscription named fabrikam.com.<br>
Microsoft Office 365 Environment<br>
All users are assigned a Microsoft 365 E5 license and are enabled for Microsoft Teams Phone. Users in the R&D department are assigned a Teams Premium license.<br>
<br>
<b style="display: block; text-align: left;">Requirements</b>
<b style="display: block; text-align: left;">Call Handling Requirements</b>
Wingtip Toys identifies the following call handling requirements:<br>
• Inbound calls to the main telephone number of Wingtip Toys must be routed to the correct department by using an auto attendant.<br>
• During holiday periods, the auto attendant must perform the following actions:<br>
o Route customer support calls to the customer support department.<br>
o Play a recorded message for calls to all the other departments, and then disconnect the call.<br>
Meeting Requirements<br>
Wingtip Toys identifies the following meeting requirements:<br>
• Meetings that include users from the R&D department must have a watermark applied to screen sharing sessions.<br>
• Once a quarter, the CEO of Wingtip Toys must host a live, online event that is attended by all users.<br>
<br>
<b style="display: block; text-align: left;">Governance Requirements</b>
Wingtip Toys identifies the following governance requirements:<br>
• New teams must meet the following requirements:<br>
o The Team type setting must be set to Private.<br>
o Users must be able to send emails to team channels.<br>
o Team members must be prevented from deleting messages from team channels.<br>
o Each team name must be validated against a list of blocked team names.<br>
o Each team name must contain a prefix of GRP and the department name as a suffix.<br>
o Team channels must include a pinned tab that displays the Wingtip Toys website.<br>
o When a user creates a team, the team picture must be the logo of the user's department.<br>
o The department manager of the user that creates the team must be assigned the Owner role for the team.<br>
• The use of animated GIFs must be prevented in team channels.<br>
<br>
<b style="display: block; text-align: left;">Collaboration Requirements</b>
Wingtip Toys identifies the following collaboration requirements:<br>
• Fabrikam users must be able to join team channels hosted by Wingtip Toys.<br>
• Wingtip Toys users must be prevented from joining team channels hosted by Fabrikam.<br>
<br>
<b style="display: block; text-align: left;">Monitoring Requirements</b>
A notification must be sent to users in the IT department when a Teams Rooms system goes offline.<br>
<br>
<b style="display: block; text-align: left;">Pilot Project Requirements</b>
Wingtip Toys is currently evaluating third-party call center apps that integrate with Teams. The security department mandates that all third-party apps be reviewed by a qualified analyst and comply with industry-standard frameworks.<br>
<br>
<b style="display: block; text-align: left;">User Issues</b>
Wingtip Toys users report audio and video issues when accessing Teams meetings by using a web browser.<br>
<br>
<b style="display: block; text-align: left;">Business Requirements</b>
Wingtip Toys identifies the following business requirements:<br>
• Follow the principle of least privilege.<br>
• Minimize administrative effort.<br>
• Minimize costs.
</div>
`;