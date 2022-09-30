---
title: Add a new layout component on Gatsby
date: "2022-09-24"
description: "More simple, straight-forward guide to importing and adding a new layout component to a home page or other file. Easier than an official guide."
tags: Gatsby, React, Development
---

I tried following an [official tutorial](https://www.gatsbyjs.com/docs/how-to/routing/layout-components/) on Gatsby, but it didn't work out, so I had to figure it out
for myself.

Now you don't have to figure it out as I did now that you're here reading this article.
Here's how you can get started.

1. Create a new file at `src/components/section.js`

```javascript
import React from "react"

export default function Section({ children }) {
  return (
    <div>
      {children}
    </div>
  )
}
```

2. Before using your new component, you need to import to the file first:

```javascript
import Section from "../components/section"
```

3. Lastly, add the following where it would be visible (in a same file you imported)
```javascript
<Section><p>Put anything here.</p></Section>
```

All done!

---

<b>Note</b>: When I tried to follow the official tutorial, they told me to use `export default` function but
home page `pages/index.js` rejected multiple `export default` calls 