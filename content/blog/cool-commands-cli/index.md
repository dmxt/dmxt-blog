---
title: All cool CLI apps I use on daily basis
date: "2022-09-29"
description: "List of cool command line apps I frequently use. Works on MacOS or any UNIX based system"
tags: CLI, UNIX
---

Some of these CLI softwares you may already know about or have heard of, I'm not trying to put rarest cli app out there,
but there may be some stuff you've never heard of.

[//]: # "Let me know what app you discovered from this article in a comment section below :-)"

# vim

I've gotten so more productive by knowing vim. Especially on Mac when you cannot right-click and create a new
text file in file explorer, or on Linux with no GUI, so it's so much more quicker to create a new file and put some stuff inside through a command line.
I cannot emphasize this enough, it's really worth it to learn command line basic (cd, mkdir, touch, rm) and vim basic (like to move around, save, quit, add
new config like enable mouse)

If it wasn't for JetBrain's wonderful softwares like WebStorm or PyCharm, I would continue using vim for all purposes even web development.

##### How to install vim on:

- MacOS: `brew install vim`
- Ubuntu: `sudo apt-get install vim`
- Arch: `pacman -U vim`

# micro

If vim is too complicated for you, `micro` would be a perfect fit for you. It utilizes regular shortcuts for saving and closing
like Ctrl+S or Ctrl+Q. You even can change themes inside an editor. It's an improved version of `nano`

##### How to install micro on:

- MacOS: `brew install micro`
- Ubuntu: `sudo apt-get install micro`
- Arch: `pacman -U micro`

# fzf

This software is amazingly fast at searching any filename on your system. With this software installed, I no longer have a reason
to look up for a manpage on `grep` or `find`. All you have to do is run `fzf` and it will list all files you have your system
and a search function is to filter them out. It's like Everything software for Windows only.

##### How to install fzf on:

- MacOS: `brew install fzf`
- Ubuntu: `sudo apt-get install fzf`
- Arch: `pacman -U fzf`
