---
title: How to add a new layout component on Gatsby
date: "2022-09-24"
description: "More simple, straight-forward guide to importing and adding a new layout component to a home page or other file. Easier than an official guide."
tags: Gatsby, React, Development, Webdev
---

I want to create a simple section component to implement on other page file.

I tried following an [official tutorial](https://www.gatsbyjs.com/docs/how-to/routing/layout-components/) on Gatsby, 
but their code returned error, so I had to figure it out for myself.
 ow you don't have to figure it out as I did now that you're here reading this article.
<br />

Here's how you can get started:

#### Create a component file
1. Create a new file at `src/components/section.js`:

```javascript
import React from "react"

export default function Section({ children }) {
  return <div>{children}</div>
}
```

#### Import a component on a desired page:

31. Before using your new component, you need to import to your desired file first:

```javascript
import Section from "../components/section"
```

3. Lastly, add the following where you want it to be visible. 
4. It must be in same file you imported the compoent (Step 2)

```javascript
<Section>
  <p>Put anything here.</p>
</Section>
```

#### Success
Once your sample section show up in your desired page. 
Congratulation. You have successfully completed this tutorial! 🎉

---

<b>Note</b>: When I tried to follow the official tutorial, they told me to use `export default` function but
home page `pages/index.js` rejected multiple `export default` calls
