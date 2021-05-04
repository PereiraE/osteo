import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/patients",
    name: "patients-list",
    component: () => import("./components/PatientsList")
  },
  {
    path: "/patients/:id",
    name: "patient",
    component: () => import("./components/Patient")
  },
  {
    path: "/patients/update/:id",
    name: "update-patient",
    component: () => import("./components/UpdatePatient")
  },
  {
    path: "/patients/add",
    name: "add-patient",
    component: () => import("./components/AddPatient")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;