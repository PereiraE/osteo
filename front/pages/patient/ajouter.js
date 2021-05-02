import Layout from '../../components/Layout'

export default function Ajouter() {
    return (
    <Layout>
        <div className="container">
            <br/>
            <div className="row">
                <div className="col-lg-6">
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Numéro patient</label>
                        <input className="form-control" type="text" placeholder="123" aria-label="Disabled input example" disabled readonly/>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Nom</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1"/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Prénom</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label className="form-check-label" for="flexRadioDefault1">
                                    Masculin
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                                <label className="form-check-label" for="flexRadioDefault2">
                                    Féminin
                                </label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Date de naissance</label>
                                <input type="date" className="form-control" id="exampleFormControlInput1"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label for="exampleFormControlInput1" className="form-label">Adresse</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1"/>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col">
                            <label for="exampleFormControlInput1" className="form-label">Téléphone</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1"/>
                        </div>
                        <div className="col">
                            <label for="exampleFormControlInput1" className="form-label">Email</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1"/>
                        </div>
                    </div>
                    <br/>
                    <div className="row">
                        <div className="col">
                            <label for="exampleFormControlInput1" className="form-label">Profession</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1"/>
                        </div>
                        <div className="col">
                            <label for="exampleFormControlInput1" className="form-label">Activités</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1"/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 second-part">
                    <div>
                        Historique des consultations :
                    </div>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Consultation 1 - 10/02/2020
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    txt Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Consultation 2 - 10/03/2020
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    txt Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Consultation 3 - 10/04/2020
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    txt Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <button type="button" className="btn btn-primary">Enregistrer</button>
        </div>

        <style jsx>{`
        @media (max-width: 992px){
            .second-part{
                margin-top:50px;
            }
        }
        `}</style>
    </Layout>
    )
}





