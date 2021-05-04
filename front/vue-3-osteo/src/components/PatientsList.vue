<template>
  <div>
    <div class="list row">
      <div class="col">
        <div class="input-group">
          <router-link to="/patients/add"><button class="btn btn-outline-primary" type="button">Ajouter un patient</button></router-link>
        </div>
      </div>
      <div class="col">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Rechercher un patient"
            v-model="patientLastName">
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button"
              @click="searchPatient"
            >
              🔍 Rechercher 
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="list row">
      <h4>Liste des patients</h4>
      <br>
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center" v-for="(patient, index) in patients" :key="index">
          {{ patient.firstName }} {{ patient.lastName }} <router-link :to="'/patients/update/' + patient.id">Edit</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import PatientDataService from "../services/PatientDataService";

export default {
  name: "patients-list",
  data() {
    return {
      patients: [],
      currentPatient: null,
      currentIndex: -1,
      patientLastName: ""
    };
  },
  methods: {
    retrievePatients() {
      PatientDataService.getAll()
        .then(response => {
          this.patients = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    searchPatient() {
      if(this.patientLastName == ""){
        console.log("vide");
        PatientDataService.getAll()
          .then(response => {
            this.patients = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }else{
        PatientDataService.findByLastName(this.patientLastName)
          .then(response => {
            this.patients = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      }

    }
  },
  mounted() {
    this.retrievePatients();
  }
};
</script>

<style>
.list{
  margin: auto auto 30px auto;
  max-width: 700px;
}
</style>