---
title: How to execute apps in the command line on Mac
date: "2022-09-21"
description: "Guide how to set up to to open any app (like WebStorm, VSCode, PyCharm, 
etc) in current directory through commandline via <code>YourAppName .</code>"
---

# What will I learn?

You’ll learn how to set up your system to open any apps on command line (like WebStorm, PyCharm, etc.) in current directory
by executing <code>YourAppName .</code>

## Why?

After installing WebStorm, I can't execute `webstorm .` to open JetBrain's WebStorm in current directory. They don't install commandline support. This fustrated me as VSCode install commandline support on default, you can run `code .` from commandline right away.

This tutorial will walk you to setting it up. After installing WebStorm, I can execute  `webstorm .` to open an IDE in a current directory from commandline.

### We'll be using WebStorm as an example.

This will work for any binary program on your system by just renaming filename and the directory in a bash script.

# Let's get started

<aside class="aside-yellow">💡    <b>Reminder:</b> Your system must have an admin rights to evoke <code>sudo</code>.</aside>

If you want to use your chosen app, replace <code>webstorm</code> and <code>WebStorm.app</code> in every code example
with your app name.



**Your filename will be your command.** When creating a new file inside `usr/local/bin`, you're creating a command for you to evoke and your command will be your filename. A file `webstorm` will make `webstorm .` executive, a file `winner` will make `winner .` executive.

# Step-to-step guide

We'll be using WebStorm as an example. You can replace it with any other binary files you have installed, just rename the filename (step 1) and the path in a bash script (step 2)

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

WebStorm should get launched in a current directory. 

If it did, **congratulations, you got it working!** 🎉
