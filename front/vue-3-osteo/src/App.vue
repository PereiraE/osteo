<template>
  <div id="app">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
              <router-link to="/" class="navbar-brand">PatientBook</router-link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                      <li class="nav-item">
                          <router-link to="/patients" class="nav-link">Patients</router-link>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#">Consultation</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#">Facturation</a>
                      </li>
                  </ul>
              </div>
        </div>
    </nav>  
  
    <div class="container mt-3">
      <router-view />
    </div>
    <div class="container">
      <div class="col"></div>
      <div class="col">
        <footer style="margin-top:50px;border-top:1px solid lightgray;padding-top:20px;">
            <div class="row" style="margin-right:0px;margin-left:0px;">
                <div class="col-12 col-md">
                    <!-- <img class="mb-2" src="#" alt="Osteo" width="24" height="24"> -->
                    <span>PatientBook</span>
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

<style scoped>
.footer{
  background: red;
}
.footer .row{
    margin-right: 0;
    margin-left: 0;
}
</style>

