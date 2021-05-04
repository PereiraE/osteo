import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/patients",
    name: "patients",
    component: () => import("./components/PatientsList")
  },
  {
    path: "/patients/update/:id",
    name: "patient-details",
    component: () => import("./components/UpdatePatient")
  },
  {
    path: "/patients/add",
    name: "add",
    component: () => import("./components/AddPatient")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;