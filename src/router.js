import Vue from 'vue';
import VueRouter from 'vue-router';
import PageOne from './views/PageOne';
import PageTwo from './views/PageTwo';

Vue.use(VueRouter);

const routes=[
    {
        path:'/pageone',
        component:PageOne
    },
    {
        path:'/pagetwo',
        component:PageTwo
    }
];

const router=new VueRouter({
    routes
});

export default router;