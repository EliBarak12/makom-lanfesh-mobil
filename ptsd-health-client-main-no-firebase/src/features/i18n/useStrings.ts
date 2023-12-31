import {I18n} from 'i18n-js';

import {AnyObject, ExtractObjectPaths, ValueOf} from '../../utils';
import {DEFAULT_LOCALE, Locale, useLocale} from './useLocale';

function setStrings<TStrings extends object>(english: TStrings) {
  return (
    extraLocales: Record<Exclude<Locale, 'en-US'>, TStrings>,
  ): Record<string, TStrings> => {
    return {
      'en-US': english,
      ...extraLocales,
    };
  };
}

const englishStrings = {
  notifications: {
    1: {
      channelName: 'Reminders',
      title: 'Time to take the test',
      body: 'During the period after a traumatic event, it is important to monitor the feelings, emotions and difficulties that may arise over time, in order to help with what is needed. you are not alone. Use the app and answer the questionnaire. Inside you will also find tools that can help when needed',
    },
    3: {
      channelName: 'Reminders',
      title: 'You are not alone',
      body: "The situation in the country makes it difficult for all of us, but you don't have to stay with it alone. Enter the application and choose a research-proven tool to relieve stress or deal with feelings of sadness or guilt",
    },
    7: {
      channelName: 'Reminders',
      title: 'Detaching from negative thoughts',
      body: 'Like other people in the country, the self-monitoring questionnaire shows that the difficult events may affect you. You may have difficulty detaching from negative thoughts, concentrating on everyday things or sleeping properly. The application has many tools that can help in the complex situation we are all in',
    },
  },
  userAgreement: {
    pageTitle: 'Software EULA',
    acceptButton: 'Accept',
    header: 'SOFTWARE AND USER LICENSE AGREEMENT',
    appName: 'SoulZone',
    text: `End User License Agreement of SoulZone
Please read the following terms carefully before installing, registering and/or using the application.
By choosing the option "Agree", "Yes" or by installing and/or using the mobile software application (together with all the content contained therein, its services and the intellectual property rights inherent in it, the "Application"), you hereby acknowledge and confirm hereby enter into a binding legal contract with SoulZone, that you have read, understood and agreed to comply with all the conditions listed below, within the framework of this end user license agreement ("the Agreement"). You hereby waive all rights you have to demand an original (non-electronic) signature or to receive and retain non-electronic documentation, insofar as this waiver is not prohibited by law. If you do not agree to comply with all of the terms listed below, please do not download, install or use the Application. You hereby confirm and undertake that you are (i) at least 18 years old or (ii) between the ages of 13 and 18 and have reviewed the terms of the agreement with one of your parents or guardians, in order to verify that both you and your parent or guardian have understood and agreed to the terms. If you do not meet any of the age requirements, as stated, or if you do not agree to comply with all the conditions listed below, please do not choose to agree to this agreement or download, access or use the application.
1. Description of the application. The application is an abstract interface for Android and Apple-based smart phones and is intended for people who have experienced a traumatic event. The application enables self-monitoring of typical symptoms after a traumatic event and provides access to digital treatment tools that can help reduce the symptoms, and support channels, according to the monitoring.
2. License. Subject to the terms and provisions of this Agreement, SoulZone hereby grants you a private, revocable, non-exclusive, non-sublicensable and non-assignable or transferable license ("License"), to: (i) download, install and use the Application via a mobile phone , a device or tablet on which the App was pre-installed, after you obtained it from your mobile service provider, who provides your device with Internet access services ("Provider"), or, if you purchased the App from any third-party platform or other mobile device service provider ("Reseller" ), on a cell phone, device or tablet that you own or control (in each case, a "Device"); and (ii) access and use the Application on the Device in accordance with this Agreement.
3. License limitations. You hereby agree not to do the following yourself and/or allow any third party to: (i) license, redistribute, sell, lease, lend or rent the Application; (ii) unless expressly approved in the agreement, allow access to the application via a network, so that it can be used simultaneously on several devices at the same time; (iii) unless expressly permitted in this Agreement or by law, disassemble, reverse engineer, decompile, decode or attempt to extract the source code of the Application; (iv) copy (other than for backup purposes), modify, enhance or create any derivative work of the Application, or any part thereof; (v) bypass, disable or interfere in any other way with the protection and security features of the application, with features that prevent or limit the use or copying of any content, or that limit the use of the application; (vi) remove, change, or interfere in any other way with any of the notices or identification of ownership in the application, including notices regarding copyrights, trademarks, patents or any other notice, included, displayed or provided within the application; (vii) make use of the communication of the systems included in the application in order to send unapproved and/or unsolicited advertising messages; (viii) make use of the name of SoulZone, its logo or trademarks without obtaining our prior written approval; and/or (ix) use the application in any way that violates any of the relevant laws, regulations or regulations, or for any illegal, harmful, irresponsible or improper purpose, or in a way that violates the provisions of the agreement.
4. Using the application in the car. If you use the application in a vehicle, you hereby agree to: (i) obey all applicable traffic laws; and (ii) if you are the driver, not to use the application unless the vehicle is stationary and legally parked.
5. Intellectual property rights.
5.1. The application is licensed to you, and not sold to you, in accordance with the agreement. You hereby confirm that - SoulZone and its licensees retain their ownership, the rights arising from their ownership and all intellectual property rights (as defined below) in the application and everything related to it (including its software). We reserve any right in the Application not expressly granted to you herein.
"Intellectual property rights" means any right, ownership and interest in any trade secret, patent, copyright, service mark, trademark, know-how or any similar intellectual property right, including all moral rights, the right to privacy, publicity and any similar right of any kind, in accordance to any law or regulation of any governmental, regulatory or legal authority, whether abroad or locally.
5.2. The content of the application is provided to you as it is ("AS IS") for your private use only and, unless expressly approved in the agreement, may not be used, copied, distributed, transmitted, transferred by electronic means, displayed, sold, granted a license, disassembled, or exploited for any Purpose that is, without prior written consent of a SoulZone. When downloading or printing a copy of the Content, you must retain all copyright and other proprietary notices contained therein. The trademarks, symbols and all other signs are the exclusive property of SoulZone and its partners. All trademarks, service marks and other symbols included in the application are owned by their respective owners.
6. Disclosure. We reserve the right to access, read, save and disclose any information we have obtained in connection with the application, which we reasonably believe is essential to: (i) act in accordance with and comply with any relevant law, regulation, legal process, order or governmental request, (ii) ) to enforce the terms of this Agreement, including investigating potential violations of any of them, (iii) detect, prevent or otherwise address fraud or any technical or defense issue, (iv) respond to any of your support requests, or (v) protect About the rights, ownership or security of a SoulZone, the users of its services or the public.
7. Payments.
7.1. The license granted to you is granted free of charge.
7.2. Please note that in order to use the application, you may need an internet connection or access. You hereby agree to be solely responsible for the payment of any payment, if required by any third party that is your service provider or Internet provider, for your access to or connection to the Internet.
8. Privacy. We do not collect any identifying information about you. All use of the application is done anonymously. We may collect information about the nature of use in order to improve the application for the users, but without knowing who the user is. In any part of the information that we may collect or obtain in connection with the application, you hereby authorize us to do so. Please note that certain private and other information that you provide in connection with your use of the application may be stored on your device (even if the information is not collected by us). You are solely responsible for maintaining your device's security measures against unauthorized access.
9. Third Party Software. Portions of the Application may include third-party software, which is subject to that third party's terms of use ("Third Party Terms"). A list of each open source third-party software and relevant third-party terms appear at https://www.youtube.com/intl/iw/howyoutubeworks/policies/community-guidelines/, in the event of a conflict between third-party terms and the terms of this Agreement, After all, the terms of the third party will prevail in connection with the software of that third party.
10. Description of Information. We try to be as accurate as possible. However, we cannot and do not guarantee that the information presented in the application is accurate, complete, authoritative, current or error-free. We reserve the right to make changes to the content, in connection with it, or any part of it, without notifying it in advance or after a change, as mentioned.
11. Exemption from liability. The application is provided "AS IS" and "AS AVAILABLE", without any warranty of any kind, including, but not limited to, representations and warranties regarding merchantability, fitness for a particular purpose, title and non-infringement, as well as those arising in connection with or due to trade. We do not provide any guarantee that the application will be free of defects, free of viruses or any other harmful code, or that we will correct the defects in it. You hereby agree that neither we nor the distributor will be held responsible for any consequences that may arise due to technical malfunctions, including, without detracting from the generality of the above, in connection with the Internet (such as a slow connection, traffic load or overload of our servers or other servers) or any Internet provider or communication.
12. Exemption from medical liability. The information, advice, digital tools, recommendations, or external tools (WhatsApp bot "Soli", Telegram bot, PMR video, body scan video) provided in the Mekot Le Nefesh application, constitute general information. They are not a substitute for examination or consultation with doctors, and are not in the scope of "medical diagnosis", "medical opinion", "recommendation for medical treatment" or "substitute for medical treatment". In any case where there is a medical problem, or a suspicion of its existence arises, you must book a visit to a doctor or family doctor, or doctors in other professions, and be examined. In any case of an urgent problem, an emergency or a distressed situation (physical or mental) - you must seek medical treatment from the treating doctor, the emergency room of the nearest hospital, or Magan David Adom (using the emergency number 101, throughout the country). By actually using the application, or one of the external tools (WhatsApp bot "Soli", Telegram bot, PMR video, body scan video) the users waive any claims, demands or claims of any kind against the Jerusalem Center for Mental Health and its developers, writers, creators and marketers of the app.
13. Limitation of liability.
13.1. SoulZone of its affiliated companies, as well as every officer, director, employee, licensor, expert and agent of any of them, as well as every distributor, will not be liable, in any case, for any financial loss, loss of goodwill, damage to reputation, indirect damage , exemplary, special, consequential or secondary of any kind, arising from this agreement or in connection with the use or inability to use the application, even if the place per person or any distributor is aware of the possibility of causing such damage. In certain areas of law, the limitation or exclusion of liability for indirect or consequential damage is not approved, and therefore, these limitations may not apply to you.
13.2. Without detracting from the generality of what is stated in this section, and to the extent permitted by law, you hereby agree that the total liability to you for all damages or losses arising from this agreement or in connection with the use or inability to use the application will not, in any case, exceed the amount paid to us by you, if In general, for the use of the application during the six (6) months preceding the date of the claim.
14. Indemnification. You hereby agree to defend, indemnify, and indemnify the SoulZone and its affiliated companies, its officers, directors, employees and agents and those of its affiliated companies, as well as any distributor, from and against any claim, damage, obligation, cost and expense (including fee expenses reasonableness) of any third party, arising from: (i) your use or inability to use the application; (ii) you have breached the Agreement; and/or (iii) you have violated the rights of any third party, including, but not limited to, any copyright, ownership or right to privacy. Without detracting from or harming any of your obligations in accordance with this section, we reserve our right (at our expense) to assume the defense and control of any subject subject to indemnification by you, but we do not undertake to do so. You hereby agree not to compromise on any issue subject to indemnification by you without obtaining our prior express approval.
15. Export Laws. You hereby agree to act in accordance with all relevant export laws and regulations, in order to ensure that neither the application nor any technical information relating to it is exported or re-exported directly or indirectly in violation of or in a manner prohibited by those laws and regulations.
16. Updates and Upgrades. We may provide updates or upgrades to the Application from time to time (each, an "Update"), but we have no obligation to do so. Any update will be given in accordance with our policy that will be in effect at that time. This policy may include an automatic update or upgrade, without providing you with notice. You hereby agree to the automatic update or upgrade of the application, as mentioned. Reference in this agreement to the application will include any update thereof. This agreement will apply to any update that replaces or adds to the original application, unless a separate licensing agreement is attached to the update, which will apply to that update.
17. Duration of the agreement and its termination. This agreement will remain in effect until terminated by us or you. We reserve the right to do any of the following at any time: (i) discontinue or change any aspect of the Application; and/or (ii) terminate the validity of the agreement and your participation in the application, with or without any reason, and we will not be liable to you or any third party for the above. If you object to any of the terms or provisions of this agreement or any future changes to it, or if you are not satisfied with the application in any way, you can only immediately stop using the application. Upon expiration of the Agreement, you will stop using: (a) the Application, and you will destroy any copy of the Application and any document relating to it, which you own or have under your control, and (b) your account. This section 16 as well as sections 5 (intellectual property rights), 8 (privacy), 11 (exemption from liability), 12 (limitation of liability), 13 (indemnification), 17 (protest) and 19 (general) shall survive the termination of the agreement and will remain in effect thereafter.
18. The check. You may not transfer or assign this Agreement and any of the rights and licenses granted under it, but we may do so without any restriction or need to provide notice.
19. Changes. We reserve the right to change this agreement at any time, by notifying you, within the application and/or by publishing the updated agreement in the application. A change, as stated, will enter into force within ten (10) days from the date of notification, as stated, and your continued use of the application after any such change will constitute consent to it.
20. General. The laws of the State of Israel will apply to this agreement and the relationship between you and SoulZone and these will be interpreted in accordance with these laws, without regard to the choice of law rules. You hereby agree to grant exclusive jurisdiction to the courts located in Tel Aviv-Yafo, and waive any claim regarding jurisdiction, jurisdiction, or forum non conveniens against the jurisdiction of these courts, as stated. Without deviating from the above, Mead Per Nefesh reserves the right to sue in any court with jurisdiction in order to obtain a restraining order. This Agreement and any announcements published by Meuk Le Nefesh in connection with the Application constitute the entire agreement between you and Meuk Le Nefesh with respect to the Application. In any case of conflict between this agreement and any of the above, the terms of this agreement will prevail. Changes to this agreement will be void, unless made in writing and signed by a person. If any of the terms of the agreement are found to be invalid by a competent court, the rest of the clauses in the agreement, except for the invalid ones, will apply and remain in effect. Waiver of any of the terms of the agreement shall not be considered a continuing waiver of that condition or any other condition, and failure of any of the parties to comply with any right or condition of the agreement shall not be considered a waiver of that right or condition. You hereby agree to file a claim for any cause of action you may have in connection with the application within one (1) year from the date the cause arose. Once this period has passed, you will be barred from acting for that cause of action
`,
  },
  tutorial: {
    appHeader: 'SoulZone',
    '1': {
      header: 'Welcome to the app',
      text: 'We are here to help you get quick coping strategies, find resources, learn from the experts, and track your progress over time',
    },
    '2': {
      header: 'Personal Privacy',
      text: 'No account needed and the app never shares your information. You control your data',
    },
    '3': {
      header: 'Track PTSD Symptoms',
      notifications: 'Check this box to receive notifications about updates',
    },
    continue: 'Start Answer',
  },
  questionInstructions: {
    header: 'INSTRUCTIONS',
    text: 'This questionnaire asks about problems you may have had after a very stressful experience involving actual or threatened death, serious injury, or sexual violence. It could be something that happened to you directly, something you witnessed, or something you learned happened to a close family member or close friend. Some examples are a serious accident; fire; disaster such as a hurricane, tornado, or earthquake; physical or sexual attack or abuse; war; homicide; or suicide.',
    start: 'Start Answering',
  },
  questionnaire: {
    header: 'SoulZone',
    prefix: 'In the past month, how much were you bothered by:',
    selections: {
      '0': 'Not at all - 0',
      '1': 'A little bit - 1',
      '2': 'Moderately - 2',
      '3': 'Quite a bit - 3',
      '4': 'Extremely - 4',
    },
    question: {
      '1': 'Repeated, disturbing, and unwanted memories of the stressful experience?',
      '2': 'Repeated, disturbing dreams of the stressful experience?',
      '3': 'Suddenly feeling or acting as if the stressful experience were actually happening again (as if you were actually back there reliving it)?',
      '4': 'Feeling very upset when something reminded you of the stressful experience?',
      '5': 'Having strong physical reactions when something reminded you of the stressful experience (for example, heart pounding, trouble breathing, sweating)?',
      '6': 'Avoiding memories, thoughts, or feelings related to the stressful experience?',
      '7': 'Avoiding external reminders of the stressful experience (for example, people, places, conversations, activities, objects, or situations)?',
      '8': 'Trouble remembering important parts of the stressful experience?',
      '9': 'Having strong negative beliefs about yourself, other people, or the world (for example, having thoughts such as: I am bad, there is something seriously wrong with me, no one can be trusted, the world is completely dangerous)?',
      '10': 'Blaming yourself or someone else for the stressful experience or what happened after it?',
      '11': 'Having strong negative feelings such as fear, horror, anger, guilt, or shame?',
      '12': 'Loss of interest in activities that you used to enjoy?',
      '13': 'Feeling distant or cut off from other people?',
      '14': 'Trouble experiencing positive feelings (for example, being unable to feel happiness or have loving feelings for people close to you)?',
      '15': 'Irritable behavior, angry outbursts, or acting aggressively?',
      '16': 'Taking too many risks or doing things that could cause you harm?',
      '17': 'Being “superalert” or watchful or on guard?',
      '18': 'Feeling jumpy or easily startled?',
      '19': 'Having difficulty concentrating?',
      '20': 'Trouble falling or staying asleep?',
    },
    ofText: 'of',
    questionText: 'Question',
  },
  results: {
    header: 'Feedback',
    totalScore: 'TOTAL SCORE',
    lowScore: `The score of the questionnaire shows that you experience a relatively low level of symptoms that are associated with a traumatic event. If in the past you experienced more significant distress, know that this is a natural process, and the decrease in the intensity of the symptoms is a positive sign.
Still, it's natural that even low-level symptoms can cause a sense of distress. It is also important to understand that the questionnaire does not test symptoms of depression, anxiety and substance abuse, which may also appear after a traumatic event, and can themselves cause distress.
Although there is no substitute for face-to-face professional treatment, this app can be used to learn tools to reduce symptoms. They can also be added to face-to-face professional care.
If you feel that you may harm yourself or others click on the 'support channels' button. If you feel stressed, you are welcome to use one of the tools in the 'toolbox'.
It is recommended to perform an assessment once a week, in order to monitor the changes, and hopefully see an improvement over time`,
    mediumScore: `The score on the questionnaire shows that you experience a moderate level of symptoms that are associated with a traumatic event. The feelings you experience are a normal response to a traumatic event and many people experience them several weeks to several months after the event. On the other hand, if this score is higher than other scores you received in previous questionnaires, it means that there is a certain worsening, and you should pay attention to it.
If you feel a decline in functioning with family, studies and/or work continues, or if you experience additional problems that the questionnaire does not check, such as anxiety, depression or substance abuse, you should seek treatment. For information regarding access to diverse treatment options click on the 'support channels' button.
Although there is no substitute for face-to-face professional treatment, this app can be used by you to learn tools to reduce symptoms. You will find them in the 'Toolbox' button. They can also be added to face-to-face professional care.
If you feel that you may harm yourself or others click on the 'support channels' button. If you feel stressed, you are welcome to use one of the tools in the 'toolbox'.
It is recommended to perform an assessment once a week, in order to monitor the changes, and hopefully see an improvement over time`,
    highScore: `The score on the questionnaire shows that you experience a high level of symptoms  that are associated with a traumatic event. The feelings you experience are a normal response to a traumatic event and many people experience them several weeks to several months after the event. On the other hand, if this score is higher than other scores you received in previous questionnaires, it means that there is a certain worsening, and you should pay attention to it.
If you feel a decline in functioning with family, studies and/or work continues, or if you experience additional problems that the questionnaire does not check, such as anxiety, depression or substance abuse, you should seek treatment. For information regarding access to diverse treatment options click on the 'support channels' button.
Although there is no substitute for face-to-face professional treatment, this app can be used by you to learn tools to reduce symptoms. You will find them in the 'Toolbox' button. They can also be added to face-to-face professional care.
If you feel that you may harm yourself or others click on the 'support channels' button. If you feel stressed, you are welcome to use one of the tools in the 'toolbox'.
It is recommended to perform an assessment once a week, in order to monitor the changes, and hopefully see an improvement over time`,
    lowScoreAfterMultiAttempts: `Good news! In the follow-up of 4 questionnaires it is possible to see that you experience a low level of symptoms after the trauma. Your weighted score is based on the average of the 4 questionnaires you completed and the changes between questionnaires. In the hope that you will continue to experience a minimal intensity of symptoms, you should monitor yourself once every few weeks, through the application or in a meeting with a therapist. The tools in the application are still open to you and you are welcome to use them whenever you feel a certain difficulty.
    Still, it's natural that even low-level symptoms can cause a sense of distress. It is also important to understand that the questionnaire does not test symptoms of depression, anxiety and substance abuse, which may also appear after a traumatic event, and can themselves cause distress.
    Although there is no substitute for face-to-face professional treatment, this app can be used to learn tools to reduce symptoms. They can also be added to face-to-face professional care.
        If you feel that you may harm yourself or others click on the 'support channels' button. If you feel stressed, you are welcome to use one of the tools in the 'toolbox'.`,
    mediumScoreAfterMultiAttempts: `The weighted score in the 4 questionnaires, based on the average of the scores and the changes between questionnaires, shows that you experience a moderate level of typical symptoms after a traumatic event. At this stage, when the traumatic event is a little further away, but the symptoms are still present in your life, it is worth seeking treatment. It is also possible that depression, anxiety and substance abuse are added to the symptoms indicated in the questionnaire, which reinforces our recommendations to seek the appropriate treatment for you. In the 'support channels' button you will find a variety of treatment options, including setting up face-to-face meetings, setting up telephone meetings, video calls and more.
        Although there is no substitute for face-to-face professional treatment, this app can be used by you to learn tools to reduce symptoms. You will find them in the 'Toolbox' button. They can also be added to face-to-face professional care.
        If you feel that you may harm yourself or others click on the 'support channels' button. If you feel stressed, you are welcome to use one of the tools in the 'toolbox'.
    It is recommended to perform an assessment once a week, in order to monitor the changes, and hopefully see an improvement over time`,
    highScoreAfterMultiAttempts: `The weighted score in the 4 questionnaires, based on the average of the scores and the changes between questionnaires, shows that you experience a high level of typical symptoms after a traumatic event. If you haven't done so yet, we recommend that you go and seek professional treatment. In the 'support channels' button you will find a variety of treatment options, including setting up face-to-face meetings, setting up telephone meetings, video calls and more. Don't stay with it alone. The difficult feelings can be helped, and many people manage to return to function with the help of the appropriate treatment.
    Although there is no substitute for face-to-face professional treatment, this app can be used by you to learn tools to reduce symptoms. You will find them in the 'Toolbox' button. They can also be added to face-to-face professional care.
        If you feel that you may harm yourself or others click on the 'support channels' button. If you feel stressed, you are welcome to use one of the tools in the 'toolbox'.
    It is recommended to perform an assessment once a week, in order to monitor the changes, and hopefully see an improvement over time`,
    supportButton: 'Get Suppoprt',
    toolboxButton: 'Toolbox',
  },
  toolbox: {
    header: 'Toolbox',
    toolsHelpTitle:
      'The following tools can help you manage the physical and emotional responses that are typically associated with traumatic events.',
    relaxMuscleTitle: 'Progressive muscle relaxation',
    relaxMuscleText:
      'This is an english-speaking audio guidance of progressive muscle relaxation technique. You will move from one major muscle group to another, contracting and releasing them in order.',
    relaxMuscleButton: 'Guide link',
    relaxBodyTitle: 'Body scan',
    relaxBodyText:
      'This is a recorded training in English of a mindfulness exercise called body scan. The goal is to focus attention on the sensations that arise from the body and learn to live with them in peace. During the training there will be moments of silence so that you can concentrate on the physical sensations.',
    relaxBodyButton: 'Guide link',
    botTitle: 'Chatbot',
    botText:
      'This free Telegram-based chatbot, is aimed to help with symptoms of distress and anxiety related to traumatic events.',
    botButton: 'Telegram link',
  },
  getSupport: {
    header: 'Get Support',
    crisisButton: `Crisis Resources`,
    findProCareButton: `Find Professional Care`,
    answerAgainButton: `Another questionnaire`,
    toolBox: 'Toolbox',
  },
  crisisResources: {
    header: 'Crisis Resources',
    eranTitle: `If you are in a high level of distress, call the telephone centers available 24/7:`,
    eranButton: `ער״ן 1201`,
    suicideAndCrisisTitle: `Suicide and Crisis Lifeline:`,
    ntlButton: `נט״ל 1800-363-363`,
    hamalLevEhadButton: `חמ״ל לב אחד 072-2133281`,
    emergencyCentersTitle: `Emergency HMO centers:`,
    macabiButton: `מכבי 3555* (זמינים 8:00 - 24:00)`,
    clalitButton: `כללית 03-7472010`,
    meuhedetButton: `מאוחדת - 3833*`,
    leumitButton: `לאומית 507*`,
  },
  findProCare: {
    header: 'Find Professional Care',
    portalsTitle: `In the following portals you can find diverse and free tutors, including setting up face-to-face meetings,
that can suit you`,
    nafshiButton: `Nafshi - Mental support in Israel`,
    otefOrefButton: `Otef Oref`,
    healthFundsTitle: `The health funds provide 3 telephone sessions free of charge with a professional in the field of mental health. You can coordinate with the same numbers of the aforementioned emergency centers. In the following link, you can fill out a form to request treatment by Ministry of Health certified treatment personnel.
(Get back within 24 hours of submitting the form)`,
    fillFormButton: `Fill Form`,
  },
};

