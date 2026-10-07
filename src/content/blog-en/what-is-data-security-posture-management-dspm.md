---
title: What is Data Security Posture Management (DSPM)?
description: Data Security Posture Management (DSPM) is an approach to ensuring that
  sensitive data always has the right...
pubDate: '2023-08-03'
category: Technologies
tags:
- Cloud
- Data
- DSPM
heroImage: que-es-data-security-posture-management-dspm.jpg
translationKey: que-es-data-security-posture-management-dspm
---

Data Security Posture Management (DSPM) is an approach to ensuring that sensitive data always has the correct security posture regardless of whether it has been moved or duplicated.

As an example, if we have a good security posture for data in the cloud, protecting it behind a firewall, without public access, and with IAM controls appropriately limiting access, but a developer replicates that data to an environment with lower security, **the security posture is lost and the data is protected only by the security posture of the lower environment**. If this environment is exposed or poorly secured, sensitive data is also at risk.

DSPM solves this problem by ensuring that **security posture travels along with data** and helping to remediate potential problems. To achieve this, a DSPM solution must do at least three things:

* **Discover all data**, including hidden data that is not used or monitored
* **Understand the security posture** that data is supposed to have based on its criticality
* **Prioritize alerts** based on data sensitivity and provide contextualized remediation plans

These points are key as data discovery and classification tools already existed, but lacked the ability to **provide context**. It is not of much help to the security team if sensitive data is found but it is not known whether it is critical to the business or not and its security posture is not understood.

To understand what data is sensitive, a good **DSPM should be able to identify beyond obviously sensitive data**, such as social security numbers or credit card information, and label the type of sensitive data it finds. It must also integrate with data catalogs to understand who is responsible for the data and must be able to scale to analyze large amounts of data from different sources.

Importantly, Cloud Security Posture Management (CSPM) focuses on securing cloud infrastructure, while DSPM focuses on data. DSPM identifies data vulnerabilities such as overexposure, access controls, data flows, and anomalies, and connects the dots between data and infrastructure security.

In conclusion, DSPM is becoming more relevant due to public cloud adoption. Previously, securing data meant protecting the data center with a firewall. Now, sensitive data constantly travels through different environments with different security postures. **DSPM ensures that security travels along with data in the cloud**, helping to minimize security risks and prevent large data breaches caused by data replication and movement without proper security posture.
