<template>
  <div v-if="currentPatient">
    <h4>Patient</h4>
      <div class="row">
          <div class="col-lg-6">
            <form>
              <div class="mb-3">
                  <label for="patientId" class="form-label">Numéro patient</label>
                  <input type="text" class="form-control" id="patientId" v-model="currentPatient.id" disabled readonly>
              </div>
              <div class="row">
                  <div class="col">
                      <div class="mb-3">
                          <label for="lastName" class="form-label">Nom</label>
                          <input type="text" class="form-control" id="lastName" v-model="currentPatient.lastName" disabled readonly>
                      </div>
                  </div>
                  <div class="col">
                      <div class="mb-3">
                          <label for="firstName" class="form-label">Prénom</label>
                          <input type="text" class="form-control" id="firstName" v-model="currentPatient.firstName" disabled readonly>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col">
                    <label for="gender" class="form-label">Sexe</label>
                    <div v-if="currentPatient.gender == false">
                        <input type="text" class="form-control" id="gender" value="Masculin" disabled readonly>
                    </div>
                    <div v-else-if="currentPatient.gender == true">
                        <input type="text" class="form-control" id="gender" value="Féminin" disabled readonly>
                    </div>
                  </div>
                  <div class="col">
                      <div class="mb-3">
                          <label for="birthDate" class="form-label">Date de naissance</label>
                          <input type="text" class="form-control" id="birthDate" v-model="currentPatient.birthDate" disabled readonly>
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col">
                      <label for="adress" class="form-label">Adresse</label>
                      <input type="text" class="form-control" id="adress" v-model="currentPatient.adress" disabled readonly>
                  </div>
              </div>
              <br/>
              <div class="row">
                  <div class="col">
                      <label for="phone" class="form-label">Téléphone</label>
                      <input type="text" class="form-control" id="phone" v-model="currentPatient.phone" disabled readonly>
                  </div>
                  <div class="col">
                      <label for="mail" class="form-label">Email</label>
                      <input type="email" class="form-control" id="mail" v-model="currentPatient.mail" disabled readonly>
                  </div>
              </div>
              <br/>
              <div class="row">
                  <div class="col">
                      <label for="work" class="form-label">Profession</label>
                      <input type="text" class="form-control" id="work" v-model="currentPatient.profession" disabled readonly>
                  </div>
                  <div class="col">
                      <label for="activity" class="form-label">Activités</label>
                      <input type="email" class="form-control" id="activity" v-model="currentPatient.activity" disabled readonly>
                  </div>
              </div>
            </form>
          </div>
          <div class="col-lg-6 second-part">
              <div>
                  Historique des consultations :
              </div>
              <div class="accordion" id="accordionExample">
                  <div class="accordion-item">
                      <h2 class="accordion-header" id="headingOne">
                          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              Consultation 1 - 10/02/2020
                          </button>
                      </h2>
                      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                              txt Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          </div>
                      </div>
                  </div>
                  <div class="accordion-item">
                      <h2 class="accordion-header" id="headingTwo">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              Consultation 2 - 10/03/2020
                          </button>
                      </h2>
                      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                              txt Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          </div>
                      </div>
                  </div>
                  <div class="accordion-item">
                      <h2 class="accordion-header" id="headingThree">
                          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                              Consultation 3 - 10/04/2020
                          </button>
                      </h2>
                      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                          <div class="accordion-body">
                              txt Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    <br>
  </div>
</template>

<script>
import PatientDataService from "../services/PatientDataService";

export default {
  name: "patient",
  data() {
    return {
      currentPatient: null
    };
  },
  methods: {
    getPatient(id) {
      PatientDataService.get(id)
        .then(response => {
          this.currentPatient = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.getPatient(this.$route.params.id);
  }
};
</script>

<style>
@media (max-width: 992px){
    .second-part{
        margin-top:50px;
    }
}
</style>