<template>
  <div class="row">
    <router-link to="/patients/add"><button type="button" class="btn btn-primary">Nouveau patient</button></router-link>
    <br>
    <br>
    <div class="patient-list-container col-lg">
      <div class="patient-list-header">
        <span class="patient-list-title">Patients</span>
        <input type="search" class="form-control" placeholder="Rechercher un patient" v-model="patientLastName" v-on:keyup.enter="onEnter" >
      </div> 
      <div class="patient-list-content">
        <br>
        <ol class="list-group list-group-numbered">
          <div class="patient-card" v-for="(patient, index) in patients" :key="index">
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold"><router-link :to="'/patients/' + patient.id"><span class="patient-name">{{ patient.firstName }} {{ patient.lastName }}</span></router-link></div>
                Dernière consultation : JJ/MM/AAAA
              </div>
              <span class="badge bg-primary rounded-pill"><router-link :to="'/patients/update/' + patient.id">Éditer</router-link></span>
            </li>            
            <hr>
          </div>
        </ol>
      </div>  
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
a{
  text-decoration: none;
}
.rounded-pill a{
  color: #fff;
}
// .pbbtn{
//   font-size: 0.9rem;
//   font-weight: 400;
//   border: none;
//   border-radius: 5px;
//   padding: 5px 0;
//   display: block;
// }
// .sidebar, .patient-list-container{
//   min-height: 100vh;
// }
// .sidebar{
//   .sidebar-content{
//     margin: 30px 0;
//     .pbbtn-primary{
//       background: #5950EA;
//       color: #fff;
//       width: 80%;
//       margin: 0 auto 12px auto;
//       border: 1px solid #5950EA;
//     }
//     .pbbtn-secondary{
//       background: #fff;
//       color: #6F7884;
//       width: 80%;
//       border: 1px solid #C3C8CE;
//       margin: auto;
//     }
//   }
// }
.patient-profile-container{
  display: flex;
  width: 80%;
  margin: 0 auto 20px auto;
  img{
    border-radius: 100%;
    width: 40px;
    float: left;
  }
  .profile-name{
    width: calc(100% - 50px);
    float: right;
    font-size: 0.8rem;
    font-weight: 400;
    margin-left: 10px;
  }
}
// .patient-list-container{
//   padding: 0;
//   border-right: 1px solid rgb(229,231,235);
//   border-left: 1px solid rgb(229,231,235);
//   .patient-list-header{
//     padding-left: 30px;
//     height: 80px;
//     border-bottom: 1px solid rgb(229,231,235);
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     .patient-list-title{
//       float: left;
//       font-size: 1.2rem;
//       font-weight: 400;
//     }
//     input{
//       margin-right: 30px;
//       max-width: 350px;
//       border: 1px solid #C3C8CE;
//       font-weight: 300;
//       height: 30px;
//       &::placeholder{
//         color: #6F7884;
//       }
//     }
//   }
// }
// .patient-list-content{
//   .patient-card{
//     width: 100%;
//     padding:0 30px;
//     height: 80px;
//     border-bottom: 1px solid rgb(229,231,235);
//     font-size: 0.9rem;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     .patient-card-content{
//       .patient-name{
//         font-weight: 400;
//       }
//       .patient-last-consultation{
//         font-weight: 400;
//         color: #6F7884;
//       }
//     }
//   }
//   .patient-num{
//     b{
//       font-weight: 400;
//     }
//   }
// }
// .rightbar{
//   background: #F9FAFB;
//   .rightbar-content{
//     text-align: center;
//     margin: 30px 0;
//     span{
//       font-weight: 400;
//     }
//   }
// }
</style>