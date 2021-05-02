import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ostéo</title>
      </Head>

      <main>
        <h1>Accueil</h1>
        <Link href="patient/liste">
            <a>Dossier patient</a>
        </Link>
      </main>

      <footer>

      </footer>

      <style jsx>{`

      `}</style>
    </div>
  )
}
