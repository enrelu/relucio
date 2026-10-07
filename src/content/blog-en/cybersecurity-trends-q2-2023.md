---
title: Cybersecurity trends in the second quarter of 2023
description: According to the Google Cybersecurity Action Team report, various trends
  and threats have been identified in the second quarter of 2023...
pubDate: '2023-11-08'
category: Trends
tags:
- Cloud
- Google
- SaaS
- Typosquatting
heroImage: tendencias-de-la-ciberseguridad-en-el-segundo-trimestre-de-2023.jpg
translationKey: tendencias-de-la-ciberseguridad-en-el-segundo-trimestre-de-2023
---

[According to the Google Cybersecurity Action Team report](https://services.google.com/fh/files/blogs/gcat_threathorizons_full_oct2023.pdf), various trends and threats have been identified in the field of cybersecurity in the second quarter of 2023. Among the most notable are cloud attacks, abuse of Software-as-a-Service (SaaS) services and the increase in the practice of cybersquatting.

### Cloud attacks and security compromises

In this quarter, cloud attacks have continued to be a significant concern. An alarming fact is that more than 50% of recorded incidents involved the exploitation of weak or no credentials. This indicates the need to strengthen authentication and password management in cloud environments.

![](https://media.licdn.com/dms/image/D4D12AQF9n75JE1v4iQ/article-inline_image-shrink_1500_2232/0/1699436832019?e=1710979200&v=beta&t=Bga_VmocVPKCQ1vm8DTB9xOY5jIWqKGFHqapSQg68F8)

Also highlighted is the persistent use of brute force attacks against default accounts, such as Secure Shell (SSH) and Remote Desktop Protocol (RDP). In addition, it was observed that Google Cloud's virtual private network (VPC), in automatic mode, presents predefined rules that facilitate early exploration. Therefore, for production environments, it is recommended to use VPC in custom mode.

### Impact of cloud compromises

One of the most common consequences of cloud compromises is cryptocurrency mining, which accounted for 67.6% of the observed impacts. This trend is consistent with previous findings and underscores the need for constant vigilance and monitoring to detect and respond to these malicious activities.

![](https://media.licdn.com/dms/image/D4D12AQGvGp8f0C_g1A/article-inline_image-shrink_1500_2232/0/1699436908092?e=1710979200&v=beta&t=jg3UmtZkyMmBkAT3qb0Q98dzcyssDf-dTucQiCAQ1gU)

### Compromise related to vulnerable software

During this period, an 8.5% increase in security compromises related to vulnerable software has been observed, with PostgreSQL being the most exploited target, underscoring the need to patch and secure database configurations.

### Attacks on Software-as-a-Service (SaaS)

The growing adoption of Software-as-a-Service (SaaS) has expanded the attack surface, with a 41% increase in the average number of SaaS applications used between 2021 and 2023. This has led to an increase in cases of security breaches and data leaks in SaaS environments.

Recently, the [code in proof of concept on Github](https://github.com/MrSaighnal/GCR-Google-Calendar-RAT) “Google Calendar RAT (GCR)” was published. Although it has not been seen in actual use, there is interest in its abuse. GCR operates on compromised machines and allows an attacker to place commands in the Google Calendar event description field. Periodically check the calendar event description for new commands, run those commands on the target device, and then update the event description with the command output. According to the developer, GCR communicates exclusively through legitimate infrastructure operated by Google, making it difficult for defenders to detect suspicious activity.

### Cybersquatting on cloud storage platforms

Cybersquatting has seen a significant increase in the last decade, and has now spread to cloud storage platforms. Attackers are using the [_typosquatting_](https://www.incibe.es/aprendeciberseguridad/typosquatting) technique to register spoofed domain names that resemble legitimate domains. Typosquatting can be used in phishing attacks and as a means to distribute malware.

Cybersquatting can also be used to carry out identity theft attacks. For example, threat actors could register the literal name of a company and attempt to operate by impersonating the organization.

### Conclusion

Detailed analysis of cybersecurity trends in Q2 2023 provides a comprehensive view of the current security challenges facing organizations. The conclusions highlight the importance of implementing constant protection and surveillance strategies to maintain the integrity and security of systems and data.
