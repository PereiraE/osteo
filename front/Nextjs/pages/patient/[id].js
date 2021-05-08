import { useRouter } from 'next/router'


const Patient = () => {
  const router = useRouter()
  const { id } = router.query

  return <p>Patient: {id}</p>
}

export default Patient

