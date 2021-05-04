import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/patients",
    name: "patients",
    component: () => import("./components/PatientsList")
  },
  {
    path: "/patients/:id",
    name: "patient-details",
    component: () => import("./components/Patient")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddPatient")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;