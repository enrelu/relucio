---
title: 'VPN vulnerabilities and risks: the TunnelCrack attack'
description: In a paper accepted by the USENIX Association, academics from New York
  University and KU Leuven have detailed the vulnerabilities known collectively as...
pubDate: '2023-11-08'
category: Vulnerabilities
tags:
- HTTPS
- TunnelCrack
- VPN
heroImage: vulnerabilidades-y-riesgos-en-vpns-ataque-de-tunnelcrack.jpg
translationKey: vulnerabilidades-y-riesgos-en-vpns-ataque-de-tunnelcrack
---

[In a paper accepted by](https://papers.mathyvanhoef.com/usenix2023-tunnelcrack.pdf) [USENIX Association](https://www.linkedin.com/company/usenix-association/), academics from [New York University](https://www.linkedin.com/company/new-york-university/) and [KU Leuven](https://www.linkedin.com/company/ku_leuven/) have detailed vulnerabilities known collectively as TunnelCrack, which have the potential to compromise the security of virtual private networks (VPNs).

### What is TunnelCrack?

**TunnelCrack** refers to a pair of techniques that, when executed correctly, **can expose network traffic outside of encrypted VPNs**. These vulnerabilities were discovered by the research team after testing more than 60 VPN clients. They found that while Android VPN apps appeared to be more secure, **almost all iOS VPN apps were considered vulnerable**.

### LocalNet Attack

One of the techniques used in TunnelCrack is the LocalNet attack. To execute this attack, a Wi-Fi or Ethernet network is established, designed to trick victims into connecting to it. Once connected, the attacker assigns the victim a public IP address and subnet. By exploiting **the fact that most VPNs allow direct access to the local network** while in use, the attacker can redirect the victim's connection to a destination IP address outside the VPN tunnel, allowing him to **observe the victim's network traffic**.

### ServerIP Attack

The second technique, known as the ServerIP attack, is more complex. It takes advantage of the fact that many **VPNs do not encrypt traffic to the VPN server's IP address**. By spoofing DNS responses and manipulating routing rules, the attacker can redirect specific traffic out of the VPN tunnel, exposing it to potential interception.

### What can be done?

If you use VPNs for privacy and security, you can take steps to protect against these vulnerabilities. Here are some actions to consider:

1. **Update VPN Apps**: Check for updates or notices from VPN app providers. Many vendors have already begun to address these vulnerabilities.
2. **Configure VPN Settings**: Check if the VPN client can be configured to **NOT tunnel local network connections** through the VPN tunnel.
3. **Enable security features** – If available, enable security features in the VPN application that help mitigate these risks. Some apps offer options to **block internet access when the VPN connection goes down**.

Finally, note that, although these vulnerabilities are concerning, **secure connections that are encrypted** before entering the VPN tunnel, such as HTTPS or SSH connections, **should remain protected and encrypted even if they are redirected using these techniques**.

For more details on the TunnelCrack vulnerabilities and how to manually test a VPN, you can visit the researchers' [GitHub](https://github.com/vanhoefm/vpnleaks) repository.
