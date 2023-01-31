import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header
  let footer

  // Header
  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">
          <span className={`brand-dmxt`}>dmxt's</span> blog
        </Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        ← all blogs
      </Link>
    )
  }

  // Footer
  if (isRootPath) {
    footer = (
      <div className="main-footer">
        <p>
        © {new Date().getFullYear()} dmxt
        {`. `}
        Powered by <a href="https://www.gatsbyjs.com">Gatsby</a>
        </p>
      </div>
    )
  } else {
    footer = (
      <div className="article-footer">
        <p>
        © {new Date().getFullYear()} dmxt
        {`. `}
        Powered by <a href="https://www.gatsbyjs.com">Gatsby</a>
        </p>

        <Link className="header-link-home" to="/">
          ← all blogs
        </Link>
      </div>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer className="footer">{footer}</footer>
    </div>
  )
}

export default Layout
