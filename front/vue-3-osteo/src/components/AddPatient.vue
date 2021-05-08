<template>
  <div class="col-lg-12">
    <form v-if="!submitted">
      <div class="row">
          <div class="col">
              <div class="mb-3">
                  <label for="lastName" class="form-label">Nom</label>
                  <input type="text" class="form-control" id="lastName" v-model="patient.lastName">
              </div>
          </div>
          <div class="col">
              <div class="mb-3">
                  <label for="firstName" class="form-label">Prénom</label>
                  <input type="text" class="form-control" id="firstName" v-model="patient.firstName">
              </div>
          </div>
      </div>
      <div class="row">
          <div class="col">
              <div class="form-check">
                  <input class="form-check-input" type="radio" name="male" id="male" v-model="patient.gender" v-bind:value="false">
                  <label class="form-check-label" for="male">
                      Masculin
                  </label>
              </div>
              <div class="form-check">
                  <input class="form-check-input" type="radio" name="female" id="female" v-model="patient.gender" v-bind:value="true">
                  <label class="form-check-label" for="female">
                      Féminin
                  </label>
              </div>
          </div>
          <div class="col">
              <div class="mb-3">
                  <label for="birthDate" class="form-label">Date de naissance</label>
                  <input type="date" class="form-control" id="birthDate" v-model="patient.birthDate">
              </div>
          </div>
      </div>
      <div class="row">
          <div class="col">
              <label for="adress" class="form-label">Adresse</label>
              <input type="text" class="form-control" id="adress" v-model="patient.adress">
          </div>
      </div>
      <br/>
      <div class="row">
          <div class="col">
              <label for="phone" class="form-label">Téléphone</label>
              <input type="text" class="form-control" id="phone" v-model="patient.phone">
          </div>
          <div class="col">
              <label for="mail" class="form-label">Email</label>
              <input type="email" class="form-control" id="mail" v-model="patient.mail">
          </div>
      </div>
      <br/>
      <div class="row">
          <div class="col">
              <label for="work" class="form-label">Profession</label>
              <input type="text" class="form-control" id="work" v-model="patient.profession">
          </div>
          <div class="col">
              <label for="activity" class="form-label">Activités</label>
              <input type="email" class="form-control" id="activity" v-model="patient.activity">
          </div>
      </div>
      <br>
      <button @click="savePatient" class="btn btn-primary">Ajouter</button>
    </form>
    <div v-else>
      <h4>Patient enregistré</h4>
      <button class="btn btn-success" @click="newPatient">Ajouter</button>
    </div>
  </div>
</template>

<script>
import PatientDataService from "../services/PatientDataService";

export default {
  name: "add-patient",
  data() {
    return {
      patient: {
        id: null,
        lastName: "",
        firstName: "",
        gender:"",
        birthDate: "",
        adress: "",
        phone: "",
        mail: "",
        profession: "",
        activity: ""
      },
      submitted: false
    };
  },
  methods: {
    savePatient() {
      var data = {
        lastName: this.patient.lastName,
        firstName: this.patient.firstName,
        gender: this.patient.gender,
        birthDate: this.patient.birthDate,
        adress: this.patient.adress,
        phone: this.patient.phone,
        mail: this.patient.mail,
        profession: this.patient.profession,
        activity: this.patient.activity
      };

      PatientDataService.create(data)
        .then(response => {
          this.patient.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newPatient() {
      this.submitted = false;
      this.patient = {};
    }
  }
};
</script>

<style>

</style>