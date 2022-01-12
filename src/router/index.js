import { createRouter, createWebHistory } from 'vue-router'
import { LoginCallback, navigationGuard } from '@okta/okta-vue'
import Home from '@/views/Home'
import AboutView from '@/views/About'
import LoginView from '@/views/Login'
import ProfileView from '@/views/Profile'
import UserListView from '@/views/UserList'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: AboutView
  },
  {
    path: '/login',
    component: LoginView
  },
  {
    path: '/login/callback',
    component: LoginCallback
  },
  {
    path: '/profile',
    component: ProfileView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/user-list',
    component: UserListView,
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes: routes
})

router.beforeEach(navigationGuard)

export default router
