import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to MauiCity!" />
        <p className="description">
          Let Join We
        </p>
        <a href="www.discord.io/mauicity
          MauiCity Discord
        </a>
      </main>

      <Footer />
    </div>
  )
}
