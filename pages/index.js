import Head from 'next/head'
import Link from 'next/link'
import Subscribe from '../components/subscribe'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Knowledge Adventure Club</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-md w-full flex flex-col items-center">
        <h1 className="text-xl">⚔️ Want to Join a Knowledge Adventure Club?</h1>
        <div className="p-3 text-sm text-gray-600">
          If you enter your email address below I will send you more details as
          this idea takes shape. I'll also send the occasional email on other
          topics like software and business.
        </div>
        <Subscribe></Subscribe>
      </main>
    </div>
  )
}
