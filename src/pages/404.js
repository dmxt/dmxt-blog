import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const email = "dana@dmxt.org"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <h1>404: Not Found!</h1>
      <p>You just hit a link that doesn&#39;t exist... the sadness. 😢</p>
      <p>
        Go back to{" "}
        <Link to="/">
          <span>homepage</span>
        </Link>
      </p>
      <p>
        If you found this link from somewhere, please report this error to my
        email: <a href="mailto:dana@dmxt.org">{email}</a> so I can fix it.
      </p>
    </Layout>
  )
}

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
