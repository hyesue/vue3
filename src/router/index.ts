import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import DefaultLayout from '@/components/layouts/DefaultLayout.vue'; // 기본 레이아웃 컴포넌트
import MainLayout from '@/components/layouts/MainLayout.vue'; // 다른 레이아웃 컴포넌트
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    //component: HomeView,
    component: MainLayout, // 기본 레이아웃 사용
    children: [
      {path: '', component: HomeView},
      // 다른 페이지도 여기에 추가 가능
    ],
  },
  {
    path: '/about',
    name: 'about',
    component: DefaultLayout, // DefaultLayout로 변경
    children: [
      {path: '', component: AboutView},
      // 다른 페이지도 여기에 추가 가능
    ],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    /*component: () =>
      import( webpackChunkName: "about"  '@/views/AboutView.vue'),*/
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
