import Link from 'next/link'

const Navigation = ({settings}) => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link href="/"><a className="navbar-brand" href="#">PatientBook</a></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <Link href="/patient/liste">
                    <li className="nav-item">
                        <a className="nav-link">Dossier patient</a>
                    </li>
                </Link>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Consultation</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Facturation</a>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="🔎 Recherche" aria-label="Search"/>
                </form>
            </div>
      </div>
  </nav>    
)
   
export default Navigation