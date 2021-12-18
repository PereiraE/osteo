<template>
  <div class="row">
    <div class="col-md-6">
      <form>
        <div class="row">
            <div class="col">
                <label for="mail" class="form-label">Email</label>
                <input type="email" class="form-control" id="mail" v-model="user.mail">
            </div>
            <div class="col">
                <label for="password" class="form-label">Mot de passe</label>
                <input type="password" class="form-control" id="password" v-model="user.password">
            </div>
        </div>
        <br>
        <button type="button" @click="signIn" class="btn btn-primary">Se connecter</button>
      </form>
      <hr>
      <form>
        <div class="row">
          <div class="col">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" v-model="user.email">
          </div>
          <div class="col">
            <label for="passwordd" class="form-label">Mot de passe</label>
            <input type="password" class="form-control" id="passwordd" v-model="user.passwordd">
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="firstName" class="form-label">Prénom</label>
            <input type="firstName" class="form-control" id="firstName" v-model="user.firstName">
          </div>
          <div class="col">
            <label for="lastName" class="form-label">Nom</label>
            <input type="lastName" class="form-control" id="lastName" v-model="user.lastName">
          </div>
        </div>
        <br>
        <button @click="signUp" class="btn btn-primary">Créer mon compte</button>
      </form>
    </div> 
  </div>
</template>

<script>
import UserDataService from "../services/UserDataService";

export default {
  name: "auth",
  data() {
    return {
      user: {
        mail: "",
        password: "",
        firstName :"",
        lastName :""
      }
    };
  },
  methods: {
    signUp() {
      var data = {
        mail: this.user.mail,
        password: this.user.password,
        firstName: this.user.firstName,
        lastName: this.user.lastName
      };
      console.table(data);

      UserDataService.signup(data)
        .then(response => {
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    signIn() {
      var data = {
        mail: this.user.mail,
        password: this.user.password
      };
      console.table(data);

      UserDataService.login(data)
        .then(response => {
          console.log(response.data);
          localStorage.setItem('user-token', response.data.token);
          this.$router.push({name:'patients-list'});
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<style>

</style>