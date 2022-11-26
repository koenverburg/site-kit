import Layout from '../../components/Layout'
import {kits} from '../../data/kits'
import {promises as fs} from 'fs'
import path from 'path'

export async function getStaticPaths() {
  const paths = kits.map(kit => ({
    params: { slug: kit.slug },
  }))

  // const droppath = path.resolve(__dirname, '../../../../')
  // await fs.writeFile(`${droppath}/kits.json`, JSON.stringify(kits, null, 2))

  return { paths, fallback: false }
}

export async function getStaticProps({params}) {
  const kit = kits.find(k => k.slug === params.slug)

  return {
    props: { kit }
  }
}

const IndexPage = ({kit}) => {
  console.log(kit)
  return (
    <Layout title="Conrad The Programmer - Template">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <h1>{kit.name}</h1>
        <ul>
          {kit.products.map(product => (
            <li>{product.name}</li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default IndexPage
