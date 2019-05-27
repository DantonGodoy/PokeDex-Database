import Home from './components/home/Home';
import Register from './components/register/Register';

export const ROUTES = [
  { path: '', component: Home, title: 'Home' },
  { path: '/cadastro', component: Register, title: 'Cadastro' }
];