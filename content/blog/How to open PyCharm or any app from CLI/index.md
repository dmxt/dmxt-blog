---
title: How to execute app in commandline on Mac
date: "2022-09-21"
description: "Guide how to set up to to open any app (like WebStorm, VSCode, PyCharm, etc) in current directory through commandline via <code>webstorm .</code>"
---

You'll learn how to set up your system to open any apps (like WebStorm, PyCharm, etc)
through CLI on MacOS.

<aside>
💡 We will use WebStorm as an example in this tutorial. With this tutorial, you'll be able to
execute WebStorm by typing down `webstorm .` on a commandline in a current directory.

</aside>

## Here's how

Before we get started, make sure you have the following: 

💡 <b>Reminder:</b> You need admin rights to evoke <code>sudo</code>.<br>
💡 Your system have WebStorm installed, or replace `webstorm` and `WebStorm.app` in every code example with your chosen app name.
We will use WebStorm as an example in this tutorial.

1. Create a new file `webstorm` in `/usr/local/bin/`

```bash
sudo touch /usr/local/bin/webstorm
```

1. Open and paste this to `webstorm` file.

```bash
sudo vim /usr/local/bin/webstorm
```

```bash
#!/bin/sh

open -na "WebStorm.app" --args "$@"
```

1. Make this file executable with chmod

```bash
sudo chmod +x /usr/local/bin/webstorm
```

1. Test if it work by executing to open WebStorm in current dir. 

```bash
webstorm .
```

WebStorm should get launched in a current directory. Congratulations! 🎉 You got it working.
