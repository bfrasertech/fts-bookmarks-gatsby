import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ShareTargetPage = () => {
  //   window.addEventListener("DOMContentLoaded", () => {
  //     const parsedUrl = new URL(window.location)
  //     // searchParams.get() will properly handle decoding the values.
  //     console.log("Title shared: " + parsedUrl.searchParams.get("title"))
  //     console.log("Text shared: " + parsedUrl.searchParams.get("text"))
  //     console.log("URL shared: " + parsedUrl.searchParams.get("url"))
  //   })

  if (typeof window !== `undefined`) {
    const parsedUrl = new URL(window.location)
    alert("Title shared: " + parsedUrl.searchParams.get("title"))
    alert("Text shared: " + parsedUrl.searchParams.get("text"))
    alert("URL shared: " + parsedUrl.searchParams.get("url"))
  }
  return (
    <Layout>
      <SEO title="Page two" />
      <h1>Sharing</h1>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default ShareTargetPage
