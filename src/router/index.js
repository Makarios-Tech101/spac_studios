import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue';
import Gallery from '../views/Gallery.vue';
import Pricing from '@/views/Pricing.vue';
import Contact from '../views/Contact.vue';
import PortraitsAndHeadshots from '../views/OurServices/PortraitsAndHeadshots.vue';
import WeddingAndEvents from '../views/OurServices/WeddingAndEvents.vue';
import BirthdayShoots from '../views/OurServices/BirthdayShoots.vue';
import ChildPhotography from '../views/OurServices/ChildPhotography.vue';
import CorporateEvents from '../views/OurServices/CorporateEvents.vue';
import FashionPhotography from '../views/OurServices/FashionPhotography.vue';
import OutdoorShoots from '../views/OurServices/OutdoorShoots.vue';
import ProductPhotography from '../views/OurServices/ProductPhotography.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about-us',
      name: 'about',
      component: About,
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery,
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: Pricing,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/#',
      name: 'OurServices',
      // component: OurService,
      children: [
        {
          path: '/portraits-and-headshots',
          name: 'PortraitsAndHeadshots',
          component: PortraitsAndHeadshots
        },
        {
          path: '/wedding-and-events',
          name: 'WeddingAndEvents',
          component: WeddingAndEvents
        },
        {
          path: '/birthday-shoots',
          name: 'BirthdayShoots',
          component: BirthdayShoots
        },
        {
          path: '/child-photography',
          name: 'ChildPhotography',
          component: ChildPhotography
        },
        {
          path: '/corporate-events',
          name: 'CorporateEvents',
          component: CorporateEvents
        },
        {
          path: '/fashion-photography',
          name: 'FashionPhotography',
          component: FashionPhotography
        },
        {
          path: '/outdoor-shoots',
          name: 'OutdoorShoots',
          component: OutdoorShoots
        },
        {
          path: '/product-photography',
          name: 'ProductPhotography',
          component: ProductPhotography
        }
      ]
     }
  ],
})

export default router