const strings = setStrings(englishStrings)({
  ar: {
    userAgreement: {
      pageTitle: 'הסכם משתמש קצה',
      acceptButton: 'אישור',
      header: 'הסכם מתן רישיון משתמש קצה ביישומון',
      appName: 'מקום לנפש',
      text:
        'אנא קיראו בעיון רב את התנאים הבאים לפני התקנת, רישום ו/או שימוש באפליקציה.\n' +
        '\n' +
        'באמצעות בחירה באפשרות "מסכים", "כן" או בשל התקנה ו/או שימוש באפליקציית התוכנה הסלולרית (ביחד עם כל התוכן הכלול בה, שירותיה וזכויות הקניין הרוחני הגלומות בה, "האפליקציה"), את/ה מכיר/ה ומאשר/ת בזאת להתקשר בזאת בחוזה משפטי מחייב עם מקום לנפש, כי קראת, הבנת והסכמת לעמוד בכל התנאים המפורטים מטה, במסגרת הסכם מתן רישיון משתמש קצה זה ("ההסכם"). הינך מוותר בזאת על כל הזכויות העומדות לך לדרוש לקבל חתימה מקורית (שאינה אלקטרונית) או לקבל ולשמור תיעוד שאינו אלקטרוני, ככל שוויתור זה אינו אסור על פי דין. אם אינך מסכים לעמוד בכל התנאים המפורטים מטה, אנא, אל תוריד, תתקין או תשתמש באפליקציה. אתה מאשר ומתחייב בזאת שאתה (i) בן 18 שנה לפחות או (ii) בין הגילאים 13 ל-18 וסקרת את תנאי ההסכם עם מי מהוריך או האפוטרופוס שלך, על מנת לוודא שהן אתה והן הורך או האפוטרופוס שלך הבנתם את התנאים והסכמתם להם. אם אינך עונה למי מדרישות הגיל, כאמור, או אם אינך מסכים לעמוד בכל התנאים המפורטים מטה, אנא, אל תבחר להסכים להסכם זה או להוריד, לגשת או להשתמש באפליקציה.\n' +
        '1. תיאור האפליקציה. האפליקציה הינה ממשק מופשט לטלפונים חכמים מבוססי אנדרואיד ואפל, ומיועדת לאנשים שעברו אירוע טראומטי. האפליקציה מאפשרת ניטור עצמי של תסמינים אופייניים לאחר הטראומה ומנגישה כלי טיפול דיגיטליים שיכולים לסייע בהפחתת התסמינים, ובערוצי תמיכה בהתאם לניטור.\n' +
        '2. רישיון. בכפוף לתנאים והוראות הסכם זה, מקום לנפש מעניקה לך בזאת רישיון פרטי, בר-ביטול, שאינו ייחודי, אינו מאפשר מתן רישיון לאחר ואינו ניתן להמחאה או העברה ("רישיון"), בכדי: (i) להוריד, להתקין ולהשתמש באפליקציה באמצעות טלפון סלולרי, מכשיר או טאבלט בהם הותקנה האפליקציה מבעוד מועד, לאחר שהשגת אותה מספק השירותים הסלולריים שלך, המספק למכשירך שירותי גישה לאינטרנט ("ספק"), או, אם רכשת את האפליקציה מכל פלטפורמה של צד שלישי או נותן שירותים אחר למכשירים סלולריים ("מפיץ"), על גבי טלפון סלולרי, מכשיר או טאבלט שבבעלותך או בשליטתך (בכל מקרה, "מכשיר"); וכן (ii) לגשת ולהשתמש באפליקציה על המכשיר בהתאם להסכם זה.\n' +
        '3. מגבלות הרישיון. הינך מסכים בזאת לא לבצע את הפעולות הבאות בעצמך ו/או לאפשר לכל צד שלישי: (i) להעניק רישיון לאחר, להפיץ מחדש, למכור, להחכיר, להשאיל או להשכיר את האפליקציה; (ii) אלא אם מאושר במפורש בהסכם, לאפשר גישה לאפליקציה באמצעות רשת, כך שיתאפשר בה שימוש מקביל על מספר מכשירים באותה עת; (iii) אלא אם מאושר במפורש בהסכם זה או על פי דין, לפרק, להנדס לאחור, לפרק את הקמפול, לפענח את הקידוד או לנסות לחלץ את קוד המקור של האפליקציה; (iv) להעתיק (אלא למטרות גיבוי), לשנות, לשפר או ליצור כל יצירה נגזרת של האפליקציה, או כל חלק ממנה; (v) לעקוף, לנטרל או להתערב בכל אופן אחר במאפייני ההגנה והאבטחה של האפליקציה, במאפיינים המונעים או מגבילים שימוש או העתקה של כל תוכן, או שמגבילים את השימוש באפליקציה; (vi) להסיר, לשנות, או להתערב בכל אופן אחר במי מהודעות או זיהוי הבעלות באפליקציה, לרבות הודעות בקשר לזכויות יוצרים, סימני מסחר, פטנטים או כל הודעה אחרת, הנכללת, מוצגת או ניתנת במסגרת האפליקציה; (vii) לעשות שימוש בתקשורת של המערכות הנכללות באפליקציה על מנת לשלוח הודעות פרסומת לא מאושרות ו/או שלא נתבקשו; (viii) לעשות שימוש בשמה של מקום לנפש, בסמלילה או סימני המסחר שלה מבלי לקבל את אישורנו בכתב ומראש; ו/או (ix) להשתמש באפליקציה בכל אופן המפר מי מהחוקים, התקנות או הרגולציה הרלוונטיים, או לכל תכלית בלתי חוקית, מזיקה, בלתי אחראית או בלתי נאותה, או באופן המפר את הוראות ההסכם.\n' +
        '4. שימוש באפליקציה ברכב. אם הינך משתמש באפליקציה ברכב, הרי שאתה מסכים בזאת: (i) לציית לכל חוקי התנועה הרלוונטיים; וכן (ii) במידה והינך הנהג, לא לעשות שימוש באפליקציה אלא אם הרכב דומם ומוחנה כחוק. \n' +
        '5. זכויות בקניין רוחני.\n' +
        '   1. האפליקציה ניתנת לך ברישיון, ולא נמכרת לך, בהתאם להסכם. הינך מאשר בזאת ש- מקום לנפש ומי מנותני הרישיון שלה שומרים על בעלותם, הזכויות הנובעות מבעלותם וכל זכויות הקניין הרוחני (כמוגדר מטה) באפליקציה ובכל הנוגע לה (לרבות התוכנה שלה). אנו שומרים על  כל זכות באפליקציה שאינה מוענקת לך במפורש במסמך זה.\n' +
        '"זכויות קניין רוחני" משמען כל זכות, בעלות ואינטרס בכל סוד מסחרי, פטנט, זכות יוצרים, סימן שירותים, סימן מסחר, ידע או כל זכות קניין רוחני דומה, לרבות כל הזכויות המוסריות, הזכות לפרטיות, פרסום וכל זכות דומה מכל סוג, בהתאם לכל חוק או רגולציה של כל רשות שלטונית, רגולטיבית או משפטית, בין אם מחוץ לארץ או מקומית. \n' +
        '   2. תוכן האפליקציה ניתן לך כמות שהוא (“AS IS”) לשימושך הפרטי בלבד וכן, אלא אם מאושר במפורש בהסכם, אינו ניתן לשימוש, העתקה, הפצה, שידור, העברה באמצעים אלקטרוניים, הצגה, מכירה, מתן רישיון, פירוק הקמפול, או לניצול לכל תכלית שהיא, ללא הסכמה מראש ובכתב של מקום לנפש. בעת הורדה או הדפסת עותק של התוכן, עליך לשמור בו על כל הודעות זכויות היוצרים ושאר ההודעות אודות הבעלות, הגלומות בו. סימני המסחר, הסמלילים וכל הסימנים האחרים הם בבעלות הבלעדית של מקום לנפש ועמיתיה. כל סימן מסחר, סימן שירות וסמליל אחר הנכללים באפליקציה הם בבעלות הבעלים של כל אחד מהם.   \n' +
        '6. גילוי.  אנו שומרים על הזכות לגשת, לקרוא, לשמור ולגלות כל מידע שהשגנו בקשר עם האפליקציה, אשר אנו מאמינים, באופן סביר, כי חיוני בכדי: (i) לפעול בהתאם ולציית לכל חוק, רגולציה, הליך משפטי, צו או בקשה שלטונית רלוונטים, (ii) לאכוף תנאי הסכם זה, לרבות חקירה של הפרות פוטנציאליות של מי מהם, (iii) לאתר, למנוע או לטפל בכל אופן אחר בהונאה או כל סוגיה טכנית או סוגיה של הגנה, (iv) לענות לכל בקשות התמיכה שלך, או (v) להגן על הזכויות, הבעלות או הביטחון של מקום לנפש, המשתמשים בשירותיה או הציבור. \n' +
        '7. תשלומים.\n' +
        '   1. הרישיון המוענק לך בזאת מוענק בחינם. \n' +
        '   2. שים לב כי על מנת להשתמש באפליקציה, ייתכן כי תזדקק לחיבור או גישה לאינטרנט. אתה מסכים בזאת להיות החייב הבלעדי לתשלום כל תשלום, באם יידרש על ידי כל צד שלישי שהינו ספק שירותים או ספק האינטרנט שלך, בגין גישתך או חיבורך לאינטרנט. \n' +
        '8. פרטיות. אנו לא אוספים מידע מזהה אודותיך. כל השימוש באפליקציה נעשה באנונימיות. ייתכן ונאסוף מידע על אופי השימוש במטרה לשפר את האפליקציה עבור המשתמשים, אך מבלי שנדע מי הוא המשתמש. בכל חלק מהמידע שייתכן ונאסוף או נשיג בקשר עם האפליקציה, הינך מאשר לנו בזאת לעשות כן. אנא שים לב כי ייתכן ומידע פרטי ומידע אחר מסוים שתספק בקשר עם שימושך באפליקציה יישמר על מכשירך (אפילו אם המידע לא נאסף על ידינו). אתה האחראי הבלעדי לתחזוקת אמצעי ההגנה של מכשירך מפני גישה בלתי מורשית.  \n' +
        '9. תוכנת צד שלישי. חלקים מהאפליקציה עשויים לכלול תוכנה של צד שלישי, הכפופה לתנאי שימוש של אותו צד שלישי ("תנאי צד שלישי"). רשימה של כל קוד פתוח של תוכנת צד שלישי ותנאי צד שלישי רלוונטיים מופיעים בכתובת https://www.youtube.com/intl/iw/howyoutubeworks/policies/community-guidelines/, בכל מקרה של סתירה בין תנאי צד שלישי לתנאי הסכם זה, הרי שתנאי הצד השלישי יגברו בקשר עם תוכנת אותו צד שלישי. \n' +
        '10. תיאור מידע. אנו מנסים להיות מדויקים ככל האפשר. עם זאת, איננו יכולים ואיננו מתחייבים כי המידע המוצג באפליקציה הוא מדויק, שלם, בר-סמכא, עכשווי או חף משגיאות. אנו שומרים על הזכות לבצע שינויים בתוכן, בקשר אליו, או לכל חלק ממנו, מבלי להודיע על כך מראש או לאחר שינוי, כאמור. \n' +
        '11. פטור מאחריות. האפליקציה מסופקת "כמות שהיא" ו"על בסיס זמינות" ("AS IS" and "AS AVAILABLE"), ללא כל אחריות מכל סוג שהוא, לרבות, בין היתר, מצגים ואחריות בקשר לסחירות, תאימות לתכלית מסוימת, בעלות ואי-הפרה, וכן אלו הנובעים בקשר או עקב מסחר. איננו מספקים כל אחריות לכך שהאפליקציה תהא חפה מפגמים, נקייה מווירוסים או כל קוד מזיק אחר, או שנתקן את הפגמים בה. אתה מסכים בזאת שלא אנו ולא המפיץ נימצא אחראים לכל השלכות העלולות להיגרם עקב תקלות טכניות, לרבות, מבלי לגרוע מכלליות האמור לעיל, בקשר עם האינטרנט (כגון חיבור איטי, עומס על תעבורה או תעבורת יתר של שרתינו או שרתים אחרים) או כל ספק אינטרנט או תקשורת. \n' +
        '12. פטור מאחריות רפואית. המידע, העצות, הכלים הדיגיטליים, ההמלצות, או הכלים החיצוניים (בוט וואטסאפ "סולי", בוט טלגרם, סרטון PMR, סרטון סקירת גוף) הניתנים באפליקציית מקום לנפש, מהווים מידע כללי. הם אינם מהווים תחליף לבדיקה או לייעוץ אצל רופאים, ואינם בגדר "אבחנה רפואית", "חוות דעת רפואית", "המלצה לטיפול רפואי" או "תחליף לטיפול רפואי". בכל מקרה שבו קיימת בעיה רפואית, או מתעורר חשד לקיומה, יש להזמין ביקור אצל רופא או רופאת המשפחה, או רופאים במקצועות אחרים, ולהיבדק. בכל מקרה של בעיה דחופה, מקרה חירום או מצב מצוקה (גופני או נפשי) – יש לפנות לקבלת טיפול רפואי אצל הרופא או הרופאה המטפלים, לחדר המיון של בית החולים הקרוב, או למגן דוד אדום (באמצעות מספר החירום 101, בכל הארץ). בעצם השימוש באפליקציה, או באחד מהכלים החיצוניים (בוט וואטסאפ "סולי", בוט טלגרם, סרטון PMR, סרטון סקירת גוף) המשתמשים מוותרים על כל תביעה, דרישה או טענה מכל סוג שהוא כלפי המרכז הירושלמי לבריאות הנפש ומי מפתחיה, כותביה, יוצריה ומשווקיה של האפליקציה. \n' +
        '13. הגבלת חבות. \n' +
        '   1. מקום לנפש החברות המסונפות לה וכן כל נושא משרה, דירקטור, עובד, נותן רישיון, ממחה וסוכן של מי מהן, כמו גם כל מפיץ, לא יהיו חבים, בשום מקרה, בגין כל הפסד כספי, אובדן של רצון טוב, פגיעה במוניטין, נזק עקיף, מופתי, מיוחד, תוצאתי או משני מכל סוג, הנובע מהסכם זה או בקשר עם השימוש או חוסר היכולת להשתמש באפליקציה, אף אם נודע ל-מקום לנפש או לכל מפיץ על האפשרות לגרימת נזק כאמור. בתחומי משפט מסוימים הגבלת או החרגת חבות בגין נזק עקיף או תוצאתי אינו מאושר, ועל כן, ייתכן והגבלות אלו לא יחולו עליך.  \n' +
        '   2. מבלי לגרוע מכלליות האמור בסעיף זה, וככל שמותר על פי דין, אתה מסכים בזאת שהחבות הכוללת אליך בגין כל הנזקים או ההפסדים הנובעים מהסכם זה או בקשר עם השימוש או חוסר היכולת להשתמש באפליקציה לא תעלה, בכל מקרה, על הסכום ששולם לנו על ידך, אם בכלל, בגין השימוש באפליקציה במהלך ששת (6) החודשים הקודמים למועד העלאת הטענה. \n' +
        '14. שיפוי. אתה מסכים בזאת להגן, לשפות ולפטור את מקום לנפש ואת החברות המסונפות לה, את נושאי המשרה, הדירקטורים, העובדים והסוכנים שלה ושל החברות המסונפות לה, כמו גם כל מפיץ, מפני וכנגד כל תביעה, נזק, חובה, עלות והוצאה (לרבות הוצאות שכר טרחה סבירות) של כל צד שלישי, הנובעים מ: (i) שימושך או אי יכולת שימושך באפליקציה; (ii) הפרתך את ההסכם; ו/או (iii) הפרתך את הזכויות של כל צד שלישי, לרבות, בין היתר, כל זכות יוצרים, בעלות או זכות לפרטיות. מבלי לגרוע או לפגוע במי ממחויבויותיך בהתאם לסעיף זה, אנו שומרים על זכותנו (על חשבוננו), לקחת על עצמנו את ההגנה והשליטה על כל נושא הכפוף לשיפוי על ידך, אך איננו מתחייבים לעשות כן. אתה מסכים בזאת לא להתפשר על כל נושא הכפוף לשיפוי מצדך מבלי לקבל את אישורנו המפורש מראש. \n' +
        '15. חוקי יצוא. אתה מסכים בזאת לפעול בהתאם לכל דיני ותקנות הייצוא הרלוונטיים, על מנת לוודא שלא האפליקציה ולא כל מידע טכני הנוגע לה ייצואו או ייצואו מחדש במישרין או בעקיפין תוך הפרה של או באופן שאסור על פי אותם דינים ותקנות.\n' +
        '16. עדכונים ושדרוגים.  אנו עשויים לספק עדכונים או שדרוגים לאפליקציה מעת לעת (כל אחד, "עדכון"), אך אין לנו חובה לעשות כן. כל עדכון יינתן בהתאם למדיניותנו שתהא בתוקף באותה עת. מדיניות זו עשויה לכלול עדכון או שדרוג אוטומטיים, מבלי לספק לך הודעה על כך. אתה מסכים בזאת לעדכון או שדרוג אוטומטיים של האפליקציה, כאמור. התייחסות בהסכם זה לאפליקציה יכלול כל עדכון שלה. הסכם זה יחול על כל עדכון המחליף או מוסיף על האפליקציה המקורית, אלא במידה וצורף לעדכון הסכם מתן רישיון נפרד, אשר יחול על אותו עדכון.\n' +
        '17. משך ההסכם וסיומו. הסכם זה יישאר בתוקפו עד אשר יובא לסיומו על ידינו או על ידך. אנו שומרים על זכותנו לבצע כל אחת מהפעולות הבאות בכל עת: (i) להפסיק או לשנות כל היבט של האפליקציה; ו/או (ii) לסיים את תוקפו של ההסכם ושימושך באפליקציה, עם או ללא כל סיבה, ולא נהא חבים לך או לכל צד שלישי בגין המצויין לעיל. במידה ותתנגד למי מתנאי או הוראות הסכם זה או לכל שינוי עתידי בו, או שלא תהא מרוצה מהאפליקציה בכל אופן, תוכל אך ורק להפסיק מידית את השימוש באפליקציה. עם תפוגת תוקפו של ההסכם, תפסיק להשתמש: (א) באפליקציה, ותשמיד כל עותק של האפליקציה ומסמך הנוגע לה, אשר בבעלותך או תחת שליטתך, וכן (ב) בחשבונך. סעיף 16 זה וכן הסעיפים 5 (זכויות קניין רוחני), 8 (פרטיות), 11 (פטור מאחריות), 12 (הגבלת חבות), 13 (שיפוי), 17 (המחאה) ו-19 (כללי) ישרדו את סיום תוקפו של ההסכם ויישארו בתוקף לאחר מכן. \n' +
        '18. המחאה. אינך יכול להעביר או להמחות הסכם זה ומי מהזכויות והרשיונות המוענקים על פיו, אולם אנו רשאים לעשות כן ללא כל מגבלה או צורך במתן הודעה.  \n' +
        '19. שינויים. אנו שומרים על הזכות לשנות הסכם זה בכל עת, באמצעות מתן הודעה על כך לך, במסגרת האפליקציה ו/או באמצעות פרסום ההסכם המעודכן באפליקציה. שינוי, כאמור, ייכנס לתוקפו בתוך עשרה (10) ימים ממועד מתן הודעה, כאמור, והמשך שימושך באפליקציה לאחר כל שינוי כאמור יהווה הסכמה לו. \n' +
        '20. כללי. חוקי מדינת ישראל יחולו על הסכם זה ומערכת היחסים בינך לבין מקום לנפש ואלה יפורשו בהתאם לחוקים אלה, מבלי להתחשב דינים בכללי ברירת הדין. אתה מסכים בזאת להעניק סמכות שיפוט בלעדית לבתי המשפט הנמצאים בתל אביב יפו, ומוותר על כל טענה בנוגע לתחום השיפוט, המותב, או אי נוחות הפורום כנגד סמכות שיפוט בתי משפט אלה, כאמור. מבלי לגרוע מהאמור לעיל, מקום לנפש שומרת על זכותה לתבוע בכל בית משפט בעל סמכות שיפוט לשם קבלת צו מניעה. הסכם זה וכל הודעה שתפורסם על ידי מקום לנפש בקשר לאפליקציה מהווים את ההסכם הכולל בינך לבין מקום לנפש בכל הנוגע לאפליקציה. בכל מקרה של סתירה בין הסכם זה ומה מהאמור לעיל, תנאי הסכם זה יגברו. שינויים להסכם זה יהיו חסרי תוקף, אלא אם נערכו בכתב ונחתמו על ידי מקום לנפש. במידה ומי מתנאי ההסכם יימצאו בלתי תקפים על ידי בית משפט מוסמך, שאר הסעיפים בהסכם, פרט לאלו הפסולים, יחולו ויישארו בתוקף. ויתור על מי מתנאי ההסכם לא ייחשב כוויתור מתמשך על אותו תנאי או כל תנאי אחר, ואי עמידה של מי מהצדדים על כל זכות מתוקף או תנאי ההסכם לא ייחשב כויתור על אותה זכות או תנאי. אתה מסכים בזאת להגיש תביעה בגין כל עילת תביעה אשר עשויה ',
    },
    tutorial: {
      appHeader: 'מקום לנפש',
      '1': {
        header: 'ברוכים הבאים ליישומון',
        text:
          'היישומון נוצר במטרה לסייע לאנשים שסבלו \n' +
          'מאירוע מורכב (טראומה). \n' +
          'ביישומון מערכת לניטור עצמי, המאפשרת לך לשים לב לשינויים בתחושות ובתפקוד לאורך זמן, ואף להנגיש \n' +
          'את הטיפול למי שזקוק לו. \n' +
          'ביישומון יש כלים דיגיטליים מגוונים להפחתת מתח ובעיות אחרות העולות בעקבות החשיפה לאירוע המורכב.',
      },
      '2': {
        header: 'ביטחון מידע אישי',
        text:
          'חשוב להדגיש שאיננו שומרים מידע אישי אודותיך.כל המידע שמור בתוך המכשיר שלך. \n' +
          'במסך הבא תתבקש לענות על שאלון לניטור עצמי של תחושות רגשיות, פיזיות וקוגנטיביות, העלולות לצוץ בעקבות האירוע המורכב שחווית.עבור כ 90% מהאנשים שיסבלו מבעיות כאלה בעקבות האירוע, ירגישו כיצד הן הולכות ונעלמות בחלוף הזמן, \n' +
          'זהו תהליך טבעי של הגוף לאירוע העוצמתי.',
      },
      '3': {
        header: 'מעקב התקדמות',
        notifications: 'סמן כאן כדי לקבל התראות ועדכונים',
      },
      continue: 'התחל שאלון',
    },
    questionInstructions: {
      header: 'INSTRUCTIONS',
      text: 'This questionnaire asks about problems you may have had after a very stressful experience involving actual or threatened death, serious injury, or sexual violence. It could be something that happened to you directly, something you witnessed, or something you learned happened to a close family member or close friend. Some examples are a serious accident; fire; disaster such as a hurricane, tornado, or earthquake; physical or sexual attack or abuse; war; homicide; or suicide.',
      start: 'Start Answering',
    },
    questionnaire: {
      header: 'מקום לנפש',
      prefix: 'يف الشهر السابق، الى اي مدى انزعجت ب:',
      selections: {
        '0': 'اطلاقا - 0',
        '1': 'قليلا - 1',
        '2': 'متوسط - 2',
        '3': 'الى حدكبي - 3',
        '4': 'كثيا جدا - 4',
      },
      question: {
        '1': 'ذكريات متكررة، ومؤلمة ومزعجة حول التجربة الأليمة؟',
        '2': 'احلام متكررة ومزعجة حول التجربة الأليمة؟',
        '3': 'الشعور الفجا ين أو التصرف حول التجربة الأليمة بأن ما حدث سوف يحدث مرة أخرى (كأنك تتعايش) التجربة؟',
        '4': 'الشعور بالانزعاج، عندما يذكرك يشء بالحادثة الأليمة؟',
        '5': 'لديك رد فعل جسدي قوي عندما يذكرك يشء ما بالتجربة الأليمة (مثال: خفقانالقلب،ضيق يفالتنفس،التعرق)؟',
        '6': 'تجنب الذكريات، الافكار، أو الاحاسيس المرتبطة بالتجربة الأليمة.',
        '7': 'تجنب الاشياء ال يت تذكرك بالتجربة الأليمة، مثال: (الناس، الاماكن، النقاش، النشاطات، الظروف)؟',
        '8': 'صعوبة يف تذكر أجزاء مهمة من التجربة الأليمة؟',
        '9': 'وجود شعور سل يت شديد حول النفس ِك أو الاخرين أو العالم (مثال: وجود افكار أنا يشء،لديمشكلة،لاأحدجديربالثقة،العالمخطيجدًا)؟',
        '10': 'إلقاء اللوم عل نفسك أو الاخرين للتجربة الأليمة أو ما حدث بعدها؟',
        '11': 'وجود مشاعر سلبية قوية مثل الخوف، الفزع، الغضب، الذنب، أو الخجل؟',
        '12': 'فقدان الرغبة يف التمتع بالنشاطات السابقة ال يت كنت تتمتع بها؟',
        '13': 'Feeling distant or cut off from other people?',
        '14': 'Trouble experiencing positive feelings (for example, being unable to feel happiness or have loving feelings for people close to you)?',
        '15': 'Irritable behavior, angry outbursts, or acting aggressively?',
        '16': 'المخاطرةكثياأوالقيامبأشياءقديؤذيك؟',
        '17': 'Being “superalert” or watchful or on guard?',
        '18': 'الشعور بالإجفال وسرعة التهيج؟',
        '19': 'Having difficulty concentrating?',
        '20': 'الارق أو صعوبة الاستمرار يف النوم؟',
      },
      ofText: 'מתוך',
      questionText: 'שאלה',
    },
    results: {
      header: 'תוצאות',
      totalScore: 'ציון סופי',
      lowScore: `הציון בשאלון מראה שאתה חווה רמה נמוכה יחסית של תסמינים האופייניים לאחר אירוע טראומטי. אם בעבר חווית מצוקה משמעותית יותר, דע שזהו תהליך טבעי, וירידת העוצמה של התסמינים היא סימן חיובי.
עדיין, זה טבעי שגם תסמינים ברמה נמוכה יכולים לגרום לתחושת מצוקה. חשוב להבין גם שהשאלון לא בודק תסמיני דיכאון, חרדה ושימוש לרעה בחומרים, שעלולים להופיע גם כן לאחר אירוע טראומטי, ויכולים בעצמם לגרום למצוקה.
למרות שאין תחליף לטיפול מקצועי פנים מול פנים, היישומון הזה יכול לשמש את ללמוד כלים להפחתת התסמינים. הם גם יכולים להיות מוספים על טיפול מקצועי פנים מול פנים.
אם אתה מרגיש שאתה עלול לפגוע בעצמך או באחרים לחץ על כפתור 'ערוצי התמיכה'.  אם אתה מרגיש במצוקה או מתח, אתה מוזמן להשתמש באחד מהכלים האחרים שבתוך היישומון או להיכנס לסולי הבוטית שב'ארגז הכלים'.

מומלץ לבצע הערכה פעם בשבוע, על מנת לעקוב אחר השינויים, ובתקווה לראות שיפור עם הזמן`,
      mediumScore: `הציון בשאלון מראה שאתה חווה רמה בינונית של תסמינים האופייניים לאחר אירוע טראומטי. התחושות שאתה חווה הם תגובה נורמלית לאירוע טראומטי ואנשים רבים חווים אותם מספר שבועות עד מספר חודשים מהאירוע. לעומת זאת, אם ציון זה גבוה מציונים אחרים שקיבלת בשאלונים קודמים סימן שיש החמרה מסוימת, וכדאי לשים אליה לב.
במידה ואתה מרגיש שהירידה בתפקוד בקרב המשפחה, הלימודים ו/או העבודה נמשכת, או שאתה חווה בעיות נוספות שהשאלון לא בודק, כמו חרדה, דיכאון או שימוש לרעה בחומרים, כדאי לפנות לטיפול. למידע לגבי גישה לאפשרויות טיפול מגוונות לחץ על כפתור 'ערוצי התמיכה'.
למרות שאין תחליף לטיפול מקצועי פנים מול פנים, היישומון הזה יכול לשמש אותך ללמידת כלים להפחתת התסמינים. תמצא אותם בכפתור 'ארגז הכלים'. הם גם יכולים להיות מוספים על טיפול מקצועי פנים מול פנים.
אם אתה מרגיש שאתה עלול לפגוע בעצמך או באחרים לחץ על כפתור 'ערוצי התמיכה'.  אם אתה מרגיש במצוקה או מתח, אתה מוזמן להשתמש באחד מהכלים האחרים שבתוך היישומון או להיכנס לסולי הבוטית שב'ארגז הכלים'.

מומלץ לבצע הערכה פעם בשבוע, על מנת לעקוב אחר השינויים, ובתקווה לראות שיפור עם הזמן.`,
      highScore: `הציון בשאלון מראה שאתה חווה רמה גבוהה של תסמינים האופייניים לאחר אירוע טראומטי. התחושות שאתה חווה הם תגובה נורמלית לאירוע טראומטי ואנשים רבים חווים אותם מספר שבועות עד מספר חודשים מהאירוע. לעומת זאת, אם ציון זה גבוה מציונים אחרים שקיבלת בשאלונים קודמים סימן שיש החמרה מסוימת, וכדאי לשים אליה לב.
במידה ואתה מרגיש שהירידה בתפקוד בקרב המשפחה, הלימודים ו/או העבודה נמשכת, או שאתה חווה בעיות נוספות שהשאלון לא בודק, כמו חרדה, דיכאון או שימוש לרעה בחומרים, כדאי לפנות לטיפול. למידע לגבי גישה לאפשרויות טיפול מגוונות לחץ על כפתור 'ערוצי התמיכה'.
למרות שאין תחליף לטיפול מקצועי פנים מול פנים, היישומון הזה יכול לשמש אותך ללמידת כלים להפחתת התסמינים. תמצא אותם בכפתור 'ארגז הכלים'. הם גם יכולים להיות מוספים על טיפול מקצועי פנים מול פנים.
אם אתה מרגיש שאתה עלול לפגוע בעצמך או באחרים לחץ על כפתור 'ערוצי התמיכה'.  אם אתה מרגיש במצוקה או מתח, אתה מוזמן להשתמש באחד מהכלים האחרים שבתוך היישומון או להיכנס לסולי הבוטית שב'ארגז הכלים'.
מומלץ לבצע הערכה פעם בשבוע, על מנת לעקוב אחר השינויים, ובתקווה לראות שיפור עם הזמן.`,
      lowScoreAfterMultiAttempts: `חדשות טובות! במעקב של 4 שאלונים אפשר לראות שאתה חווה רמה נמוכה של תסמינים לאחר הטראומה. הציון המשוקלל שלך מבוסס על הממוצע של 4 השאלונים שמילאת והשינויים בין שאלון לשאלון. בתקווה שתמשיך לחוות עוצמה מינימלית של תסמינים, כדאי שתנטר את עצמך אחת לכמה שבועות, דרך היישומון או במפגש עם מטפל. הכלים שבאפליקציה עדיין פתוחים בפניך ואתה מוזמן להשתמש בהם כל עת שאתה מרגיש קושי מסוים.
עדיין, זה טבעי שגם תסמינים ברמה נמוכה יכולים לגרום לתחושת מצוקה. חשוב להבין גם שהשאלון לא בודק תסמיני דיכאון, חרדה ושימוש לרעה בחומרים, שעלולים להופיע גם כן לאחר אירוע טראומטי, ויכולים בעצמם לגרום למצוקה.
למרות שאין תחליף לטיפול מקצועי פנים מול פנים, היישומון הזה יכול לשמש את ללמוד כלים להפחתת התסמינים. הם גם יכולים להיות מוספים על טיפול מקצועי פנים מול פנים.
אם אתה מרגיש שאתה עלול לפגוע בעצמך או באחרים לחץ על כפתור 'ערוצי התמיכה'.  אם אתה מרגיש במצוקה או מתח, אתה מוזמן להשתמש באחד מהכלים האחרים שבתוך היישומון או להיכנס לסולי הבוטית שב'ארגז הכלים'.`,
      mediumScoreAfterMultiAttempts: `הציון המשוקלל ב 4 השאלונים, המבוסס על ממוצע הציונים והשינויים בין שאלון לשאלון, מראה שאתה חווה רמה בינונית של תסמינים האופייניים לאחר אירוע טראומטי. בשלב זה בו האירוע הטראומטי מעט רחוק יותר, אך התסמינים עדיין נוכחים בחייך, כדאי לפנות לטיפול. ייתכן גם שלתסמינים המצוינים בשאלון מתווספים דיכאון, חרדה ושימוש לרעה בסמים, מה שמחזק את המלצתינו לפנות לטיפול המתאים עבורך. בכפתור 'ערוצי התמיכה' תמצא מגוון אפשרויות טיפוליות, כולל קביעת מפגשים פנים מול פנים, קביעת מפגשים טלפונים, שיחת וידאו ועוד.
למרות שאין תחליף לטיפול מקצועי פנים מול פנים, היישומון הזה יכול לשמש אותך ללמידת כלים להפחתת התסמינים. תמצא אותם בכפתור 'ארגז הכלים'. הם גם יכולים להיות מוספים על טיפול מקצועי פנים מול פנים.
אם אתה מרגיש שאתה עלול לפגוע בעצמך או באחרים לחץ על כפתור 'ערוצי התמיכה', שם תמצא המספרים למצוקה מיידית.  אם אתה מרגיש במצוקה פחות קשה ומתח, אתה מוזמן להשתמש באחד מהכלים האחרים שבתוך היישומון או להיכנס לסולי הבוטית שב'ארגז הכלים'.
מומלץ לבצע הערכה פעם בשבוע, על מנת לעקוב אחר השינויים, ובתקווה לראות שיפור עם הזמן.`,
      highScoreAfterMultiAttempts: `הציון המשוקלל ב 4 השאלונים, המבוסס על ממוצע הציונים והשינויים בין שאלון לשאלון, מראה שאתה חווה רמה גבוהה של תסמינים האופייניים לאחר אירוע טראומטי. במידה ועדיין לא עשית זאת, אנו ממליצים לך לגשת לטיפול.  בכפתור 'ערוצי התמיכה' תמצא מגוון אפשרויות טיפוליות, כולל קביעת מפגשים פנים מול פנים, קביעת מפגשים טלפונים, שיחות וידאו ועוד. אל תישאר עם זה לבד. לתחושות הקשות ניתן לעזור, ואנשים רבים מצליחים לחזור לתפקוד בעזרת הטיפול המתאים.
למרות שאין תחליף לטיפול מקצועי פנים מול פנים, היישומון הזה יכול לשמש אותך ללמידת כלים להפחתת התסמינים. תמצא אותם בכפתור 'ארגז הכלים'. הם גם יכולים להיות מוספים על טיפול מקצועי פנים מול פנים.
אם אתה מרגיש שאתה עלול לפגוע בעצמך או באחרים לחץ על כפתור 'ערוצי התמיכה'.  אם אתה מרגיש במצוקה או מתח, אתה מוזמן להשתמש באחד מהכלים האחרים שבתוך היישומון או להיכנס לסולי הבוטית שב'ארגז הכלים'.
מומלץ לבצע הערכה פעם בשבוע, על מנת לעקוב אחר השינויים, ובתקווה לראות שיפור עם הזמן.`,
      supportButton: 'ערוצי תמיכה',
      toolboxButton: 'ארגז כלים',
    },
    toolbox: {
      header: 'ארגז כלים',
      toolsHelpTitle:
        'הכלים הבאים יוכלו לסייע לך להתמודדות עם ביטויים שונים, גופניים ורגשיים, המופיעים לאחר האירוע הטראומטי.',
      relaxMuscleTitle: 'הרפיית שרירים מתקדמת',
      relaxMuscleText:
        'הדרכה מוקלטת בעברית של תרגיל הרפיית שרירים מתקדמת. אתה תעבור מקבוצת שרירים גדולה אחת לאחרת, תכווץ ותשחרר אותן לפי הסדר. ההדרכה, בהנחיית ד"ר דניאל בן אליעזר, עורכת כ 10 דקות',
      relaxMuscleButton: 'קישור להדרכה',
      relaxBodyTitle: 'סקירת גוף',
      relaxBodyText:
        'זוהי הדרכה מוקלטת בעברית בתרגיל מיינדפולנס מסוג סקירת גוף. המטרה היא לפתח קשיבות לתחושות שעולות מהגוף וללמוד לחיות איתם בשלום. במהלך ההדרכה יהיו רגעי שקט כדי שתוכל להתרכז בתחושות הגופניות. ההדרכה, בהנחיית עמוס אבישר עורכת כ 10 דקות',
      relaxBodyButton: 'קישור להדרכה',
      botTitle: 'סולי',
      botText:
        'סולי הבוטית הינה בוט חינמי באפליקציית וואטסאפ היכולה לסייע בהפחתת מתח, חרדה ובעיות נוספות.',
      botButton: 'קישור לווטסאפ',
    },
    getSupport: {
      header: 'ערוצי תמיכה',
      crisisButton: `מענה בחירום`,
      findProCareButton: `מענה בשגרה`,
      answerAgainButton: `מלא שאלון נוסף`,
      toolBox: 'ארגז כלים',
    },
    crisisResources: {
      header: 'מענה בחירום',
      eranTitle: `אם הנך ברמת מצוקה גבוהה חייג למוקדי הטלפונים הזמינים 24/7:`,
      eranButton: `ער״ן 1201`,
      suicideAndCrisisTitle: `קו חיים התאבדות ומשבר:`,
      ntlButton: `נט״ל 1800-363-363`,
      hamalLevEhadButton: `חמ״ל לב אחד 072-2133281`,
      emergencyCentersTitle: `מוקדי קופת חולים בחירום:`,
      macabiButton: `מכבי 3555* (זמינים 8:00 - 24:00)`,
      clalitButton: `כללית 03-7472010`,
      meuhedetButton: `מאוחדת - 3833*`,
      leumitButton: `לאומית 507*`,
    },
    findProCare: {
      header: 'מענה בשגרה',
      portalsTitle: `בפורטלים הבאים תוכל למצוא מענים מגוונים וחינמיים, כולל קביעת מפגשים פנים מול פנים, שיכולים להתאים לך`,
      nafshiButton: `Nafshi - Mental support in Israel`,
      otefOrefButton: `Otef Oref`,
      healthFundsTitle: `קופות החולים מעניקות 3 מפגשים טלפוניים ללא עלות עם איש מקצוע בתחום בריאות הנפש. ניתן לתאם באותם מספרי של מוקדי החירום הנ"ל. בקישור הבא ניתן למלא טופס לבקשת טיפול ע"י אנשי טיפול מוסמכי משרד הבריאות. 
(חוזרים תוך 24 שעות מהגשת הטופס)`,
      fillFormButton: `Fill Form`,
    },
    notifications: {
      1: {
        channelName: 'Reminders',
        title: 'זמן לענות על השאלון',
        body: 'במהלך התקופה שלאחר אירוע טראומטי חשוב לנטר את התחושות, הרגשות והקשיים שעלולים לצוץ עם הזמן, כדי לסייע במה שצריך. את/ה לא לבד. הכנס/י לאפליקציה וענה/י על השאלון. בפנים תמצא גם כלים שיוכלו לסייע בעת הצורך',
      },
      3: {
        channelName: 'Reminders',
        title: 'את/ה לא לבד',
        body: 'המצב במדינה מקשה על כולנו, אבל אתה לא חייב להישאר עם זה לבד. כנס לאפליקציה ובחר כלי מוכח מחקרית להפגת מתח או להתמודדות עם תחושת עצבות או אשמה',
      },
      7: {
        channelName: 'Reminders',
        title: 'להתנתק ממחשבות שליליות',
        body: 'בדומה לאנשים אחרים במדינה, שאלון הניטור העצמי מראה שהאירועים הקשים נוגעים בך. ייתכן ואתה מתקשה להתנתק ממחשבות שליליות, להתרכז בדברים יומיומיים או לישון כמו שצריך. באפליקציה יש כלים שיכולים לעזור במצב המורכב שאנו נמצאים בו',
      },
    },
  },
  il: {
    notifications: {
      1: {
        channelName: 'Reminders',
        title: 'זמן לענות על השאלון',
        body: 'במהלך התקופה שלאחר אירוע טראומטי חשוב לנטר את התחושות, הרגשות והקשיים שעלולים לצוץ עם הזמן, כדי לסייע במה שצריך. את/ה לא לבד. הכנס/י לאפליקציה וענה/י על השאלון. בפנים תמצא גם כלים שיוכלו לסייע בעת הצורך',
      },
      3: {
        channelName: 'Reminders',
        title: 'את/ה לא לבד',
        body: 'המצב במדינה מקשה על כולנו, אבל אתה לא חייב להישאר עם זה לבד. כנס לאפליקציה ובחר כלי מוכח מחקרית להפגת מתח או להתמודדות עם תחושת עצבות או אשמה',
      },
      7: {
        channelName: 'Reminders',
        title: 'להתנתק ממחשבות שליליות',
        body: 'בדומה לאנשים אחרים במדינה, שאלון הניטור העצמי מראה שהאירועים הקשים נוגעים בך. ייתכן ואתה מתקשה להתנתק ממחשבות שליליות, להתרכז בדברים יומיומיים או לישון כמו שצריך. באפליקציה יש כלים שיכולים לעזור במצב המורכב שאנו נמצאים בו',
      },
    },
    userAgreement: {
      pageTitle: 'הסכם משתמש קצה',
      acceptButton: 'אישור',
      header: 'הסכם מתן רישיון משתמש קצה ביישומון',
      appName: 'מקום לנפש',
      text:
        'אנא קיראו בעיון רב את התנאים הבאים לפני התקנת, רישום ו/או שימוש באפליקציה.\n' +
        '\n' +
        'באמצעות בחירה באפשרות "מסכים", "כן" או בשל התקנה ו/או שימוש באפליקציית התוכנה הסלולרית (ביחד עם כל התוכן הכלול בה, שירותיה וזכויות הקניין הרוחני הגלומות בה, "האפליקציה"), את/ה מכיר/ה ומאשר/ת בזאת להתקשר בזאת בחוזה משפטי מחייב עם מקום לנפש, כי קראת, הבנת והסכמת לעמוד בכל התנאים המפורטים מטה, במסגרת הסכם מתן רישיון משתמש קצה זה ("ההסכם"). הינך מוותר בזאת על כל הזכויות העומדות לך לדרוש לקבל חתימה מקורית (שאינה אלקטרונית) או לקבל ולשמור תיעוד שאינו אלקטרוני, ככל שוויתור זה אינו אסור על פי דין. אם אינך מסכים לעמוד בכל התנאים המפורטים מטה, אנא, אל תוריד, תתקין או תשתמש באפליקציה. אתה מאשר ומתחייב בזאת שאתה (i) בן 18 שנה לפחות או (ii) בין הגילאים 13 ל-18 וסקרת את תנאי ההסכם עם מי מהוריך או האפוטרופוס שלך, על מנת לוודא שהן אתה והן הורך או האפוטרופוס שלך הבנתם את התנאים והסכמתם להם. אם אינך עונה למי מדרישות הגיל, כאמור, או אם אינך מסכים לעמוד בכל התנאים המפורטים מטה, אנא, אל תבחר להסכים להסכם זה או להוריד, לגשת או להשתמש באפליקציה.\n' +
        '1. תיאור האפליקציה. האפליקציה הינה ממשק מופשט לטלפונים חכמים מבוססי אנדרואיד ואפל, ומיועדת לאנשים שעברו אירוע טראומטי. האפליקציה מאפשרת ניטור עצמי של תסמינים אופייניים לאחר הטראומה ומנגישה כלי טיפול דיגיטליים שיכולים לסייע בהפחתת התסמינים, ובערוצי תמיכה בהתאם לניטור.\n' +
        '2. רישיון. בכפוף לתנאים והוראות הסכם זה, מקום לנפש מעניקה לך בזאת רישיון פרטי, בר-ביטול, שאינו ייחודי, אינו מאפשר מתן רישיון לאחר ואינו ניתן להמחאה או העברה ("רישיון"), בכדי: (i) להוריד, להתקין ולהשתמש באפליקציה באמצעות טלפון סלולרי, מכשיר או טאבלט בהם הותקנה האפליקציה מבעוד מועד, לאחר שהשגת אותה מספק השירותים הסלולריים שלך, המספק למכשירך שירותי גישה לאינטרנט ("ספק"), או, אם רכשת את האפליקציה מכל פלטפורמה של צד שלישי או נותן שירותים אחר למכשירים סלולריים ("מפיץ"), על גבי טלפון סלולרי, מכשיר או טאבלט שבבעלותך או בשליטתך (בכל מקרה, "מכשיר"); וכן (ii) לגשת ולהשתמש באפליקציה על המכשיר בהתאם להסכם זה.\n' +
        '3. מגבלות הרישיון. הינך מסכים בזאת לא לבצע את הפעולות הבאות בעצמך ו/או לאפשר לכל צד שלישי: (i) להעניק רישיון לאחר, להפיץ מחדש, למכור, להחכיר, להשאיל או להשכיר את האפליקציה; (ii) אלא אם מאושר במפורש בהסכם, לאפשר גישה לאפליקציה באמצעות רשת, כך שיתאפשר בה שימוש מקביל על מספר מכשירים באותה עת; (iii) אלא אם מאושר במפורש בהסכם זה או על פי דין, לפרק, להנדס לאחור, לפרק את הקמפול, לפענח את הקידוד או לנסות לחלץ את קוד המקור של האפליקציה; (iv) להעתיק (אלא למטרות גיבוי), לשנות, לשפר או ליצור כל יצירה נגזרת של האפליקציה, או כל חלק ממנה; (v) לעקוף, לנטרל או להתערב בכל אופן אחר במאפייני ההגנה והאבטחה של האפליקציה, במאפיינים המונעים או מגבילים שימוש או העתקה של כל תוכן, או שמגבילים את השימוש באפליקציה; (vi) להסיר, לשנות, או להתערב בכל אופן אחר במי מהודעות או זיהוי הבעלות באפליקציה, לרבות הודעות בקשר לזכויות יוצרים, סימני מסחר, פטנטים או כל הודעה אחרת, הנכללת, מוצגת או ניתנת במסגרת האפליקציה; (vii) לעשות שימוש בתקשורת של המערכות הנכללות באפליקציה על מנת לשלוח הודעות פרסומת לא מאושרות ו/או שלא נתבקשו; (viii) לעשות שימוש בשמה של מקום לנפש, בסמלילה או סימני המסחר שלה מבלי לקבל את אישורנו בכתב ומראש; ו/או (ix) להשתמש באפליקציה בכל אופן המפר מי מהחוקים, התקנות או הרגולציה הרלוונטיים, או לכל תכלית בלתי חוקית, מזיקה, בלתי אחראית או בלתי נאותה, או באופן המפר את הוראות ההסכם.\n' +
        '4. שימוש באפליקציה ברכב. אם הינך משתמש באפליקציה ברכב, הרי שאתה מסכים בזאת: (i) לציית לכל חוקי התנועה הרלוונטיים; וכן (ii) במידה והינך הנהג, לא לעשות שימוש באפליקציה אלא אם הרכב דומם ומוחנה כחוק. \n' +
        '5. זכויות בקניין רוחני.\n' +
        '   1. האפליקציה ניתנת לך ברישיון, ולא נמכרת לך, בהתאם להסכם. הינך מאשר בזאת ש- מקום לנפש ומי מנותני הרישיון שלה שומרים על בעלותם, הזכויות הנובעות מבעלותם וכל זכויות הקניין הרוחני (כמוגדר מטה) באפליקציה ובכל הנוגע לה (לרבות התוכנה שלה). אנו שומרים על  כל זכות באפליקציה שאינה מוענקת לך במפורש במסמך זה.\n' +
        '"זכויות קניין רוחני" משמען כל זכות, בעלות ואינטרס בכל סוד מסחרי, פטנט, זכות יוצרים, סימן שירותים, סימן מסחר, ידע או כל זכות קניין רוחני דומה, לרבות כל הזכויות המוסריות, הזכות לפרטיות, פרסום וכל זכות דומה מכל סוג, בהתאם לכל חוק או רגולציה של כל רשות שלטונית, רגולטיבית או משפטית, בין אם מחוץ לארץ או מקומית. \n' +
        '   2. תוכן האפליקציה ניתן לך כמות שהוא (“AS IS”) לשימושך הפרטי בלבד וכן, אלא אם מאושר במפורש בהסכם, אינו ניתן לשימוש, העתקה, הפצה, שידור, העברה באמצעים אלקטרוניים, הצגה, מכירה, מתן רישיון, פירוק הקמפול, או לניצול לכל תכלית שהיא, ללא הסכמה מראש ובכתב של מקום לנפש. בעת הורדה או הדפסת עותק של התוכן, עליך לשמור בו על כל הודעות זכויות היוצרים ושאר ההודעות אודות הבעלות, הגלומות בו. סימני המסחר, הסמלילים וכל הסימנים האחרים הם בבעלות הבלעדית של מקום לנפש ועמיתיה. כל סימן מסחר, סימן שירות וסמליל אחר הנכללים באפליקציה הם בבעלות הבעלים של כל אחד מהם.   \n' +
        '6. גילוי.  אנו שומרים על הזכות לגשת, לקרוא, לשמור ולגלות כל מידע שהשגנו בקשר עם האפליקציה, אשר אנו מאמינים, באופן סביר, כי חיוני בכדי: (i) לפעול בהתאם ולציית לכל חוק, רגולציה, הליך משפטי, צו או בקשה שלטונית רלוונטים, (ii) לאכוף תנאי הסכם זה, לרבות חקירה של הפרות פוטנציאליות של מי מהם, (iii) לאתר, למנוע או לטפל בכל אופן אחר בהונאה או כל סוגיה טכנית או סוגיה של הגנה, (iv) לענות לכל בקשות התמיכה שלך, או (v) להגן על הזכויות, הבעלות או הביטחון של מקום לנפש, המשתמשים בשירותיה או הציבור. \n' +
        '7. תשלומים.\n' +
        '   1. הרישיון המוענק לך בזאת מוענק בחינם. \n' +
        '   2. שים לב כי על מנת להשתמש באפליקציה, ייתכן כי תזדקק לחיבור או גישה לאינטרנט. אתה מסכים בזאת להיות החייב הבלעדי לתשלום כל תשלום, באם יידרש על ידי כל צד שלישי שהינו ספק שירותים או ספק האינטרנט שלך, בגין גישתך או חיבורך לאינטרנט. \n' +
        '8. פרטיות. אנו לא אוספים מידע מזהה אודותיך. כל השימוש באפליקציה נעשה באנונימיות. ייתכן ונאסוף מידע על אופי השימוש במטרה לשפר את האפליקציה עבור המשתמשים, אך מבלי שנדע מי הוא המשתמש. בכל חלק מהמידע שייתכן ונאסוף או נשיג בקשר עם האפליקציה, הינך מאשר לנו בזאת לעשות כן. אנא שים לב כי ייתכן ומידע פרטי ומידע אחר מסוים שתספק בקשר עם שימושך באפליקציה יישמר על מכשירך (אפילו אם המידע לא נאסף על ידינו). אתה האחראי הבלעדי לתחזוקת אמצעי ההגנה של מכשירך מפני גישה בלתי מורשית.  \n' +
        '9. תוכנת צד שלישי. חלקים מהאפליקציה עשויים לכלול תוכנה של צד שלישי, הכפופה לתנאי שימוש של אותו צד שלישי ("תנאי צד שלישי"). רשימה של כל קוד פתוח של תוכנת צד שלישי ותנאי צד שלישי רלוונטיים מופיעים בכתובת https://www.youtube.com/intl/iw/howyoutubeworks/policies/community-guidelines/, בכל מקרה של סתירה בין תנאי צד שלישי לתנאי הסכם זה, הרי שתנאי הצד השלישי יגברו בקשר עם תוכנת אותו צד שלישי. \n' +
        '10. תיאור מידע. אנו מנסים להיות מדויקים ככל האפשר. עם זאת, איננו יכולים ואיננו מתחייבים כי המידע המוצג באפליקציה הוא מדויק, שלם, בר-סמכא, עכשווי או חף משגיאות. אנו שומרים על הזכות לבצע שינויים בתוכן, בקשר אליו, או לכל חלק ממנו, מבלי להודיע על כך מראש או לאחר שינוי, כאמור. \n' +
        '11. פטור מאחריות. האפליקציה מסופקת "כמות שהיא" ו"על בסיס זמינות" ("AS IS" and "AS AVAILABLE"), ללא כל אחריות מכל סוג שהוא, לרבות, בין היתר, מצגים ואחריות בקשר לסחירות, תאימות לתכלית מסוימת, בעלות ואי-הפרה, וכן אלו הנובעים בקשר או עקב מסחר. איננו מספקים כל אחריות לכך שהאפליקציה תהא חפה מפגמים, נקייה מווירוסים או כל קוד מזיק אחר, או שנתקן את הפגמים בה. אתה מסכים בזאת שלא אנו ולא המפיץ נימצא אחראים לכל השלכות העלולות להיגרם עקב תקלות טכניות, לרבות, מבלי לגרוע מכלליות האמור לעיל, בקשר עם האינטרנט (כגון חיבור איטי, עומס על תעבורה או תעבורת יתר של שרתינו או שרתים אחרים) או כל ספק אינטרנט או תקשורת. \n' +
        '12. פטור מאחריות רפואית. המידע, העצות, הכלים הדיגיטליים, ההמלצות, או הכלים החיצוניים (בוט וואטסאפ "סולי", בוט טלגרם, סרטון PMR, סרטון סקירת גוף) הניתנים באפליקציית מקום לנפש, מהווים מידע כללי. הם אינם מהווים תחליף לבדיקה או לייעוץ אצל רופאים, ואינם בגדר "אבחנה רפואית", "חוות דעת רפואית", "המלצה לטיפול רפואי" או "תחליף לטיפול רפואי". בכל מקרה שבו קיימת בעיה רפואית, או מתעורר חשד לקיומה, יש להזמין ביקור אצל רופא או רופאת המשפחה, או רופאים במקצועות אחרים, ולהיבדק. בכל מקרה של בעיה דחופה, מקרה חירום או מצב מצוקה (גופני או נפשי) – יש לפנות לקבלת טיפול רפואי אצל הרופא או הרופאה המטפלים, לחדר המיון של בית החולים הקרוב, או למגן דוד אדום (באמצעות מספר החירום 101, בכל הארץ). בעצם השימוש באפליקציה, או באחד מהכלים החיצוניים (בוט וואטסאפ "סולי", בוט טלגרם, סרטון PMR, סרטון סקירת גוף) המשתמשים מוותרים על כל תביעה, דרישה או טענה מכל סוג שהוא כלפי המרכז הירושלמי לבריאות הנפש ומי מפתחיה, כותביה, יוצריה ומשווקיה של האפליקציה. \n' +
        '13. הגבלת חבות. \n' +
        '   1. מקום לנפש החברות המסונפות לה וכן כל נושא משרה, דירקטור, עובד, נותן רישיון, ממחה וסוכן של מי מהן, כמו גם כל מפיץ, לא יהיו חבים, בשום מקרה, בגין כל הפסד כספי, אובדן של רצון טוב, פגיעה במוניטין, נזק עקיף, מופתי, מיוחד, תוצאתי או משני מכל סוג, הנובע מהסכם זה או בקשר עם השימוש או חוסר היכולת להשתמש באפליקציה, אף אם נודע ל-מקום לנפש או לכל מפיץ על האפשרות לגרימת נזק כאמור. בתחומי משפט מסוימים הגבלת או החרגת חבות בגין נזק עקיף או תוצאתי אינו מאושר, ועל כן, ייתכן והגבלות אלו לא יחולו עליך.  \n' +
        '   2. מבלי לגרוע מכלליות האמור בסעיף זה, וככל שמותר על פי דין, אתה מסכים בזאת שהחבות הכוללת אליך בגין כל הנזקים או ההפסדים הנובעים מהסכם זה או בקשר עם השימוש או חוסר היכולת להשתמש באפליקציה לא תעלה, בכל מקרה, על הסכום ששולם לנו על ידך, אם בכלל, בגין השימוש באפליקציה במהלך ששת (6) החודשים הקודמים למועד העלאת הטענה. \n' +
        '14. שיפוי. אתה מסכים בזאת להגן, לשפות ולפטור את מקום לנפש ואת החברות המסונפות לה, את נושאי המשרה, הדירקטורים, העובדים והסוכנים שלה ושל החברות המסונפות לה, כמו גם כל מפיץ, מפני וכנגד כל תביעה, נזק, חובה, עלות והוצאה (לרבות הוצאות שכר טרחה סבירות) של כל צד שלישי, הנובעים מ: (i) שימושך או אי יכולת שימושך באפליקציה; (ii) הפרתך את ההסכם; ו/או (iii) הפרתך את הזכויות של כל צד שלישי, לרבות, בין היתר, כל זכות יוצרים, בעלות או זכות לפרטיות. מבלי לגרוע או לפגוע במי ממחויבויותיך בהתאם לסעיף זה, אנו שומרים על זכותנו (על חשבוננו), לקחת על עצמנו את ההגנה והשליטה על כל נושא הכפוף לשיפוי על ידך, אך איננו מתחייבים לעשות כן. אתה מסכים בזאת לא להתפשר על כל נושא הכפוף לשיפוי מצדך מבלי לקבל את אישורנו המפורש מראש. \n' +
        '15. חוקי יצוא. אתה מסכים בזאת לפעול בהתאם לכל דיני ותקנות הייצוא הרלוונטיים, על מנת לוודא שלא האפליקציה ולא כל מידע טכני הנוגע לה ייצואו או ייצואו מחדש במישרין או בעקיפין תוך הפרה של או באופן שאסור על פי אותם דינים ותקנות.\n' +
        '16. עדכונים ושדרוגים.  אנו עשויים לספק עדכונים או שדרוגים לאפליקציה מעת לעת (כל אחד, "עדכון"), אך אין לנו חובה לעשות כן. כל עדכון יינתן בהתאם למדיניותנו שתהא בתוקף באותה עת. מדיניות זו עשויה לכלול עדכון או שדרוג אוטומטיים, מבלי לספק לך הודעה על כך. אתה מסכים בזאת לעדכון או שדרוג אוטומטיים של האפליקציה, כאמור. התייחסות בהסכם זה לאפליקציה יכלול כל עדכון שלה. הסכם זה יחול על כל עדכון המחליף או מוסיף על האפליקציה המקורית, אלא במידה וצורף לעדכון הסכם מתן רישיון נפרד, אשר יחול על אותו עדכון.\n' +
        '17. משך ההסכם וסיומו. הסכם זה יישאר בתוקפו עד אשר יובא לסיומו על ידינו או על ידך. אנו שומרים על זכותנו לבצע כל אחת מהפעולות הבאות בכל עת: (i) להפסיק או לשנות כל היבט של האפליקציה; ו/או (ii) לסיים את תוקפו של ההסכם ושימושך באפליקציה, עם או ללא כל סיבה, ולא נהא חבים לך או לכל צד שלישי בגין המצויין לעיל. במידה ותתנגד למי מתנאי או הוראות הסכם זה או לכל שינוי עתידי בו, או שלא תהא מרוצה מהאפליקציה בכל אופן, תוכל אך ורק להפסיק מידית את השימוש באפליקציה. עם תפוגת תוקפו של ההסכם, תפסיק להשתמש: (א) באפליקציה, ותשמיד כל עותק של האפליקציה ומסמך הנוגע לה, אשר בבעלותך או תחת שליטתך, וכן (ב) בחשבונך. סעיף 16 זה וכן הסעיפים 5 (זכויות קניין רוחני), 8 (פרטיות), 11 (פטור מאחריות), 12 (הגבלת חבות), 13 (שיפוי), 17 (המחאה) ו-19 (כללי) ישרדו את סיום תוקפו של ההסכם ויישארו בתוקף לאחר מכן. \n' +
        '18. המחאה. אינך יכול להעביר או להמחות הסכם זה ומי מהזכויות והרשיונות המוענקים על פיו, אולם אנו רשאים לעשות כן ללא כל מגבלה או צורך במתן הודעה.  \n' +
        '19. שינויים. אנו שומרים על הזכות לשנות הסכם זה בכל עת, באמצעות מתן הודעה על כך לך, במסגרת האפליקציה ו/או באמצעות פרסום ההסכם המעודכן באפליקציה. שינוי, כאמור, ייכנס לתוקפו בתוך עשרה (10) ימים ממועד מתן הודעה, כאמור, והמשך שימושך באפליקציה לאחר כל שינוי כאמור יהווה הסכמה לו. \n' +
        '20. כללי. חוקי מדינת ישראל יחולו על הסכם זה ומערכת היחסים בינך לבין מקום לנפש ואלה יפורשו בהתאם לחוקים אלה, מבלי להתחשב דינים בכללי ברירת הדין. אתה מסכים בזאת להעניק סמכות שיפוט בלעדית לבתי המשפט הנמצאים בתל אביב יפו, ומוותר על כל טענה בנוגע לתחום השיפוט, המותב, או אי נוחות הפורום כנגד סמכות שיפוט בתי משפט אלה, כאמור. מבלי לגרוע מהאמור לעיל, מקום לנפש שומרת על זכותה לתבוע בכל בית משפט בעל סמכות שיפוט לשם קבלת צו מניעה. הסכם זה וכל הודעה שתפורסם על ידי מקום לנפש בקשר לאפליקציה מהווים את ההסכם הכולל בינך לבין מקום לנפש בכל הנוגע לאפליקציה. בכל מקרה של סתירה בין הסכם זה ומה מהאמור לעיל, תנאי הסכם זה יגברו. שינויים להסכם זה יהיו חסרי תוקף, אלא אם נערכו בכתב ונחתמו על ידי מקום לנפש. במידה ומי מתנאי ההסכם יימצאו בלתי תקפים על ידי בית משפט מוסמך, שאר הסעיפים בהסכם, פרט לאלו הפסולים, יחולו ויישארו בתוקף. ויתור על מי מתנאי ההסכם לא ייחשב כוויתור מתמשך על אותו תנאי או כל תנאי אחר, ואי עמידה של מי מהצדדים על כל זכות מתוקף או תנאי ההסכם לא ייחשב כויתור על אותה זכות או תנאי. אתה מסכים בזאת להגיש תביעה בגין כל עילת תביעה אשר עשויה ',
    },
    tutorial: {
      appHeader: 'מקום לנפש',
      '1': {
        header: 'ברוכים הבאים ליישומון',
        text:
          'היישומון נוצר במטרה לסייע לאנשים שסבלו \n' +
          'מאירוע מורכב (טראומה). \n' +
          'ביישומון מערכת לניטור עצמי, המאפשרת לך לשים לב לשינויים בתחושות ובתפקוד לאורך זמן, ואף להנגיש \n' +
          'את הטיפול למי שזקוק לו. \n' +
          'ביישומון יש כלים דיגיטליים מגוונים להפחתת מתח ובעיות אחרות העולות בעקבות החשיפה לאירוע המורכב.',
      },
      '2': {
        header: 'ביטחון מידע אישי',
        text:
          'חשוב להדגיש שאיננו שומרים מידע אישי אודותיך.כל המידע שמור בתוך המכשיר שלך. \n' +
          'במסך הבא תתבקש לענות על שאלון לניטור עצמי של תחושות רגשיות, פיזיות וקוגנטיביות, העלולות לצוץ בעקבות האירוע המורכב שחווית.עבור כ 90% מהאנשים שיסבלו מבעיות כאלה בעקבות האירוע, ירגישו כיצד הן הולכות ונעלמות בחלוף הזמן, \n' +
          'זהו תהליך טבעי של הגוף לאירוע העוצמתי.',
      },
      '3': {
        header: 'מעקב התקדמות',
        notifications: 'סמן כאן כדי לקבל התראות ועדכונים',
      },
      continue: 'התחל שאלון',
    },
    questionInstructions: {
      header: 'INSTRUCTIONS',
      text: 'This questionnaire asks about problems you may have had after a very stressful experience involving actual or threatened death, serious injury, or sexual violence. It could be something that happened to you directly, something you witnessed, or something you learned happened to a close family member or close friend. Some examples are a serious accident; fire; disaster such as a hurricane, tornado, or earthquake; physical or sexual attack or abuse; war; homicide; or suicide.',
      start: 'Start Answering',
    },
    questionnaire: {
      header: 'מקום לנפש',
      prefix: 'בחודש האחרון עד כמה הפריעו לך:',
      selections: {
        '0': 'כלל לא - 0',
        '1': 'במידה מועטה - 1',
        '2': 'באופן בינוני - 2',
        '3': 'במידה רבה - 3',
        '4': 'באופן קיצוני - 4',
      },
      question: {
        '1': 'זיכרונות טורדניים, חוזרים ולא רצויים של החוויה  הטראומטית?',
        '2': 'חלומות טורדניים, חוזרים של החוויה הטראומטית?',
        '3': 'הרגשה או התנהגות פתאומית כאילו החוויה  הטראומטית ממש שבה ומתרחשת שוב(כאילו את/ה ממש חי/ה אותו שוב)',
        '4': 'הרגשת מצוקה כאשר משהו הזכיר לך את החוויה הטראומטית?',
        '5': 'תגובות גופניות חזקות כאשר משהו הזכיר לך את החוויה הטראומטית (למשל, דפיקות לב, קשיי נשימה, הזעה)?',
        '6': 'הימנעות ממחשבות, רגשות, או תחושות גופניות שהזכירו לך את החוויה הטראומטית, (כלומר גורמים מתוך עצמך ולא גורמים חיצוניים)?',
        '7': 'הימנעות מגורמים חיצוניים שהזכירו לך את החוויה הטראומטית (כמו: אנשים, מקומות, שיחות, חפצים, פעילויות או מצבים)?',
        '8': 'קושי לזכור חלקים חשובים מתוך החוויה הטראומטית?',
        '9': 'אמונות שליליות חזקות על עצמך, או על אנשים אחרים, או על העולם? (למשל, אני אדם רע, משהו ממש לא בסדר איתי, אי אפשר לסמוך על אף אחד, העולם הוא מקום מסוכן לגמרי)',
        '10': 'האשמה של עצמך או של מישהו אחר על מה שקרה באירוע או אחריו?',
        '11': 'רגשות שליליים חזקים כמו פחד או אימה, כעס, אשמה או בושה?',
        '12': 'אובדן עניין בפעילויות מהן נהגת ליהנות?',
        '13': 'תחושה של ריחוק או ניתוק מאנשים אחרים?',
        '14': 'קושי להרגיש רגשות חיוביים (למשל: אינך מסוגל/ת לחוש רגשות אוהבים כלפי הקרובים אליך או הרגשה של קהות רגשית)?',
        '15': 'הרגשת עצבנות או כעסנות או התנהגות תוקפנית?',
        '16': 'לקיחת יותר מידי סיכונים, או עשיית דברים שיכולים להזיק לעצמך?',
        '17': 'תחושה של "דריכות על", עמידה על המשמר או ערנות מוגברת במיוחד?',
        '18': 'הרגשה שאתה נוטה להיבהל בקלות או מאוד קופצני?',
        '19': ' קשיים בריכוז?',
        '20': 'קשיים להירדם או להשארת ישנ/ה?',
      },
      ofText: 'מתוך',
      questionText: 'שאלה',
    },
    results: {
      header: 'תוצאות',
      totalScore: 'ציון סופי',
      lowScore: `הציון בשאלון מראה שאתה חווה רמה נמוכה יחסית של תסמינים האופייניים לאחר אירוע טראומטי. אם בעבר חווית מצוקה משמעותית יותר, דע שזהו תהליך טבעי, וירידת העוצמה של התסמינים היא סימן חיובי.
עדיין, זה טבעי שגם תסמינים ברמה נמוכה יכולים לגרום לתחושת מצוקה. חשוב להבין גם שהשאלון לא בודק תסמיני דיכאון, חרדה ושימוש לרעה בחומרים, שעלולים להופיע גם כן לאחר אירוע טראומטי, ויכולים בעצמם לגרום למצוקה.
למרות שאין תחליף לטיפול מקצועי פנים מול פנים, היישומון הזה יכול לשמש את ללמוד כלים להפחתת התסמינים. הם גם יכולים להיות מוספים על טיפול מקצועי פנים מול פנים.
אם אתה מרגיש שאתה עלול לפגוע בעצמך או באחרים לחץ על כפתור 'ערוצי התמיכה'.  אם אתה מרגיש במצוקה או מתח, אתה מוזמן להשתמש באחד מהכלים האחרים שבתוך היישומון או להיכנס לסולי הבוטית שב'ארגז הכלים'.

מומלץ לבצע הערכה פעם בשבוע, על מנת לעקוב אחר השינויים, ובתקווה לראות שיפור עם הזמן`,
      mediumScore: `הציון בשאלון מראה שאתה חווה רמה בינונית של תסמינים האופייניים לאחר אירוע טראומטי. התחושות שאתה חווה הם תגובה נורמלית לאירוע טראומטי ואנשים רבים חווים אותם מספר שבועות עד מספר חודשים מהאירוע. לעומת זאת, אם ציון זה גבוה מציונים אחרים שקיבלת בשאלונים קודמים סימן שיש החמרה מסוימת, וכדאי לשים אליה לב.
במידה ואתה מרגיש שהירידה בתפקוד בקרב המשפחה, הלימודים ו/או העבודה נמשכת, או שאתה חווה בעיות נוספות שהשאלון לא בודק, כמו חרדה, דיכאון או שימוש לרעה בחומרים, כדאי לפנות לטיפול. למידע לגבי גישה לאפשרויות טיפול מגוונות לחץ על כפתור 'ערוצי התמיכה'.
למרות שאין תחליף לטיפול מקצועי פנים מול פנים, היישומון הזה יכול לשמש אותך ללמידת כלים להפחתת התסמינים. תמצא אותם בכפתור 'ארגז הכלים'. הם גם יכולים להיות מוספים על טיפול מקצועי פנים מול פנים.
אם אתה מרגיש שאתה עלול לפגוע בעצמך או באחרים לחץ על כפתור 'ערוצי התמיכה'.  אם אתה מרגיש במצוקה או מתח, אתה מוזמן להשתמש באחד מהכלים האחרים שבתוך היישומון או להיכנס לסולי הבוטית שב'ארגז הכלים'.

מומלץ לבצע הערכה פעם בשבוע, על מנת לעקוב אחר השינויים, ובתקווה לראות שיפור עם הזמן.`,
      highScore: `הציון בשאלון מראה שאתה חווה רמה גבוהה של תסמינים האופייניים לאחר אירוע טראומטי. התחושות שאתה חווה הם תגובה נורמלית לאירוע טראומטי ואנשים רבים חווים אותם מספר שבועות עד מספר חודשים מהאירוע. לעומת זאת, אם ציון זה גבוה מציונים אחרים שקיבלת בשאלונים קודמים סימן שיש החמרה מסוימת, וכדאי לשים אליה לב.
במידה ואתה מרגיש שהירידה בתפקוד בקרב המשפחה, הלימודים ו/או העבודה נמשכת, או שאתה חווה בעיות נוספות שהשאלון לא בודק, כמו חרדה, דיכאון או שימוש לרעה בחומרים, כדאי לפנות לטיפול. למידע לגבי גישה לאפשרויות טיפול מגוונות לחץ על כפתור 'ערוצי התמיכה'.
למרות שאין תחליף לטיפול מקצועי פנים מול פנים, היישומון הזה יכול לשמש אותך ללמידת כלים להפחתת התסמינים. תמצא אותם בכפתור 'ארגז הכלים'. הם גם יכולים להיות מוספים על טיפול מקצועי פנים מול פנים.
אם אתה מרגיש שאתה עלול לפגוע בעצמך או באחרים לחץ על כפתור 'ערוצי התמיכה'.  אם אתה מרגיש במצוקה או מתח, אתה מוזמן להשתמש באחד מהכלים האחרים שבתוך היישומון או להיכנס לסולי הבוטית שב'ארגז הכלים'.
מומלץ לבצע הערכה פעם בשבוע, על מנת לעקוב אחר השינויים, ובתקווה לראות שיפור עם הזמן.`,
      lowScoreAfterMultiAttempts: `חדשות טובות! במעקב של 4 שאלונים אפשר לראות שאתה חווה רמה נמוכה של תסמינים לאחר הטראומה. הציון המשוקלל שלך מבוסס על הממוצע של 4 השאלונים שמילאת והשינויים בין שאלון לשאלון. בתקווה שתמשיך לחוות עוצמה מינימלית של תסמינים, כדאי שתנטר את עצמך אחת לכמה שבועות, דרך היישומון או במפגש עם מטפל. הכלים שבאפליקציה עדיין פתוחים בפניך ואתה מוזמן להשתמש בהם כל עת שאתה מרגיש קושי מסוים.
עדיין, זה טבעי שגם תסמינים ברמה נמוכה יכולים לגרום לתחושת מצוקה. חשוב להבין גם שהשאלון לא בודק תסמיני דיכאון, חרדה ושימוש לרעה בחומרים, שעלולים להופיע גם כן לאחר אירוע טראומטי, ויכולים בעצמם לגרום למצוקה.
למרות שאין תחליף לטיפול מקצועי פנים מול פנים, היישומון הזה יכול לשמש את ללמוד כלים להפחתת התסמינים. הם גם יכולים להיות מוספים על טיפול מקצועי פנים מול פנים.
אם אתה מרגיש שאתה עלול לפגוע בעצמך או באחרים לחץ על כפתור 'ערוצי התמיכה'.  אם אתה מרגיש במצוקה או מתח, אתה מוזמן להשתמש באחד מהכלים האחרים שבתוך היישומון או להיכנס לסולי הבוטית שב'ארגז הכלים'.`,
      mediumScoreAfterMultiAttempts: `הציון המשוקלל ב 4 השאלונים, המבוסס על ממוצע הציונים והשינויים בין שאלון לשאלון, מראה שאתה חווה רמה בינונית של תסמינים האופייניים לאחר אירוע טראומטי. בשלב זה בו האירוע הטראומטי מעט רחוק יותר, אך התסמינים עדיין נוכחים בחייך, כדאי לפנות לטיפול. ייתכן גם שלתסמינים המצוינים בשאלון מתווספים דיכאון, חרדה ושימוש לרעה בסמים, מה שמחזק את המלצתינו לפנות לטיפול המתאים עבורך. בכפתור 'ערוצי התמיכה' תמצא מגוון אפשרויות טיפוליות, כולל קביעת מפגשים פנים מול פנים, קביעת מפגשים טלפונים, שיחת וידאו ועוד.
למרות שאין תחליף לטיפול מקצועי פנים מול פנים, היישומון הזה יכול לשמש אותך ללמידת כלים להפחתת התסמינים. תמצא אותם בכפתור 'ארגז הכלים'. הם גם יכולים להיות מוספים על טיפול מקצועי פנים מול פנים.
אם אתה מרגיש שאתה עלול לפגוע בעצמך או באחרים לחץ על כפתור 'ערוצי התמיכה', שם תמצא המספרים למצוקה מיידית.  אם אתה מרגיש במצוקה פחות קשה ומתח, אתה מוזמן להשתמש באחד מהכלים האחרים שבתוך היישומון או להיכנס לסולי הבוטית שב'ארגז הכלים'.
מומלץ לבצע הערכה פעם בשבוע, על מנת לעקוב אחר השינויים, ובתקווה לראות שיפור עם הזמן.`,
      highScoreAfterMultiAttempts: `הציון המשוקלל ב 4 השאלונים, המבוסס על ממוצע הציונים והשינויים בין שאלון לשאלון, מראה שאתה חווה רמה גבוהה של תסמינים האופייניים לאחר אירוע טראומטי. במידה ועדיין לא עשית זאת, אנו ממליצים לך לגשת לטיפול.  בכפתור 'ערוצי התמיכה' תמצא מגוון אפשרויות טיפוליות, כולל קביעת מפגשים פנים מול פנים, קביעת מפגשים טלפונים, שיחות וידאו ועוד. אל תישאר עם זה לבד. לתחושות הקשות ניתן לעזור, ואנשים רבים מצליחים לחזור לתפקוד בעזרת הטיפול המתאים.
למרות שאין תחליף לטיפול מקצועי פנים מול פנים, היישומון הזה יכול לשמש אותך ללמידת כלים להפחתת התסמינים. תמצא אותם בכפתור 'ארגז הכלים'. הם גם יכולים להיות מוספים על טיפול מקצועי פנים מול פנים.
אם אתה מרגיש שאתה עלול לפגוע בעצמך או באחרים לחץ על כפתור 'ערוצי התמיכה'.  אם אתה מרגיש במצוקה או מתח, אתה מוזמן להשתמש באחד מהכלים האחרים שבתוך היישומון או להיכנס לסולי הבוטית שב'ארגז הכלים'.
מומלץ לבצע הערכה פעם בשבוע, על מנת לעקוב אחר השינויים, ובתקווה לראות שיפור עם הזמן.`,
      supportButton: 'ערוצי תמיכה',
      toolboxButton: 'ארגז כלים',
    },
    toolbox: {
      header: 'ארגז כלים',
      toolsHelpTitle:
        'הכלים הבאים יוכלו לסייע לך להתמודדות עם ביטויים שונים, גופניים ורגשיים, המופיעים לאחר האירוע הטראומטי.',
      relaxMuscleTitle: 'הרפיית שרירים מתקדמת',
      relaxMuscleText:
        'הדרכה מוקלטת בעברית של תרגיל הרפיית שרירים מתקדמת. אתה תעבור מקבוצת שרירים גדולה אחת לאחרת, תכווץ ותשחרר אותן לפי הסדר. ההדרכה, בהנחיית ד"ר דניאל בן אליעזר, עורכת כ 10 דקות',
      relaxMuscleButton: 'קישור להדרכה',
      relaxBodyTitle: 'סקירת גוף',
      relaxBodyText:
        'זוהי הדרכה מוקלטת בעברית בתרגיל מיינדפולנס מסוג סקירת גוף. המטרה היא לפתח קשיבות לתחושות שעולות מהגוף וללמוד לחיות איתם בשלום. במהלך ההדרכה יהיו רגעי שקט כדי שתוכל להתרכז בתחושות הגופניות. ההדרכה, בהנחיית עמוס אבישר עורכת כ 10 דקות',
      relaxBodyButton: 'קישור להדרכה',
      botTitle: 'סולי',
      botText:
        'סולי הבוטית הינה בוט חינמי באפליקציית וואטסאפ היכולה לסייע בהפחתת מתח, חרדה ובעיות נוספות.',
      botButton: 'קישור לווטסאפ',
    },
    getSupport: {
      header: 'ערוצי תמיכה',
      crisisButton: `מענה בחירום`,
      findProCareButton: `מענה בשגרה`,
      answerAgainButton: `מלא שאלון נוסף`,
      toolBox: 'ארגז כלים',
    },
    crisisResources: {
      header: 'מענה בחירום',
      eranTitle: `אם הנך ברמת מצוקה גבוהה חייג למוקדי הטלפונים הזמינים 24/7:`,
      eranButton: `ער״ן 1201`,
      suicideAndCrisisTitle: `קו חיים התאבדות ומשבר:`,
      ntlButton: `נט״ל 1800-363-363`,
      hamalLevEhadButton: `חמ״ל לב אחד 072-2133281`,
      emergencyCentersTitle: `מוקדי קופת חולים בחירום:`,
      macabiButton: `מכבי 3555* (זמינים 8:00 - 24:00)`,
      clalitButton: `כללית 03-7472010`,
      meuhedetButton: `מאוחדת - 3833*`,
      leumitButton: `לאומית 507*`,
    },
    findProCare: {
      header: 'מענה בשגרה',
      portalsTitle: `בפורטלים הבאים תוכל למצוא מענים מגוונים וחינמיים, כולל קביעת מפגשים פנים מול פנים, שיכולים להתאים לך`,
      nafshiButton: `נפשי - תמיכה נפשית בישראל`,
      otefOrefButton: `תומכים בעורף`,
      healthFundsTitle: `קופות החולים מעניקות 3 מפגשים טלפוניים ללא עלות עם איש מקצוע בתחום בריאות הנפש. ניתן לתאם באותם מספרי של מוקדי החירום הנ"ל. בקישור הבא ניתן למלא טופס לבקשת טיפול ע"י אנשי טיפול מוסמכי משרד הבריאות. 
(חוזרים תוך 24 שעות מהגשת הטופס)`,
      fillFormButton: `מלא טופס`,
    },
  },
  ru: {
    userAgreement: {
      pageTitle: 'הסכם משתמש קצה',
      acceptButton: 'אישור',
      header: 'הסכם מתן רישיון משתמש קצה ביישומון',
      appName: 'מקום לנפש',
      text:
        'אנא קיראו בעיון רב את התנאים הבאים לפני התקנת, רישום ו/או שימוש באפליקציה.\n' +
        '\n' +
        'באמצעות בחירה באפשרות "מסכים", "כן" או בשל התקנה ו/או שימוש באפליקציית התוכנה הסלולרית (ביחד עם כל התוכן הכלול בה, שירותיה וזכויות הקניין הרוחני הגלומות בה, "האפליקציה"), את/ה מכיר/ה ומאשר/ת בזאת להתקשר בזאת בחוזה משפטי מחייב עם מקום לנפש, כי קראת, הבנת והסכמת לעמוד בכל התנאים המפורטים מטה, במסגרת הסכם מתן רישיון משתמש קצה זה ("ההסכם"). הינך מוותר בזאת על כל הזכויות העומדות לך לדרוש לקבל חתימה מקורית (שאינה אלקטרונית) או לקבל ולשמור תיעוד שאינו אלקטרוני, ככל שוויתור זה אינו אסור על פי דין. אם אינך מסכים לעמוד בכל התנאים המפורטים מטה, אנא, אל תוריד, תתקין או תשתמש באפליקציה. אתה מאשר ומתחייב בזאת שאתה (i) בן 18 שנה לפחות או (ii) בין הגילאים 13 ל-18 וסקרת את תנאי ההסכם עם מי מהוריך או האפוטרופוס שלך, על מנת לוודא שהן אתה והן הורך או האפוטרופוס שלך הבנתם את התנאים והסכמתם להם. אם אינך עונה למי מדרישות הגיל, כאמור, או אם אינך מסכים לעמוד בכל התנאים המפורטים מטה, אנא, אל תבחר להסכים להסכם זה או להוריד, לגשת או להשתמש באפליקציה.\n' +
        '1. תיאור האפליקציה. האפליקציה הינה ממשק מופשט לטלפונים חכמים מבוססי אנדרואיד ואפל, ומיועדת לאנשים שעברו אירוע טראומטי. האפליקציה מאפשרת ניטור עצמי של תסמינים אופייניים לאחר הטראומה ומנגישה כלי טיפול דיגיטליים שיכולים לסייע בהפחתת התסמינים, ובערוצי תמיכה בהתאם לניטור.\n' +
        '2. רישיון. בכפוף לתנאים והוראות הסכם זה, מקום לנפש מעניקה לך בזאת רישיון פרטי, בר-ביטול, שאינו ייחודי, אינו מאפשר מתן רישיון לאחר ואינו ניתן להמחאה או העברה ("רישיון"), בכדי: (i) להוריד, להתקין ולהשתמש באפליקציה באמצעות טלפון סלולרי, מכשיר או טאבלט בהם הותקנה האפליקציה מבעוד מועד, לאחר שהשגת אותה מספק השירותים הסלולריים שלך, המספק למכשירך שירותי גישה לאינטרנט ("ספק"), או, אם רכשת את האפליקציה מכל פלטפורמה של צד שלישי או נותן שירותים אחר למכשירים סלולריים ("מפיץ"), על גבי טלפון סלולרי, מכשיר או טאבלט שבבעלותך או בשליטתך (בכל מקרה, "מכשיר"); וכן (ii) לגשת ולהשתמש באפליקציה על המכשיר בהתאם להסכם זה.\n' +
        '3. מגבלות הרישיון. הינך מסכים בזאת לא לבצע את הפעולות הבאות בעצמך ו/או לאפשר לכל צד שלישי: (i) להעניק רישיון לאחר, להפיץ מחדש, למכור, להחכיר, להשאיל או להשכיר את האפליקציה; (ii) אלא אם מאושר במפורש בהסכם, לאפשר גישה לאפליקציה באמצעות רשת, כך שיתאפשר בה שימוש מקביל על מספר מכשירים באותה עת; (iii) אלא אם מאושר במפורש בהסכם זה או על פי דין, לפרק, להנדס לאחור, לפרק את הקמפול, לפענח את הקידוד או לנסות לחלץ את קוד המקור של האפליקציה; (iv) להעתיק (אלא למטרות גיבוי), לשנות, לשפר או ליצור כל יצירה נגזרת של האפליקציה, או כל חלק ממנה; (v) לעקוף, לנטרל או להתערב בכל אופן אחר במאפייני ההגנה והאבטחה של האפליקציה, במאפיינים המונעים או מגבילים שימוש או העתקה של כל תוכן, או שמגבילים את השימוש באפליקציה; (vi) להסיר, לשנות, או להתערב בכל אופן אחר במי מהודעות או זיהוי הבעלות באפליקציה, לרבות הודעות בקשר לזכויות יוצרים, סימני מסחר, פטנטים או כל הודעה אחרת, הנכללת, מוצגת או ניתנת במסגרת האפליקציה; (vii) לעשות שימוש בתקשורת של המערכות הנכללות באפליקציה על מנת לשלוח הודעות פרסומת לא מאושרות ו/או שלא נתבקשו; (viii) לעשות שימוש בשמה של מקום לנפש, בסמלילה או סימני המסחר שלה מבלי לקבל את אישורנו בכתב ומראש; ו/או (ix) להשתמש באפליקציה בכל אופן המפר מי מהחוקים, התקנות או הרגולציה הרלוונטיים, או לכל תכלית בלתי חוקית, מזיקה, בלתי אחראית או בלתי נאותה, או באופן המפר את הוראות ההסכם.\n' +
        '4. שימוש באפליקציה ברכב. אם הינך משתמש באפליקציה ברכב, הרי שאתה מסכים בזאת: (i) לציית לכל חוקי התנועה הרלוונטיים; וכן (ii) במידה והינך הנהג, לא לעשות שימוש באפליקציה אלא אם הרכב דומם ומוחנה כחוק. \n' +
        '5. זכויות בקניין רוחני.\n' +
        '   1. האפליקציה ניתנת לך ברישיון, ולא נמכרת לך, בהתאם להסכם. הינך מאשר בזאת ש- מקום לנפש ומי מנותני הרישיון שלה שומרים על בעלותם, הזכויות הנובעות מבעלותם וכל זכויות הקניין הרוחני (כמוגדר מטה) באפליקציה ובכל הנוגע לה (לרבות התוכנה שלה). אנו שומרים על  כל זכות באפליקציה שאינה מוענקת לך במפורש במסמך זה.\n' +
        '"זכויות קניין רוחני" משמען כל זכות, בעלות ואינטרס בכל סוד מסחרי, פטנט, זכות יוצרים, סימן שירותים, סימן מסחר, ידע או כל זכות קניין רוחני דומה, לרבות כל הזכויות המוסריות, הזכות לפרטיות, פרסום וכל זכות דומה מכל סוג, בהתאם לכל חוק או רגולציה של כל רשות שלטונית, רגולטיבית או משפטית, בין אם מחוץ לארץ או מקומית. \n' +
        '   2. תוכן האפליקציה ניתן לך כמות שהוא (“AS IS”) לשימושך הפרטי בלבד וכן, אלא אם מאושר במפורש בהסכם, אינו ניתן לשימוש, העתקה, הפצה, שידור, העברה באמצעים אלקטרוניים, הצגה, מכירה, מתן רישיון, פירוק הקמפול, או לניצול לכל תכלית שהיא, ללא הסכמה מראש ובכתב של מקום לנפש. בעת הורדה או הדפסת עותק של התוכן, עליך לשמור בו על כל הודעות זכויות היוצרים ושאר ההודעות אודות הבעלות, הגלומות בו. סימני המסחר, הסמלילים וכל הסימנים האחרים הם בבעלות הבלעדית של מקום לנפש ועמיתיה. כל סימן מסחר, סימן שירות וסמליל אחר הנכללים באפליקציה הם בבעלות הבעלים של כל אחד מהם.   \n' +
        '6. גילוי.  אנו שומרים על הזכות לגשת, לקרוא, לשמור ולגלות כל מידע שהשגנו בקשר עם האפליקציה, אשר אנו מאמינים, באופן סביר, כי חיוני בכדי: (i) לפעול בהתאם ולציית לכל חוק, רגולציה, הליך משפטי, צו או בקשה שלטונית רלוונטים, (ii) לאכוף תנאי הסכם זה, לרבות חקירה של הפרות פוטנציאליות של מי מהם, (iii) לאתר, למנוע או לטפל בכל אופן אחר בהונאה או כל סוגיה טכנית או סוגיה של הגנה, (iv) לענות לכל בקשות התמיכה שלך, או (v) להגן על הזכויות, הבעלות או הביטחון של מקום לנפש, המשתמשים בשירותיה או הציבור. \n' +
        '7. תשלומים.\n' +
        '   1. הרישיון המוענק לך בזאת מוענק בחינם. \n' +
        '   2. שים לב כי על מנת להשתמש באפליקציה, ייתכן כי תזדקק לחיבור או גישה לאינטרנט. אתה מסכים בזאת להיות החייב הבלעדי לתשלום כל תשלום, באם יידרש על ידי כל צד שלישי שהינו ספק שירותים או ספק האינטרנט שלך, בגין גישתך או חיבורך לאינטרנט. \n' +
        '8. פרטיות. אנו לא אוספים מידע מזהה אודותיך. כל השימוש באפליקציה נעשה באנונימיות. ייתכן ונאסוף מידע על אופי השימוש במטרה לשפר את האפליקציה עבור המשתמשים, אך מבלי שנדע מי הוא המשתמש. בכל חלק מהמידע שייתכן ונאסוף או נשיג בקשר עם האפליקציה, הינך מאשר לנו בזאת לעשות כן. אנא שים לב כי ייתכן ומידע פרטי ומידע אחר מסוים שתספק בקשר עם שימושך באפליקציה יישמר על מכשירך (אפילו אם המידע לא נאסף על ידינו). אתה האחראי הבלעדי לתחזוקת אמצעי ההגנה של מכשירך מפני גישה בלתי מורשית.  \n' +
        '9. תוכנת צד שלישי. חלקים מהאפליקציה עשויים לכלול תוכנה של צד שלישי, הכפופה לתנאי שימוש של אותו צד שלישי ("תנאי צד שלישי"). רשימה של כל קוד פתוח של תוכנת צד שלישי ותנאי צד שלישי רלוונטיים מופיעים בכתובת https://www.youtube.com/intl/iw/howyoutubeworks/policies/community-guidelines/, בכל מקרה של סתירה בין תנאי צד שלישי לתנאי הסכם זה, הרי שתנאי הצד השלישי יגברו בקשר עם תוכנת אותו צד שלישי. \n' +
        '10. תיאור מידע. אנו מנסים להיות מדויקים ככל האפשר. עם זאת, איננו יכולים ואיננו מתחייבים כי המידע המוצג באפליקציה הוא מדויק, שלם, בר-סמכא, עכשווי או חף משגיאות. אנו שומרים על הזכות לבצע שינויים בתוכן, בקשר אליו, או לכל חלק ממנו, מבלי להודיע על כך מראש או לאחר שינוי, כאמור. \n' +
        '11. פטור מאחריות. האפליקציה מסופקת "כמות שהיא" ו"על בסיס זמינות" ("AS IS" and "AS AVAILABLE"), ללא כל אחריות מכל סוג שהוא, לרבות, בין היתר, מצגים ואחריות בקשר לסחירות, תאימות לתכלית מסוימת, בעלות ואי-הפרה, וכן אלו הנובעים בקשר או עקב מסחר. איננו מספקים כל אחריות לכך שהאפליקציה תהא חפה מפגמים, נקייה מווירוסים או כל קוד מזיק אחר, או שנתקן את הפגמים בה. אתה מסכים בזאת שלא אנו ולא המפיץ נימצא אחראים לכל השלכות העלולות להיגרם עקב תקלות טכניות, לרבות, מבלי לגרוע מכלליות האמור לעיל, בקשר עם האינטרנט (כגון חיבור איטי, עומס על תעבורה או תעבורת יתר של שרתינו או שרתים אחרים) או כל ספק אינטרנט או תקשורת. \n' +
        '12. פטור מאחריות רפואית. המידע, העצות, הכלים הדיגיטליים, ההמלצות, או הכלים החיצוניים (בוט וואטסאפ "סולי", בוט טלגרם, סרטון PMR, סרטון סקירת גוף) הניתנים באפליקציית מקום לנפש, מהווים מידע כללי. הם אינם מהווים תחליף לבדיקה או לייעוץ אצל רופאים, ואינם בגדר "אבחנה רפואית", "חוות דעת רפואית", "המלצה לטיפול רפואי" או "תחליף לטיפול רפואי". בכל מקרה שבו קיימת בעיה רפואית, או מתעורר חשד לקיומה, יש להזמין ביקור אצל רופא או רופאת המשפחה, או רופאים במקצועות אחרים, ולהיבדק. בכל מקרה של בעיה דחופה, מקרה חירום או מצב מצוקה (גופני או נפשי) – יש לפנות לקבלת טיפול רפואי אצל הרופא או הרופאה המטפלים, לחדר המיון של בית החולים הקרוב, או למגן דוד אדום (באמצעות מספר החירום 101, בכל הארץ). בעצם השימוש באפליקציה, או באחד מהכלים החיצוניים (בוט וואטסאפ "סולי", בוט טלגרם, סרטון PMR, סרטון סקירת גוף) המשתמשים מוותרים על כל תביעה, דרישה או טענה מכל סוג שהוא כלפי המרכז הירושלמי לבריאות הנפש ומי מפתחיה, כותביה, יוצריה ומשווקיה של האפליקציה. \n' +
        '13. הגבלת חבות. \n' +
        '   1. מקום לנפש החברות המסונפות לה וכן כל נושא משרה, דירקטור, עובד, נותן רישיון, ממחה וסוכן של מי מהן, כמו גם כל מפיץ, לא יהיו חבים, בשום מקרה, בגין כל הפסד כספי, אובדן של רצון טוב, פגיעה במוניטין, נזק עקיף, מופתי, מיוחד, תוצאתי או משני מכל סוג, הנובע מהסכם זה או בקשר עם השימוש או חוסר היכולת להשתמש באפליקציה, אף אם נודע ל-מקום לנפש או לכל מפיץ על האפשרות לגרימת נזק כאמור. בתחומי משפט מסוימים הגבלת או החרגת חבות בגין נזק עקיף או תוצאתי אינו מאושר, ועל כן, ייתכן והגבלות אלו לא יחולו עליך.  \n' +
        '   2. מבלי לגרוע מכלליות האמור בסעיף זה, וככל שמותר על פי דין, אתה מסכים בזאת שהחבות הכוללת אליך בגין כל הנזקים או ההפסדים הנובעים מהסכם זה או בקשר עם השימוש או חוסר היכולת להשתמש באפליקציה לא תעלה, בכל מקרה, על הסכום ששולם לנו על ידך, אם בכלל, בגין השימוש באפליקציה במהלך ששת (6) החודשים הקודמים למועד העלאת הטענה. \n' +
        '14. שיפוי. אתה מסכים בזאת להגן, לשפות ולפטור את מקום לנפש ואת החברות המסונפות לה, את נושאי המשרה, הדירקטורים, העובדים והסוכנים שלה ושל החברות המסונפות לה, כמו גם כל מפיץ, מפני וכנגד כל תביעה, נזק, חובה, עלות והוצאה (לרבות הוצאות שכר טרחה סבירות) של כל צד שלישי, הנובעים מ: (i) שימושך או אי יכולת שימושך באפליקציה; (ii) הפרתך את ההסכם; ו/או (iii) הפרתך את הזכויות של כל צד שלישי, לרבות, בין היתר, כל זכות יוצרים, בעלות או זכות לפרטיות. מבלי לגרוע או לפגוע במי ממחויבויותיך בהתאם לסעיף זה, אנו שומרים על זכותנו (על חשבוננו), לקחת על עצמנו את ההגנה והשליטה על כל נושא הכפוף לשיפוי על ידך, אך איננו מתחייבים לעשות כן. אתה מסכים בזאת לא להתפשר על כל נושא הכפוף לשיפוי מצדך מבלי לקבל את אישורנו המפורש מראש. \n' +
        '15. חוקי יצוא. אתה מסכים בזאת לפעול בהתאם לכל דיני ותקנות הייצוא הרלוונטיים, על מנת לוודא שלא האפליקציה ולא כל מידע טכני הנוגע לה ייצואו או ייצואו מחדש במישרין או בעקיפין תוך הפרה של או באופן שאסור על פי אותם דינים ותקנות.\n' +
        '16. עדכונים ושדרוגים.  אנו עשויים לספק עדכונים או שדרוגים לאפליקציה מעת לעת (כל אחד, "עדכון"), אך אין לנו חובה לעשות כן. כל עדכון יינתן בהתאם למדיניותנו שתהא בתוקף באותה עת. מדיניות זו עשויה לכלול עדכון או שדרוג אוטומטיים, מבלי לספק לך הודעה על כך. אתה מסכים בזאת לעדכון או שדרוג אוטומטיים של האפליקציה, כאמור. התייחסות בהסכם זה לאפליקציה יכלול כל עדכון שלה. הסכם זה יחול על כל עדכון המחליף או מוסיף על האפליקציה המקורית, אלא במידה וצורף לעדכון הסכם מתן רישיון נפרד, אשר יחול על אותו עדכון.\n' +
        '17. משך ההסכם וסיומו. הסכם זה יישאר בתוקפו עד אשר יובא לסיומו על ידינו או על ידך. אנו שומרים על זכותנו לבצע כל אחת מהפעולות הבאות בכל עת: (i) להפסיק או לשנות כל היבט של האפליקציה; ו/או (ii) לסיים את תוקפו של ההסכם ושימושך באפליקציה, עם או ללא כל סיבה, ולא נהא חבים לך או לכל צד שלישי בגין המצויין לעיל. במידה ותתנגד למי מתנאי או הוראות הסכם זה או לכל שינוי עתידי בו, או שלא תהא מרוצה מהאפליקציה בכל אופן, תוכל אך ורק להפסיק מידית את השימוש באפליקציה. עם תפוגת תוקפו של ההסכם, תפסיק להשתמש: (א) באפליקציה, ותשמיד כל עותק של האפליקציה ומסמך הנוגע לה, אשר בבעלותך או תחת שליטתך, וכן (ב) בחשבונך. סעיף 16 זה וכן הסעיפים 5 (זכויות קניין רוחני), 8 (פרטיות), 11 (פטור מאחריות), 12 (הגבלת חבות), 13 (שיפוי), 17 (המחאה) ו-19 (כללי) ישרדו את סיום תוקפו של ההסכם ויישארו בתוקף לאחר מכן. \n' +
        '18. המחאה. אינך יכול להעביר או להמחות הסכם זה ומי מהזכויות והרשיונות המוענקים על פיו, אולם אנו רשאים לעשות כן ללא כל מגבלה או צורך במתן הודעה.  \n' +
        '19. שינויים. אנו שומרים על הזכות לשנות הסכם זה בכל עת, באמצעות מתן הודעה על כך לך, במסגרת האפליקציה ו/או באמצעות פרסום ההסכם המעודכן באפליקציה. שינוי, כאמור, ייכנס לתוקפו בתוך עשרה (10) ימים ממועד מתן הודעה, כאמור, והמשך שימושך באפליקציה לאחר כל שינוי כאמור יהווה הסכמה לו. \n' +
        '20. כללי. חוקי מדינת ישראל יחולו על הסכם זה ומערכת היחסים בינך לבין מקום לנפש ואלה יפורשו בהתאם לחוקים אלה, מבלי להתחשב דינים בכללי ברירת הדין. אתה מסכים בזאת להעניק סמכות שיפוט בלעדית לבתי המשפט הנמצאים בתל אביב יפו, ומוותר על כל טענה בנוגע לתחום השיפוט, המותב, או אי נוחות הפורום כנגד סמכות שיפוט בתי משפט אלה, כאמור. מבלי לגרוע מהאמור לעיל, מקום לנפש שומרת על זכותה לתבוע בכל בית משפט בעל סמכות שיפוט לשם קבלת צו מניעה. הסכם זה וכל הודעה שתפורסם על ידי מקום לנפש בקשר לאפליקציה מהווים את ההסכם הכולל בינך לבין מקום לנפש בכל הנוגע לאפליקציה. בכל מקרה של סתירה בין הסכם זה ומה מהאמור לעיל, תנאי הסכם זה יגברו. שינויים להסכם זה יהיו חסרי תוקף, אלא אם נערכו בכתב ונחתמו על ידי מקום לנפש. במידה ומי מתנאי ההסכם יימצאו בלתי תקפים על ידי בית משפט מוסמך, שאר הסעיפים בהסכם, פרט לאלו הפסולים, יחולו ויישארו בתוקף. ויתור על מי מתנאי ההסכם לא ייחשב כוויתור מתמשך על אותו תנאי או כל תנאי אחר, ואי עמידה של מי מהצדדים על כל זכות מתוקף או תנאי ההסכם לא ייחשב כויתור על אותה זכות או תנאי. אתה מסכים בזאת להגיש תביעה בגין כל עילת תביעה אשר עשויה ',
    },
    tutorial: {
      appHeader: 'מקום לנפש',
      '1': {
        header: 'ברוכים הבאים ליישומון',
        text:
          'היישומון נוצר במטרה לסייע לאנשים שסבלו \n' +
          'מאירוע מורכב (טראומה). \n' +
          'ביישומון מערכת לניטור עצמי, המאפשרת לך לשים לב לשינויים בתחושות ובתפקוד לאורך זמן, ואף להנגיש \n' +
          'את הטיפול למי שזקוק לו. \n' +
          'ביישומון יש כלים דיגיטליים מגוונים להפחתת מתח ובעיות אחרות העולות בעקבות החשיפה לאירוע המורכב.',
      },
      '2': {
        header: 'ביטחון מידע אישי',
        text:
          'חשוב להדגיש שאיננו שומרים מידע אישי אודותיך.כל המידע שמור בתוך המכשיר שלך. \n' +
          'במסך הבא תתבקש לענות על שאלון לניטור עצמי של תחושות רגשיות, פיזיות וקוגנטיביות, העלולות לצוץ בעקבות האירוע המורכב שחווית.עבור כ 90% מהאנשים שיסבלו מבעיות כאלה בעקבות האירוע, ירגישו כיצד הן הולכות ונעלמות בחלוף הזמן, \n' +
          'זהו תהליך טבעי של הגוף לאירוע העוצמתי.',
      },
      '3': {
        header: 'מעקב התקדמות',
        notifications: 'סמן כאן כדי לקבל התראות ועדכונים',
      },
      continue: 'התחל שאלון',
    },
    questionInstructions: {
      header: 'INSTRUCTIONS',
      text: 'This questionnaire asks about problems you may have had after a very stressful experience involving actual or threatened death, serious injury, or sexual violence. It could be something that happened to you directly, something you witnessed, or something you learned happened to a close family member or close friend. Some examples are a serious accident; fire; disaster such as a hurricane, tornado, or earthquake; physical or sexual attack or abuse; war; homicide; or suicide.',
      start: 'Start Answering',
    },
    questionnaire: {
      header: 'מקום לנפש',
      prefix: 'Как часто Вас беспокоили за последний месяц:',
      selections: {
        '0': 'Никогда - 0',
        '1': 'Редко - 1',
        '2': 'Умеренно - 2',
        '3': 'Часто - 3',
        '4': 'Очень часто - 4',
      },
      question: {
        '1': 'Повторяющиеся, тревожные и нежелательные воспоминания о пережитом стрессе?',
        '2': 'Повторяющиеся, тревожные сны о пережитом стрессе?',
        '3': 'Резкое чувство или поведение такое, как, если бы пережитый стресс произошел снова (если бы Вы действительно вернулись назад и пережили его снова)?',
        '4': 'Чувство сильного расстройства, при напоминании о пережитом стрессе?',
        '5': 'Сильные физические реакции при напоминании о пережитом стрессе? (например, учащенное сердцебиение, затрудненное дыхание, потливость)?',
        '6': 'Избегание воспоминаний, мыслей или чувств, связанных с пережитым стрессом?',
        '7': 'Избегание внешних напоминаний о пережитом стрессе (например, людей, мест, диалогов, действий, предметов или ситуаций)Сильн?',
        '8': 'Трудности, связанные с восстановлением в памяти важных компонентов пережитого стресса?',
        '9': 'Сильные отрицательные убеждения о себе, других людях или мире (например, наличие таких мыслей как: я плохой, со мной что-то не так, никому нельзя доверять, мир очень опасный)?',
        '10': 'Обвинение себя или других в пережитом стрессе или в том, что произошло после?',
        '11': 'Наличие сильных отрицательных чувств, таких, как, например, страх, ужас, гнев, вина или стыд?',
        '12': 'Потеря интереса к работе, которой Вы наслаждались?',
        '13': 'Чувство отстраненности от других людей?',
        '14': 'Трудности, связанные с переживанием положительных чувств (например, неспособность чувствовать радость или любовь к близким людям)?',
        '15': 'Раздражительное поведение, вспышки гнева или агрессивные действия?',
        '16': 'Принятие на себя слишком больших рисков или выполнение действий, которые могут принести Вам вред?',
        '17': 'Состояние "супер бдительности" или настороженности или повышенной бдительности?',
        '18': 'Чувство нервозности или страха?',
        '19': 'Having difficulty concentrating?',
        '20': 'Проблемы с засыпанием или сном?',
      },
      ofText: 'מתוך',
      questionText: 'שאלה',
    },
    results: {
      header: 'תוצאות',
      totalScore: 'ציון סופי',
      lowScore: `הציון בשאלון מראה שאתה חווה רמה נמוכה יחסית של תסמינים האופייניים לאחר אירוע טראומטי. אם בעבר חווית מצוקה משמעותית יותר, דע שזהו תהליך טבעי, וירידת העוצמה של התסמינים היא סימן חיובי.
עדיין, זה טבעי שגם תסמינים ברמה נמוכה יכולים לגרום לתחושת מצוקה. חשוב להבין גם שהשאלון לא בודק תסמיני דיכאון, חרדה ושימוש לרעה בחומרים, שעלולים להופיע גם כן לאחר אירוע טראומטי, ויכולים בעצמם לגרום למצוקה.
למרות שאין תחליף לטיפול מקצועי פנים מול פנים, היישומון הזה יכול לשמש את ללמוד כלים להפחתת התסמינים. הם גם יכולים להיות מוספים על טיפול מקצועי פנים מול פנים.
אם אתה מרגיש שאתה עלול לפגוע בעצמך או באחרים לחץ על כפתור 'ערוצי התמיכה'.  אם אתה מרגיש במצוקה או מתח, אתה מוזמן להשתמש באחד מהכלים האחרים שבתוך היישומון או להיכנס לסולי הבוטית שב'ארגז הכלים'.

מומלץ לבצע הערכה פעם בשבוע, על מנת לעקוב אחר השינויים, ובתקווה לראות שיפור עם הזמן`,
      mediumScore: `הציון בשאלון מראה שאתה חווה רמה בינונית של תסמינים האופייניים לאחר אירוע טראומטי. התחושות שאתה חווה הם תגובה נורמלית לאירוע טראומטי ואנשים רבים חווים אותם מספר שבועות עד מספר חודשים מהאירוע. לעומת זאת, אם ציון זה גבוה מציונים אחרים שקיבלת בשאלונים קודמים סימן שיש החמרה מסוימת, וכדאי לשים אליה לב.
במידה ואתה מרגיש שהירידה בתפקוד בקרב המשפחה, הלימודים ו/או העבודה נמשכת, או שאתה חווה בעיות נוספות שהשאלון לא בודק, כמו חרדה, דיכאון או שימוש לרעה בחומרים, כדאי לפנות לטיפול. למידע לגבי גישה לאפשרויות טיפול מגוונות לחץ על כפתור 'ערוצי התמיכה'.
למרות שאין תחליף לטיפול מקצועי פנים מול פנים, היישומון הזה יכול לשמש אותך ללמידת כלים להפחתת התסמינים. תמצא אותם בכפתור 'ארגז הכלים'. הם גם יכולים להיות מוספים על טיפול מקצועי פנים מול פנים.
אם אתה מרגיש שאתה עלול לפגוע בעצמך או באחרים לחץ על כפתור 'ערוצי התמיכה'.  אם אתה מרגיש במצוקה או מתח, אתה מוזמן להשתמש באחד מהכלים האחרים שבתוך היישומון או להיכנס לסולי הבוטית שב'ארגז הכלים'.

מומלץ לבצע הערכה פעם בשבוע, על מנת לעקוב אחר השינויים, ובתקווה לראות שיפור עם הזמן.`,
      highScore: `הציון בשאלון מראה שאתה חווה רמה גבוהה של תסמינים האופייניים לאחר אירוע טראומטי. התחושות שאתה חווה הם תגובה נורמלית לאירוע טראומטי ואנשים רבים חווים אותם מספר שבועות עד מספר חודשים מהאירוע. לעומת זאת, אם ציון זה גבוה מציונים אחרים שקיבלת בשאלונים קודמים סימן שיש החמרה מסוימת, וכדאי לשים אליה לב.
במידה ואתה מרגיש שהירידה בתפקוד בקרב המשפחה, הלימודים ו/או העבודה נמשכת, או שאתה חווה בעיות נוספות שהשאלון לא בודק, כמו חרדה, דיכאון או שימוש לרעה בחומרים, כדאי לפנות לטיפול. למידע לגבי גישה לאפשרויות טיפול מגוונות לחץ על כפתור 'ערוצי התמיכה'.
למרות שאין תחליף לטיפול מקצועי פנים מול פנים, היישומון הזה יכול לשמש אותך ללמידת כלים להפחתת התסמינים. תמצא אותם בכפתור 'ארגז הכלים'. הם גם יכולים להיות מוספים על טיפול מקצועי פנים מול פנים.
אם אתה מרגיש שאתה עלול לפגוע בעצמך או באחרים לחץ על כפתור 'ערוצי התמיכה'.  אם אתה מרגיש במצוקה או מתח, אתה מוזמן להשתמש באחד מהכלים האחרים שבתוך היישומון או להיכנס לסולי הבוטית שב'ארגז הכלים'.
מומלץ לבצע הערכה פעם בשבוע, על מנת לעקוב אחר השינויים, ובתקווה לראות שיפור עם הזמן.`,
      lowScoreAfterMultiAttempts: `חדשות טובות! במעקב של 4 שאלונים אפשר לראות שאתה חווה רמה נמוכה של תסמינים לאחר הטראומה. הציון המשוקלל שלך מבוסס על הממוצע של 4 השאלונים שמילאת והשינויים בין שאלון לשאלון. בתקווה שתמשיך לחוות עוצמה מינימלית של תסמינים, כדאי שתנטר את עצמך אחת לכמה שבועות, דרך היישומון או במפגש עם מטפל. הכלים שבאפליקציה עדיין פתוחים בפניך ואתה מוזמן להשתמש בהם כל עת שאתה מרגיש קושי מסוים.
עדיין, זה טבעי שגם תסמינים ברמה נמוכה יכולים לגרום לתחושת מצוקה. חשוב להבין גם שהשאלון לא בודק תסמיני דיכאון, חרדה ושימוש לרעה בחומרים, שעלולים להופיע גם כן לאחר אירוע טראומטי, ויכולים בעצמם לגרום למצוקה.
למרות שאין תחליף לטיפול מקצועי פנים מול פנים, היישומון הזה יכול לשמש את ללמוד כלים להפחתת התסמינים. הם גם יכולים להיות מוספים על טיפול מקצועי פנים מול פנים.
אם אתה מרגיש שאתה עלול לפגוע בעצמך או באחרים לחץ על כפתור 'ערוצי התמיכה'.  אם אתה מרגיש במצוקה או מתח, אתה מוזמן להשתמש באחד מהכלים האחרים שבתוך היישומון או להיכנס לסולי הבוטית שב'ארגז הכלים'.`,
      mediumScoreAfterMultiAttempts: `הציון המשוקלל ב 4 השאלונים, המבוסס על ממוצע הציונים והשינויים בין שאלון לשאלון, מראה שאתה חווה רמה בינונית של תסמינים האופייניים לאחר אירוע טראומטי. בשלב זה בו האירוע הטראומטי מעט רחוק יותר, אך התסמינים עדיין נוכחים בחייך, כדאי לפנות לטיפול. ייתכן גם שלתסמינים המצוינים בשאלון מתווספים דיכאון, חרדה ושימוש לרעה בסמים, מה שמחזק את המלצתינו לפנות לטיפול המתאים עבורך. בכפתור 'ערוצי התמיכה' תמצא מגוון אפשרויות טיפוליות, כולל קביעת מפגשים פנים מול פנים, קביעת מפגשים טלפונים, שיחת וידאו ועוד.
למרות שאין תחליף לטיפול מקצועי פנים מול פנים, היישומון הזה יכול לשמש אותך ללמידת כלים להפחתת התסמינים. תמצא אותם בכפתור 'ארגז הכלים'. הם גם יכולים להיות מוספים על טיפול מקצועי פנים מול פנים.
אם אתה מרגיש שאתה עלול לפגוע בעצמך או באחרים לחץ על כפתור 'ערוצי התמיכה', שם תמצא המספרים למצוקה מיידית.  אם אתה מרגיש במצוקה פחות קשה ומתח, אתה מוזמן להשתמש באחד מהכלים האחרים שבתוך היישומון או להיכנס לסולי הבוטית שב'ארגז הכלים'.
מומלץ לבצע הערכה פעם בשבוע, על מנת לעקוב אחר השינויים, ובתקווה לראות שיפור עם הזמן.`,
      highScoreAfterMultiAttempts: `הציון המשוקלל ב 4 השאלונים, המבוסס על ממוצע הציונים והשינויים בין שאלון לשאלון, מראה שאתה חווה רמה גבוהה של תסמינים האופייניים לאחר אירוע טראומטי. במידה ועדיין לא עשית זאת, אנו ממליצים לך לגשת לטיפול.  בכפתור 'ערוצי התמיכה' תמצא מגוון אפשרויות טיפוליות, כולל קביעת מפגשים פנים מול פנים, קביעת מפגשים טלפונים, שיחות וידאו ועוד. אל תישאר עם זה לבד. לתחושות הקשות ניתן לעזור, ואנשים רבים מצליחים לחזור לתפקוד בעזרת הטיפול המתאים.
למרות שאין תחליף לטיפול מקצועי פנים מול פנים, היישומון הזה יכול לשמש אותך ללמידת כלים להפחתת התסמינים. תמצא אותם בכפתור 'ארגז הכלים'. הם גם יכולים להיות מוספים על טיפול מקצועי פנים מול פנים.
אם אתה מרגיש שאתה עלול לפגוע בעצמך או באחרים לחץ על כפתור 'ערוצי התמיכה'.  אם אתה מרגיש במצוקה או מתח, אתה מוזמן להשתמש באחד מהכלים האחרים שבתוך היישומון או להיכנס לסולי הבוטית שב'ארגז הכלים'.
מומלץ לבצע הערכה פעם בשבוע, על מנת לעקוב אחר השינויים, ובתקווה לראות שיפור עם הזמן.`,
      supportButton: 'ערוצי תמיכה',
      toolboxButton: 'ארגז כלים',
    },
    toolbox: {
      header: 'ארגז כלים',
      toolsHelpTitle:
        'הכלים הבאים יוכלו לסייע לך להתמודדות עם ביטויים שונים, גופניים ורגשיים, המופיעים לאחר האירוע הטראומטי.',
      relaxMuscleTitle: 'הרפיית שרירים מתקדמת',
      relaxMuscleText:
        'הדרכה מוקלטת בעברית של תרגיל הרפיית שרירים מתקדמת. אתה תעבור מקבוצת שרירים גדולה אחת לאחרת, תכווץ ותשחרר אותן לפי הסדר. ההדרכה, בהנחיית ד"ר דניאל בן אליעזר, עורכת כ 10 דקות',
      relaxMuscleButton: 'קישור להדרכה',
      relaxBodyTitle: 'סקירת גוף',
      relaxBodyText:
        'זוהי הדרכה מוקלטת בעברית בתרגיל מיינדפולנס מסוג סקירת גוף. המטרה היא לפתח קשיבות לתחושות שעולות מהגוף וללמוד לחיות איתם בשלום. במהלך ההדרכה יהיו רגעי שקט כדי שתוכל להתרכז בתחושות הגופניות. ההדרכה, בהנחיית עמוס אבישר עורכת כ 10 דקות',
      relaxBodyButton: 'קישור להדרכה',
      botTitle: 'סולי',
      botText:
        'סולי הבוטית הינה בוט חינמי באפליקציית וואטסאפ היכולה לסייע בהפחתת מתח, חרדה ובעיות נוספות.',
      botButton: 'קישור לווטסאפ',
    },
    getSupport: {
      header: 'ערוצי תמיכה',
      crisisButton: `מענה בחירום`,
      findProCareButton: `מענה בשגרה`,
      answerAgainButton: `מלא שאלון נוסף`,
      toolBox: 'ארגז כלים',
    },
    crisisResources: {
      header: 'מענה בחירום',
      eranTitle: `אם הנך ברמת מצוקה גבוהה חייג למוקדי הטלפונים הזמינים 24/7:`,
      eranButton: `ער״ן 1201`,
      suicideAndCrisisTitle: `קו חיים התאבדות ומשבר:`,
      ntlButton: `נט״ל 1800-363-363`,
      hamalLevEhadButton: `חמ״ל לב אחד 072-2133281`,
      emergencyCentersTitle: `מוקדי קופת חולים בחירום:`,
      macabiButton: `מכבי 3555* (זמינים 8:00 - 24:00)`,
      clalitButton: `כללית 03-7472010`,
      meuhedetButton: `מאוחדת - 3833*`,
      leumitButton: `לאומית 507*`,
    },
    findProCare: {
      header: 'מענה בשגרה',
      portalsTitle: `בפורטלים הבאים תוכל למצוא מענים מגוונים וחינמיים, כולל קביעת מפגשים פנים מול פנים, שיכולים להתאים לך`,
      nafshiButton: `Nafshi - Mental support in Israel`,
      otefOrefButton: `Otef Oref`,
      healthFundsTitle: `קופות החולים מעניקות 3 מפגשים טלפוניים ללא עלות עם איש מקצוע בתחום בריאות הנפש. ניתן לתאם באותם מספרי של מוקדי החירום הנ"ל. בקישור הבא ניתן למלא טופס לבקשת טיפול ע"י אנשי טיפול מוסמכי משרד הבריאות. 
(חוזרים תוך 24 שעות מהגשת הטופס)`,
      fillFormButton: `Fill Form`,
    },
    notifications: {
      1: {
        channelName: 'Reminders',
        title: 'זמן לענות על השאלון',
        body: 'במהלך התקופה שלאחר אירוע טראומטי חשוב לנטר את התחושות, הרגשות והקשיים שעלולים לצוץ עם הזמן, כדי לסייע במה שצריך. את/ה לא לבד. הכנס/י לאפליקציה וענה/י על השאלון. בפנים תמצא גם כלים שיוכלו לסייע בעת הצורך',
      },
      3: {
        channelName: 'Reminders',
        title: 'את/ה לא לבד',
        body: 'המצב במדינה מקשה על כולנו, אבל אתה לא חייב להישאר עם זה לבד. כנס לאפליקציה ובחר כלי מוכח מחקרית להפגת מתח או להתמודדות עם תחושת עצבות או אשמה',
      },
      7: {
        channelName: 'Reminders',
        title: 'להתנתק ממחשבות שליליות',
        body: 'בדומה לאנשים אחרים במדינה, שאלון הניטור העצמי מראה שהאירועים הקשים נוגעים בך. ייתכן ואתה מתקשה להתנתק ממחשבות שליליות, להתרכז בדברים יומיומיים או לישון כמו שצריך. באפליקציה יש כלים שיכולים לעזור במצב המורכב שאנו נמצאים בו',
      },
    },
  },
});

type DeepKeysAsDotNotation<BaseObject extends AnyObject> =
  | ExtractObjectPaths<BaseObject, string, true>
  | never;

const i18nStrings = new I18n(strings);
i18nStrings.defaultLocale = DEFAULT_LOCALE;
i18nStrings.enableFallback = true;

export const useString = (
  key: DeepKeysAsDotNotation<ValueOf<typeof strings>>,
) => {
  i18nStrings.locale = useLocale().locale;

  return i18nStrings.t(key);
};
