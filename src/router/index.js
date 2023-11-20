import {createRouter, createWebHistory} from 'vue-router';
import About from '../Views/About.vue';
import Home from '../Views/Home.vue';
import NotFound from '../Views/NotFound.vue';
import Jobs from '../Views/jobs/Jobs.vue';
import JobDetails from '../Views/jobs/JobDetails.vue';

const routes = [
{
    path: "/",
    name: "Home",
    component : Home
},
{
    path: "/about",
    name: "About",
    component: About
},
{
    path: "/jobs",
    name: "Jobs",
    component: Jobs
},
{
    path: "/jobs/:id",
    name: "JobDetails",
    component: JobDetails,
    props: true
},
{
    path: "/all-jobs",
    redirect: "/jobs"
},
{
    path: '/:catchAll(.*)',
    name: "NotFound",
    component: NotFound
}
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router