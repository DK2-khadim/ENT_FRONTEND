import Dashboard from "./views/Dashboard.js";
import Notes from "./views/Notes";
import Modules from "./views/Modules";


var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboard,
    layout: "/etudiant",
  },
  {
    path: "/modules",
    name: "Modules",
    icon: "design_app",
    component: Modules,
    layout: "/etudiant",
  },
  {
    path: "/notes",
    name: "Notes",
    icon: "design_app",
    component: Notes,
    layout: "/etudiant",
  }
  
];
export default dashRoutes;