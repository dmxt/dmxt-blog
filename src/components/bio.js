/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          siteUrl
          author {
            name
            summary
          }
          social {
            twitter
            dribbble
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social
  const siteUrl = data.site.siteMetadata?.siteUrl

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/logo.png"
        width={50}
        height={50}
        quality={100}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          {/*{author?.summary || null}*/}
          {`Hello! I'm Dana. I'm a designer and front-end developer based in Miami, FL. This is my blog.`}
          <br />
          {`Check out my main `}
          <a href={`${siteUrl || ``} `} className={`brand-dmxt`}>
            website
          </a>
          {` and my portfolio on `}
          <a
            href={`https://dribbble.com/${social?.dribbble || ``}`}
            className={`brand-dribbble`}
          >
            dribbble
          </a>
          {`. My social media is `}
          <a
            href={`https://twitter.com/${social?.twitter || ``}`}
            className={`brand-twitter`}
          >
            twitter
          </a>
          {`.`}
        </p>
      )}
    </div>
  )
}

export default Bio
