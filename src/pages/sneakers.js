import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const SneakersPage = ({data: {allWpSneaker: {edges}}}) => {

  return (
    <Layout pageTitle="Sneakers">
      {edges.map((item) => {
        const sneaker = item.node.sneakerMeta;
        return <p key={item.node.id}>{sneaker.name}</p>
      })}
    </Layout>
  )
}

export const query = graphql`
query{
  allWpSneaker {
    edges {
      node {
        id
        sneakerMeta {
          name
        }
      }
    }
  }
}
`

export default SneakersPage 