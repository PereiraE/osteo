<template>
  <div v-if="currentPatient">
    <h4>Mise à jour du patient</h4>
      <div class="row">
          <div class="col-lg-12">
            <form>
              <div class="mb-3">
                  <label for="patientId" class="form-label">Numéro patient</label>
                  <input type="text" class="form-control" id="patientId" v-model="currentPatient.id" aria-label="Disabled input example" disabled readonly/>
              </div>
              <div class="row">
                  <div class="col">
                      <div class="mb-3">
                          <label for="lastName" class="form-label">Nom</label>
                          <input type="text" class="form-control" id="lastName" v-model="currentPatient.lastName">
                      </div>
                  </div>
                  <div class="col">
                      <div class="mb-3">
                          <label for="firstName" class="form-label">Prénom</label>
                          <input type="text" class="form-control" id="firstName" v-model="currentPatient.firstName">
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col">
                      <div class="form-check">
                          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                          <label class="form-check-label" for="flexRadioDefault1">
                              Masculin
                          </label>
                      </div>
                      <div class="form-check">
                          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                          <label class="form-check-label" for="flexRadioDefault2">
                              Féminin
                          </label>
                      </div>
                  </div>
                  <div class="col">
                      <div class="mb-3">
                          <label for="birthDate" class="form-label">Date de naissance</label>
                          <input type="date" class="form-control" id="birthDate" v-model="currentPatient.birthDate">
                      </div>
                  </div>
              </div>
              <div class="row">
                  <div class="col">
                      <label for="adress" class="form-label">Adresse</label>
                      <input type="text" class="form-control" id="adress" v-model="currentPatient.adress">
                  </div>
              </div>
              <br/>
              <div class="row">
                  <div class="col">
                      <label for="phone" class="form-label">Téléphone</label>
                      <input type="text" class="form-control" id="phone" v-model="currentPatient.phone">
                  </div>
                  <div class="col">
                      <label for="mail" class="form-label">Email</label>
                      <input type="email" class="form-control" id="mail" v-model="currentPatient.mail">
                  </div>
              </div>
              <br/>
              <div class="row">
                  <div class="col">
                      <label for="work" class="form-label">Profession</label>
                      <input type="text" class="form-control" id="work" v-model="currentPatient.profession">
                  </div>
                  <div class="col">
                      <label for="activity" class="form-label">Activités</label>
                      <input type="email" class="form-control" id="activity" v-model="currentPatient.activity">
                  </div>
              </div>
            </form>
          </div>
      </div>
    <br>
    <button type="button" class="btn btn-primary" @click="updatePatient">Modifier</button>
    <button type="button" class="btn btn-danger" @click="deletePatient">Supprimer</button>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import PatientDataService from "../services/PatientDataService";

export default {
  name: "update-patient",
  data() {
    return {
      currentPatient: null,
      message:""
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
    },

    updatePatient() {
      PatientDataService.update(this.currentPatient.id, this.currentPatient)
        .then(response => {
          console.log(response.data);
          this.message = 'The patient was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deletePatient() {
      PatientDataService.delete(this.currentPatient.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "patients-list" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getPatient(this.$route.params.id);
  }
};
</script>

<style>
.btn{
  margin-right: 20px;
}
</style>