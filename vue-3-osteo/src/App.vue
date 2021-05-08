<template>
  <div id="app">
      <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
              <router-link to="/" class="navbar-brand">PB</router-link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                          <router-link to="/patients" class="nav-link">Patients</router-link>
                      </li>
                      <li class="nav-item">
                          <router-link to="/consultations" class="nav-link">Consultations</router-link>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#">Facturation</a>
                      </li>
                  </ul>
              </div>
            <!-- <form class="d-flex nav-search">
                <input class="form-control me-2" type="search" placeholder="Recherche" aria-label="Search">
            </form> -->
        </div>
    </nav>  
  
    <div class="container-fluid">
      <router-view />
    </div>
    <div class="container-fluid footer">
      <div class="col"></div>
      <div class="col">
        <footer>
            <div class="row" style="margin-right:0px;margin-left:0px;">
                <div class="col-12 col-md">
                    <!-- <img class="mb-2" src="#" alt="Osteo" width="24" height="24"> -->
                    <span>PB</span>
                    <small class="d-block mb-3 text-muted">© 2021</small>
                </div>
                <div class="col-6 col-md">
                    <h5>Features</h5>
                    <ul class="list-unstyled text-small">
                    <li><a class="text-muted" href="#">Cool stuff</a></li>
                    <li><a class="text-muted" href="#">Random feature</a></li>
                    <li><a class="text-muted" href="#">Team feature</a></li>
                    <li><a class="text-muted" href="#">Stuff for developers</a></li>
                    <li><a class="text-muted" href="#">Another one</a></li>
                    <li><a class="text-muted" href="#">Last time</a></li>
                    </ul>
                </div>
                <div class="col-6 col-md">
                    <h5>Resources</h5>
                    <ul class="list-unstyled text-small">
                    <li><a class="text-muted" href="#">Resource</a></li>
                    <li><a class="text-muted" href="#">Resource name</a></li>
                    <li><a class="text-muted" href="#">Another resource</a></li>
                    <li><a class="text-muted" href="#">Final resource</a></li>
                    </ul>
                </div>
                <div class="col-6 col-md">
                    <h5>About</h5>
                    <ul class="list-unstyled text-small">
                    <li><a class="text-muted" href="#">Team</a></li>
                    <li><a class="text-muted" href="#">Locations</a></li>
                    <li><a class="text-muted" href="#">Privacy</a></li>
                    <li><a class="text-muted" href="#">Terms</a></li>
                    </ul>
                </div>
            </div>
        </footer>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
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

.footer{
 border-top: 1px solid rgb(229,231,235);
 padding: 50px 0;
}
.footer .row{
    margin-right: 0;
    margin-left: 0;
}
.navbar{
    background: #43369C;
    .navbar-brand{
        font-weight: 400;
        color: #8DA2FB;
    }
    a{
        color: rgba(255,255,255,0.8);    
    }
    .nav-search{
        input{
            background: #5452B5;
            min-width: 300px;
            border: none;
            height: 30px;
            font-size: 0.9rem;
            font-weight: 300;
            color: rgba(255,255,255,0.8);
            &::placeholder{
                color: rgba(255,255,255,0.8);
            }
        }
    }
}
</style>

