import Head from 'next/head'
import Subscribe from '../components/subscribe'

export default function Home() {
  const site = {
    title: `Knowledge Adventure Club`,
    description: `Guided adventures through the depths of software and business knowledge.`,
  }
  return (
    <div className="flex items-center justify-center bg-gray-50 py-5 px-4 sm:px-6 lg:px-8">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{site.title}</title>
        <link rel="icon" href="/favicon.ico" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="@jhooks" key="twhandle" />

        {/* Open Graph */}
        <meta
          property="og:url"
          content="https://knowledgeadventure.club"
          key="ogurl"
        />
        <meta
          property="og:image"
          content="https://knowledgeadventure.club/android-chrome-512x512.png"
          key="ogimage"
        />
        <meta property="og:site_name" content={site.title} key="ogsitename" />
        <meta property="og:title" content={`⚔️ ${site.title}`} key="ogtitle" />
        <meta
          property="og:description"
          content={site.description}
          key="ogdesc"
        />
      </Head>

      <main className="max-w-md w-full ">
        <Subscribe></Subscribe>
      </main>
    </div>
  )
}
