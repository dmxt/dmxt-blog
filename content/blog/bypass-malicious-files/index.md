---
title: Bypass malicious files on Mac
date: "2022-09-30"
description: "How to bypass malicious file error on Mac with a simple command in a CLI"
tags: CLI, Mac
---

Hey guys, time to time I encounter this malicious file error when I install `--cask` app through brew,
so they throw a malicious file error with no hint of workaround.

I found this simple command that will completely resolve this issue very quickly and that is

```bash
sudo xattr -d com.apple.quarantine "FileName.App"
```

### For an example

I need to run this every time I run my ungoogled-chromium (Yes, I'm this person)
and whenever malicious software error pop-up, I run the following

```bash
sudo xattr -d com.apple.quarantine "/Applications/Chromium.app"
```

Boom, you can start the app right up like normal! 🚀
