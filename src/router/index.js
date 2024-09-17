import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Jobs from '../views/Jobs.vue';
import AddJobs from '../views/AddJobs.vue';
import NotFound from '../views/NotFound.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home, name: 'home' },
    { path: '/jobs', component: Jobs },
    { path: '/jobs/add', component: AddJobs },
    { path: '/:pathMatch(.*)*', component: NotFound },
  ]
});

export default router;

