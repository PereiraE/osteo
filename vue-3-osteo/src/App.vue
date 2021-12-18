<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Patients.io</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/patients" class="nav-link">Accueil</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>  
    <div class="container-fluid">
      <br>
      <router-view />
    </div>

</div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
    };
  },
  methods:{

  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap');

*{
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    outline: none;
}

textarea:focus, 
textarea.form-control:focus, 
input.form-control:focus, 
input[type=text]:focus, 
input[type=password]:focus, 
input[type=email]:focus, 
input[type=number]:focus, 
[type=text].form-control:focus, 
[type=password].form-control:focus, 
[type=email].form-control:focus, 
[type=tel].form-control:focus, 
[contenteditable].form-control:focus {
  box-shadow: inset 0 -1px 0 transparent;
}

// .footer{
//  border-top: 1px solid rgb(229,231,235);
//  padding: 50px 0;
// }
// .footer .row{
//     margin-right: 0;
//     margin-left: 0;
// }
// .navbar{
//     background: #43369C;
//     .navbar-brand{
//         font-weight: 400;
//         color: #8DA2FB;
//     }
//     a{
//         color: rgba(255,255,255,0.8);    
//     }
//     .nav-search{
//         input{
//             background: #5452B5;
//             min-width: 300px;
//             border: none;
//             height: 30px;
//             font-size: 0.9rem;
//             font-weight: 300;
//             color: rgba(255,255,255,0.8);
//             &::placeholder{
//                 color: rgba(255,255,255,0.8);
//             }
//         }
//     }
// }
</style>

