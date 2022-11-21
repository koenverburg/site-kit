import Layout from '../components/Layout'

const IndexPage = () => {
  const list = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

  return (
    <Layout title="Conrad The Programmer - Template">

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

        {list.map(key => (
          <div key={key} className="p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">

            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            </a>

            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">
              Read more
            </a>
          </div>
        ))}

      </div>
    </Layout>
  )
}

export default IndexPage
