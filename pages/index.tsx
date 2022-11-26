import Link from 'next/Link'
import Layout from '../components/Layout'
import styles from '../styles/kit.module.scss'
import {kits} from '../data/kits'

export async function getStaticProps(_context: unknown) {
  return {
    props: {
      kits
    }
  }
}

const Kit = ({name, slug, products}) => {
  return (
    <Link
      href={`/kit/${slug}`}
      className={`shadow-md ${styles.kit}`}
      style={{ backgroundImage: `url(https://place-hold.it/200)` }}
    >
      <div className={styles.kit_content}>
        <h3 className="z-10 text-xl font-bold tracking-tight text-white">{name}</h3>
        <span className="z-20 text-white">{products.length} Products</span>
      </div>
    </Link>
  )
}

const IndexPage = ({kits}) => {
  return (
    <Layout title="Conrad The Programmer - Template">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {kits.map(k => (
          <Kit
            key={k.name}
            name={k.name}
            slug={k.slug}
            products={k.products}
          />
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage
