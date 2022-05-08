import type { NextPage } from 'next'
import Head from 'next/head'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Twitter Reproduction</title>
      </Head>

      <h1>Hello World.</h1>

      <main>
        <Sidebar />

        <Feed />

        <Widgets />
      </main>
    </div>
  )
}

export default Home
