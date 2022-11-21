import * as React from 'react'
import Head from 'next/head'
import { Navbar } from './navbar'

type Props = {
  children?: React.ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <section className="xdark:bg-gray-500 xh-screen">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <header>
      <Navbar />
    </header>

    <main className="container xmax-w-xl pt-6">
      {children}
    </main>
  </section>
)

export default Layout
