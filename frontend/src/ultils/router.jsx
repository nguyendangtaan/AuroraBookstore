export const ROUTERS = {
 
  USER: {
    HOME: "/",
    CATALOG: "/catalog",
    LOGIN: "/login",
    TESTDETAIL: "/detail/:bookId",
    CART: "/usercart",
    ABOUTUS: "/AboutUs",
    ERROR: "/404",
    USERINFO: "/user/*"
  },
  ADMIN: {
    DASHBOARD: '/dashboard',
    USERS: '/users',
    PRODUCTS: '/products',
    ORDER: '/order',
    ADDBOOK: "/add-book",
    EDITBOOK: "/edit-book/*"
  },
  ADMIN:{
    DASHBOARD: 'dashboard',
    USERS: 'users',
    PRODUCTS: 'products',
    ORDER: 'order',
    ADDBOOK:"add-book",
    EDITBOOK:"edit-book/:id"
  },
};
