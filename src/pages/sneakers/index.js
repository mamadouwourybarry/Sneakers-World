import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'

const SneakersPage = ({ data: { allWpSneaker: { edges } } }) => {

  return (
    <Layout pageTitle="Sneakers">
      {edges.map((item) => {
        const sneaker = item.node.sneakerMeta;
        const slug = item.node.slug;
       // const id = item.node.id;
        console.log(slug);
        return <Link key={item.node.id} to={`/sneakers/${slug}`}>
          <p key={item.node.id}>{sneaker.name}</p></Link>
      })}
    </Layout>
  )
}

export const query = graphql`
query{
  allWpSneaker {
    edges {
      node {
        slug
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