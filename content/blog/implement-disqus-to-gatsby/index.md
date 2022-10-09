---
title: How to implement a comment section with Disqus on Gatsby
date: "2022-09-30T19:25:00"
description: "How to implement Disqus comment section to your Gatsby blog article"
tags: Gatsby, React, Development
---

Some articles don't work at all, so I found this working method to add comment sections to my blog articles. 


### 1. Register a new account on Disqus

You have to register a new (or pre-existing) account before setup.
Here's how:

![](/images/disqus-setting.png)

### Installation:
#### Install on npm

1. Stop `gatsby develop`
2. Run `react-disqus-comments`
3. Run `npm install react-disqus-comments`

#### Install on yarn

1. Stop `gatsby develop`
2. Run `yarn add react-disqus-comments`

### 3. Restart your Gatsby site:

`gatsby develop` to start your Gatsby dev site

#### Then add this section where you want the comment section to be. 

Add the following to your blog article (in my case `src/templates/pages/blog-post`)
In my case, it will be on the very bottom before `</Layout>`

```react
<ReactDisqusComments
  shortname="your_short_name"
  identifier={post.id}
  title={post.title}
  url={post.url}
  category_id={post.category_id}
/>
```

Change `shortname` to your selected name on official Disqus, in my example

```react
  shortname="dmxt-blog"
```

### Restart Gatsby to activate the comment section
Try re-compiling it by stopping the environment dev, and starting it up via `gatsby develop`; 
then, your Disqus comment section should show up even on localhost environment.