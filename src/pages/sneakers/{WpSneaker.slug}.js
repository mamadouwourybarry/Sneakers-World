import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/layout'

const SneakersPage = ({ data: { wpSneaker: { sneakerMeta: sneaker } } }) => {
  return (
    <Layout pageTitle="Sneakers Template">
      <div>
        <h1>{sneaker.name}</h1>
        <h3>{sneaker.color}</h3>
        <p>Shoe Brand: {sneaker.shoeBrand}</p>
        <p>Shoe Frame: {sneaker.shoeFrame}</p>
        <div dangerouslySetInnerHTML={{__html:sneaker.description}}/>
        <p>Release Date: {sneaker.releaseDate}</p>
        <p>Release Price: {sneaker.releasePrice}</p>
        <p>mallest Size Available: {sneaker.smallestSizeAvailable}</p>
        <p>Biggest Size Available: {sneaker.biggestSizeAvailable}</p>
        <p>Smallest Size Available: {sneaker.smallestSizeAvailable}</p>
       
      </div>
    </Layout>
  )
}

export const query = graphql`
query ($id: String) 
{
  wpSneaker(id: {eq: $id}) 
  {
    sneakerMeta 
    {
      name
      color
      biggestSizeAvailable
      description
      releaseDate
      releasePrice
      smallestSizeAvailable
      shoeFrame
      shoeBrand
    }
  }
}
`

export default SneakersPage