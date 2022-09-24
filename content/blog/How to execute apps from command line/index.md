---
title: How to execute apps in the command line on Mac
date: "2022-09-21"
description: "Guide how to set up to to open any app (like WebStorm, VSCode, PyCharm, 
etc) in current directory through commandline via <code>YourAppName .</code>"
---

You’ll learn how to set up your system to open any apps on command line (like WebStorm, PyCharm, etc.) in current directory
by executing <code>YourAppName .</code>

## Here's how

<aside class="aside-yellow">💡    <b>Reminder:</b> Your system must have an admin rights to evoke <code>sudo</code>.</aside>

We will use WebStorm as an example in this tutorial. 
Your system need to have WebStorm or your chosen app installed. 
If you want to use your chosen app, replace <code>webstorm</code> and <code>WebStorm.app</code> in every code example
with your app name.


1. Create a new file `webstorm` in `/usr/local/bin/`

```bash
sudo touch /usr/local/bin/webstorm
```

2. Open and paste this to the `/usr/local/bin/webstorm` file.

```bash
sudo vim /usr/local/bin/webstorm
```

```bash
#!/bin/sh

open -na "WebStorm.app" --args "$@"
```

3. Make this file executable with chmod

```bash
sudo chmod +x /usr/local/bin/webstorm
```

4. Test if it works by executing to open WebStorm in current directory. 

```bash
webstorm .
```

WebStorm should get launched in a current directory. Congratulations! 🎉 You got it working.