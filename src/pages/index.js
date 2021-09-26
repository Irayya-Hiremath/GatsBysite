import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage  alt='images' src='../images/mt6.jpg'/>
      {/* <StaticImage  alt='images' src='../images/mt5.jpg'/> */}

    </Layout>
  )
}

export default IndexPage