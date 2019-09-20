// 引入路由组件
import HomePage from '../pages/HomePage/HomePage.vue'
import Category from '../pages/Category/Category.vue'
import General from '../pages/General/General.vue'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart.vue'
import Personal from '../pages/Personal/Personal.vue'
// 注册路由组件
export default [{
    path: '/homepage',
    component: HomePage,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/category',
    component: Category,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/general',
    component: General,
    meta: {
      showFooter: true
    }

  },
  {
    path: '/shoppingcart',
    component: ShoppingCart,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/personal',
    component: Personal
  },
  { // 重定向到首页
    path: '/',
    redirect: '/homepage'
  }
]