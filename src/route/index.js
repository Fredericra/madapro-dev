import { createWebHistory,createRouter } from "vue-router";

import About from "../Pages/About.vue";
import Home from "../Pages/Home.vue";
import Not from "../Pages/NotFound.vue";
import Mission from "../Pages/Mission.vue"

const routes = [
    {path:"",component:Home},
    {path:"/about",component:About},
    {path:"/mission",component:Mission},
    {path:"/:catch(.*)*",component:Not}
];
const router = new createRouter({
    history:createWebHistory(),
    routes
});
export default router;