---
title: 'Protecting your brand: DMARC'
description: Email is a key tool for businesses, but its popularity also makes it
  a prime target for cybercriminals. ...
pubDate: '2024-05-02'
category: Technologies
tags:
- Email
- DKIM
- DMARC
- SPF
heroImage: protegiendo-tu-marca-dmarc.jpg
translationKey: protegiendo-tu-marca-dmarc
---

Email is a key tool for businesses, but its popularity also makes it a prime target for cybercriminals. **Email scams**, especially [BEC attacks](https://www.microsoft.com/es-es/security/business/security-101/what-is-business-email-compromise-bec), **have cost organizations billions of dollars** **and damaged consumer trust**. It's time to take proactive measures. In this article, we will explore DMARC, a tool that fights phishing and spoofing.

### **What is DMARC?**

Introduced in 2012 by email industry leaders, DMARC (Domain-based Message Authentication Reporting & Conformance) is an **open source email authentication protocol** that provides domain-level protection for the email channel. This detects and prevents **[spoofing](https://es.wikipedia.org/wiki/Email_spoofing)** techniques, corporate email compromise (**BEC**) attacks, and other email-based attacks.

### **How does DMARC work?**

DMARC relies on existing standards such as **SPF** and **DKIM** to authenticate legitimate email. **Allows senders to regain control**, tell mailbox providers how to handle unauthenticated messages, and get threat details.

The **SPF** or Sender Policy Framework allows the recipient's email server to check whether an email that appears to come from a certain domain **actually originates from an authorized IP address** of that domain. The list containing all authorized IP addresses and hosts for a specific domain can be found in the DNS records for that domain.

**DKIM** or Domain Key Identified Mail is a system by which email, when it leaves the outgoing mail server, **is signed by a key** that is in the DNS of the sender's organization. Thus, when it is received, in the message code you can see which signing key was used. You must be able to verify that key in the corresponding DKIM record on your organization's DNS server, so you must correctly configure DKIM following the specifications of the outgoing mail server you are using.

Finally, **DMARC** allows a sender to indicate that their emails are protected by SPF or DKIM, and instructs recipients on **action if SPF and DKIM checks fail**, such as **quarantining** or **rejecting message** and sending a violation report to the email address specified in the policy.

DMARC offers three options:

* Monitor: the message is delivered to the recipient
* Quarantine: mail is delivered to the “junk” mailbox
* Reject: Mails are rejected and deleted directly

![DMARC](https://relucio.es/wp-content/uploads/2024/02/DMARC-1024x438.png)

### **Why DMARC?**

Up to this point, we have explored how DMARC plays a crucial role in protecting the email channel from domain spoofing and phishing. However, the question arises: does it really **offer substantial benefits that justify its implementation** in your organization?

Let's imagine a situation where a hacker impersonates a brand, sending phishing emails to all of its customers. If some customers fall into the trap and reveal sensitive personal data to the cybercriminal, **that brand is associated with that phishing scam**.

**With DMARC we can prevent an employee or customer from opening a fake email** by deleting it before it even reaches their inboxes. This way you maintain control over the emails that the user sees and, therefore, over your brand. **DMARC acts as a shield**, ensuring that an organization is not compromised by malicious activities, offering them continuous and robust control over the integrity of their brand.

### **Conclusions**

DMARC not only protects employees, customers and brands, it also improves mail deliverability, reduces operational costs and provides crucial threat visibility.

It is time to take the step with DMARC to guarantee the security and trust of the email channel.
