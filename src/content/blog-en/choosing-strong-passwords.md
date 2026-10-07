---
title: Choosing strong passwords
description: 'Busting Myths: Password Strength Password strength is important in specific
  contexts, such as when it comes to protecting valuable information...'
pubDate: '2023-09-26'
category: Tips
tags:
- Passwords
- MFA
- RockYou
heroImage: elegir-contrasenas-fuertes.jpg
translationKey: elegir-contrasenas-fuertes
---

### Busting myths: Password strength

Password strength is important in specific contexts, such as when trying to protect valuable or confidential information. However, **password strength is not always important**. For example, if a password is stolen in plain text through a phishing attack or a compromised web server, a strong password won't help.

To reduce the damage of these types of attacks, it is much more important not to reuse passwords and for each web service to have a unique password. Additionally, it is essential to **use a password manager**, since it is impossible to remember hundreds of unique passwords.

However, a password manager becomes a single point of failure. Especially if password manager data is uploaded to the web, whether to sync across multiple devices or simply as a backup, there is always a chance that this data could be stolen. But no one will be able to decrypt your passwords until they are able to guess your master key.

Therefore, **the only password you need to remember, this master key, should be very difficult to guess**. A strong password. And it doesn't hurt to remember that you have to enable [multi-factor authentication (MFA)](https://www.linkedin.com/pulse/consejos-de-ciberseguridad-1-c%C3%B3mo-proteger-tus-en-l%C3%ADnea-relucio-).

### How password guessing works

When someone has encrypted data, **guessing the password with which it is encrypted is a fairly simple process**. It is based solely on testing passwords. The mission of the password manager is to make this process very slow by allowing, at most, 1,000 tests per second. Although not all managers have this limitation.

Therefore, the goal of choosing a strong password is not to choose a password that includes as many character classes as possible. It's also not about making the password look complex. Actually, making it too long won't necessarily help either. **What matters is that this particular password appears as low as possible in the test list**.

A starting point for password guessing is always passwords known from previous data breaches. For example, the rockyou.txt list is well known, a list with 14 million passwords leaked in 2009 in the [RockYou](https://techcrunch.com/2009/12/14/rockyou-hack-security-myspace-facebook-passwords/) breach.

If your password is on this list, even at 1,000 guesses per second, **it will take at most 14,000 seconds (less than 4 hours)** to find your password. This time is quite short, and that's assuming that your password manager vendor has done their job which, as past experience shows, this is not an assumption that can be trusted.

Since we're talking about computers, the "correct" way to express large numbers is through powers of two. So, if a password in RockYou's list has less than 24 bits of entropy, it means that it will definitely be found after 2^24 (16,777,216) guesses. Each bit of entropy added to the password doubles the guessing time.

An uncommon word like, for example, “**bahorrina”** provides 16 bits of entropy, the capital letter at the beginning only provides one bit because there are only two options; uppercase or lowercase. There are common substitutions and some junk added at the end that adds a few more bits. But the end result, **“B4h0rr1n4&;**”, is a scant 28 bits of entropy, **so this is a password that seems complex, but in reality it is not**.

### How to choose a truly strong password

The fact is that we are bad at choosing strong passwords, so the only realistic way to get a strong password is to generate it randomly. But we are also very bad at remembering a meaningless mix of letters and digits. Which brings us to passphrases: **sequences of multiple random words**, much easier to remember with equal strength.

A typical way to generate a passphrase would be [diceware](https://en.wikipedia.org/wiki/Diceware), for example you could use [EFF wordlist](https://www.eff.org/files/2016/07/18/eff_large_wordlist.txt) for five dice. Use real dice or a website that rolls dice for you.

Let's say the result is ⚄⚃⚂⚅⚀, look up 54361 in the dictionary and you get "silver." This is the first word of your passphrase. Repeat the process to obtain the necessary number of words. This process is just what some password generators like the one from [Bitwarden](https://www.linkedin.com/company/bitwarden1/) do.

How many words do you need? As a "normal person" you can probably be safe if guessing your password took a century on common hardware. While not impossible, cracking your passwords will simply cost too much even on future hardware and not be worth it. Even if your password manager doesn't protect you well and allows 1,000,000 attempts per second, **a four-word passphrase (51 bits of entropy) should be enough**.
