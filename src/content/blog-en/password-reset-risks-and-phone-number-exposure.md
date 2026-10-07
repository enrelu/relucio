---
title: 'Password reset risks: exposing phone numbers'
description: Have you ever wondered how much of your personal information is just
  a few clicks away? In today's entry we will see the "fascinating" world of rest...
pubDate: '2023-11-27'
category: Vulnerabilities
tags:
- Lastpass
- MFA
- SIM Swapping
- SS7
heroImage: riesgo-de-seguridad-al-restablecer-contrasenas-exposicion-del-numero-de-telefono.jpg
translationKey: riesgo-de-seguridad-al-restablecer-contrasenas-exposicion-del-numero-de-telefono
---

Have you ever wondered how much of your personal information is just a few clicks away? In today's entry we will see the "fascinating" world of password resets, and the results are worrying to say the least.

Imagine this scenario: you decide to change or have forgotten your password on one of your favorite websites. You write your email to recover it and a range of options opens. You can receive an email with a link, an SMS with a secret code, or even a phone call.

Here comes the interesting part, when you opt for the SMS or call option, the website often **reveals a portion of your phone number**. Although it is not the full number, just a few digits, enough to recognize it if you have several phones. In short, if I know your email, I can start the password reset process and get a few digits of your phone number.

### Collecting the phone number associated with the email

However, not all websites display the same digits. Some reveal the last four, others the first, and some opt for different combinations. How the digits are hidden is entirely up to the site developer. Potential security problem, right?

Imagine you have accounts on eBay, which shows you the first three and last two digits, and LastPass, which shows you the last four. **An attacker could potentially crack seven of the nine digits of your phone number with just your email address.** From two hundred million options (8 digits considering the first will be 6 or 7 for a mobile), your email address could narrow the possibilities down to just one hundred. A disturbing fact, don't you think?

### Risks in telephone number exposure

But why should you worry? This process of revealing phone numbers could open the door to various threats:

* [SIM Swapping](https://www.incibe.es/ciudadania/blog/sim-swapping-como-evitar-esta-estafa): Password reset and **2FA bypass**. Although to do this the attacker must have more personal data such as ID.
* [SS7 Attacks](https://hipertextual.com/2016/06/ataque-ss7-whatsapp-telegram): Exploit operator protocol to **track locations**, **spy on calls**, intercept texts and initiate fraud.
* Voicemail vulnerability: data theft, identity theft.
* Caller ID Spoofing: Manipulation of caller IDs for social engineering leading to fraud or spoofing.
* Phishing attacks: use of the phone number for targeted phishing campaigns.
* **Identity theft**: impersonate you for financial fraud or reputational damage.
* Harassment: unwanted messages, repeated calls at unwanted hours.
* Account takeover: **unauthorized access to your accounts** online.
* Robocalls: Automated spam calls and messages that lead to scams.
* Social engineering: manipulation through your phone number, leading to financial loss or data breaches of acquaintances.

### Process automation

With the possession of an email address, the process involves combining data collection, number generation and testing at specific sites. But yes, there are ways to **automate this process**, although that's a trip for another day.
