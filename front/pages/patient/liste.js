import Layout from '../../components/Layout'
import Link from 'next/link'

function Liste({patients}) {
  return (
  <Layout>
      <h3>Liste</h3>
      <Link href="./ajouter"><a className="btn btn-primary">Ajouter un patient</a></Link>
      <ul className="list-group">
      {patients.map((patient) => (
        <li className="list-group-item d-flex justify-content-between align-items-center">
          {patient.firstName} {patient.lastName}
        </li>
      ))}
      </ul>
      <style jsx>{`
        .list-group{
          margin-top:20px;
        }
      `}</style>
  </Layout>
  )
}

export async function getStaticProps() {

  const res = await fetch('http://osteo.estebanpereira.fr/api/patients')
  const patients = await res.json()

  return {
    props: {
      patients,
    },
  }
}

export default Liste