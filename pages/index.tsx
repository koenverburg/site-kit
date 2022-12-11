import { KitCard } from '../components/kit'
import Layout from '../components/Layout'
import {kits} from '../data/kits'

export async function getStaticProps(_context: unknown) {
  return {
    props: {
      kits
    }
  }
}

const IndexPage = ({kits}) => {
  return (
    <Layout title="Conrad The Programmer - Template">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {kits.map(k => <KitCard key={k.name} kit={k} />)}
      </div>
    </Layout>
  )
}

export default IndexPage
