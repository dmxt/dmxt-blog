---
title: Bypass malicious files on Mac
date: "2022-09-30"
description: "How to bypass malicious file error on Mac with a simple command in a CLI"
tags: CLI, Mac
---

Time to time I encounter this malicious file error when I install 
`--cask` app through `brew`, and they throw a malicious file error with 
no hint of workaround. 

# Here's a fast way to disable the "Malicilous files" pop-up

I found this simple command that will completely resolve this issue 
very quickly (1 step fast)


1. Run the following with the app you're having trouble starting:
```bash
sudo xattr -d com.apple.quarantine "yourappnname.App"
```

After running this command, your program should open like normal. 🚀

---

### Example

I need to run this every time I run my browser and whenever malicious 
software error pop-up, I run the following to open the app like normal:

```bash
sudo xattr -d com.apple.quarantine "/Applications/Chromium.app"
```
