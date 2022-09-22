---
title: How to execute PyCharm from CLI
date: "2022-09-21"
description: "How to open PyCharm in current directory on commandline via <code>pycharm .</code>"
---

After you complete this tutorial, you'll be able to execute PyCharm (or any application)
from CLI by running `pycharm .` to open PyCharm IDE in a current directory.

<aside>
💡 This instruction does not only apply for PyCharm, you can do the same step for any other apps — WebStorm, Notion, any other apps. 
This instruction uses PyCharm as an example.

</aside>

## Here's how

💡 <b>Reminder:</b> You need admin rights to evoke <code>sudo</code>

1. Create a new file `pycharm` in `/usr/local/bin/`

```bash
sudo touch /usr/local/bin/pycharm
```

1. Open and paste this to `pycharm` file.

```bash
sudo vim /usr/local/bin/pycharm
```

```bash
#!/bin/sh

open -na "PyCharm.app" --args "$@"
```

1. Make this file executable with chmod

```bash
sudo chmod +x /usr/local/bin/pycharm
```

1. Test if it work by executing to open PyCharm in current dir.

```bash
pycharm .
```

It should open PyCharm IDE in a current directory.

Once it opens PyCharm in current direction, then congratulations! 🎉 You got it working. `pycharm .` to open PyCharm IDE in a current directory inside CLI, but you need to set it up first.

