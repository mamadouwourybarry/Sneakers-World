import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    
    <Layout pageTitle="Welcome to the Sneakersworld!">
      <p>Lorem ipsum</p>
      <StaticImage
        alt="sneakers"
        src="https://sneakernews.com/wp-content/uploads/2013/07/a-visual-compendium-of-sneakers-poster-by-pop-chart-lab-1.jpg"
      />
      {/*<StaticImage
      alt="sneakers"
      src="https://www.thestreet.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:good%2Cw_1200/MTY3NTQxNDczNTUwMDE3OTI3/sneaker-boutiques-stich-up-funding-amid-resale-boom.png"
      />*/}
    </Layout>
  )
}

export default IndexPage