import home from '../views/home';import SignInView from '../views/Signin';const routes = [    {        path: '/',        component: home,        isRequireAuth: true,        name: 'Home',        accessLevel: 'user',    },    {        path: '/signin',        component: SignInView,        isRequireAuth: false,        accessLevel: 'none',        name: 'Sign In',    },];export { routes };