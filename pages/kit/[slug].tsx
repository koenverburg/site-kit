import Layout from '../../components/Layout'
import kits from '../../data.json'
import { ProductCard } from '../../components/product'
// import { getOGImage } from '../../utils'
// import client from 'https'

export async function getStaticPaths() {
  const paths = kits.map(kit => ({
    params: { slug: kit.slug },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const kit = kits.find(k => k.slug === params.slug)

  // const links = kit.products.map(p => p.links).flat()
  // const coolblueLinks = links.filter(l => l.storeName.toLowerCase() === 'coolblue')
  //
  // const images = await Promise.allSettled(coolblueLinks.map(async l => await getOGImage(l.link)))

  return {
    props: { kit }
  }
}

const IndexPage = ({ kit }) => {
  return (
    <Layout title="Conrad The Programmer - Template">
      <h1>{kit.name}</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {kit.products.map(product => <ProductCard key={product.name} product={product} />)}
      </div>
    </Layout>
  )
}

export default IndexPage
