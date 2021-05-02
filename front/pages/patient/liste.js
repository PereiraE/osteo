import Head from 'next/head'
import Link from 'next/link'

export default function Liste() {
  return (
    <div className="container">
      <Head>
        <title>Ostéo</title>
      </Head>

      <main>
        <h1>Lister des patients</h1>
        <Link href="/patient/ajouter">
            <a>Ajouter un patient</a>
          </Link>
      </main>

      <footer>

      </footer>

      <style jsx>{`

      `}</style>
    </div>
  )
}
