<template>
  <div class="row">
    <div class="sidebar col-lg-2">
      <div class="sidebar-content">
       <router-link to="/patients/add"><button class="pbbtn pbbtn-primary">Nouveau patient</button></router-link>
        <button class="pbbtn pbbtn-secondary">Mode édition</button>
      </div>
    </div>
    <div class="patient-list-container col-lg-7">
      <div class="patient-list-header">
        <span class="patient-list-title">Patients</span>
        <input type="search" class="form-control" placeholder="Rechercher un patient" v-model="patientLastName" v-on:keyup.enter="onEnter" >
      </div> 
      <div class="patient-list-content">
        <div class="patient-card" v-for="(patient, index) in patients" :key="index">
          <div class="patient-card-content">
            <router-link :to="'/patients/' + patient.id"><span class="patient-name">{{ patient.firstName }} {{ patient.lastName }}</span><br></router-link>
            <span class="patient-last-consultation">Dernière consultation : 10/10/2021</span>
          </div>
          <div class="patient-num">
            <b>N°:</b> {{ patient.id }}
          </div>
        </div>
      </div>  
    </div>
    <div class="rightbar col-lg-3">
      <div class="rightbar-content">
        <span>Prochains rendez-vous</span>
      </div>
    </div>
  </div>
  <!-- <hr>
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
        <router-link :to="'/patients/' + patient.id">{{ patient.firstName }} {{ patient.lastName }}</router-link> <router-link :to="'/patients/update/' + patient.id">Edit</router-link>
      </li>
    </ul>
  </div> -->
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
    },
    onEnter: function() {
       this.searchPatient()
    }
  },
  mounted() {
    this.retrievePatients();
  }
};
</script>

<style lang="scss">
.pbbtn{
  font-size: 0.9rem;
  font-weight: 400;
  border: none;
  border-radius: 5px;
  padding: 5px 0;
  display: block;
}
.sidebar, .patient-list-container{
  min-height: 100vh;
}
.sidebar{
  .sidebar-content{
    margin: 30px 0;
    .pbbtn-primary{
      background: #5950EA;
      color: #fff;
      width: 80%;
      margin: 0 auto 12px auto;
    }
    .pbbtn-secondary{
      background: #fff;
      color: #6F7884;
      width: 80%;
      border: 1px solid #C3C8CE;
      margin: auto;
    }
  }
}
.patient-list-container{
  padding: 0;
  border-right: 1px solid rgb(229,231,235);
  border-left: 1px solid rgb(229,231,235);
  .patient-list-header{
    padding-left: 30px;
    height: 80px;
    border-bottom: 1px solid rgb(229,231,235);
    display: flex;
    align-items: center;
    justify-content: space-between;
    .patient-list-title{
      float: left;
      font-size: 1.2rem;
      font-weight: 400;
    }
    input{
      margin-right: 30px;
      max-width: 350px;
      border: 1px solid #C3C8CE;
      font-weight: 300;
      height: 30px;
      &::placeholder{
        color: #6F7884;
      }
    }
  }
}
.patient-list-content{
  .patient-card{
    width: 100%;
    padding:0 30px;
    height: 80px;
    border-bottom: 1px solid rgb(229,231,235);
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .patient-card-content{
      .patient-name{
        font-weight: 400;
      }
      .patient-last-consultation{
        font-weight: 400;
        color: #6F7884;
      }
    }
  }
  .patient-num{
    b{
      font-weight: 400;
    }
  }
}
.rightbar{
  background: #F9FAFB;
  .rightbar-content{
    text-align: center;
    margin: 30px 0;
    span{
      font-weight: 400;
    }
  }
}
</style>