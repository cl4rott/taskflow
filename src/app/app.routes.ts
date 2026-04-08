import { Routes } from '@angular/router';

export const routes: Routes = [
  {
  path: '',
  redirectTo: 'inicio',
  pathMatch: 'full',
},
  {
    path: 'inicio',
  loadComponent: () => import('./pages/inicio/inicio.page').then(m => m.InicioPage)
    },
  {
  path: 'login',
  loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'cadastro',
  loadComponent: () => import('./pages/cadastro/cadastro.page').then(m => m.CadastroPage)
  },

  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'nova-tarefa',
    loadComponent: () => import('./pages/nova-tarefa/nova-tarefa.page').then( m => m.NovaTarefaPage)
  },
  {
    path: 'editar-tarefa',
    loadComponent: () => import('./pages/editar-tarefa/editar-tarefa.page').then( m => m.EditarTarefaPage)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./pages/perfil/perfil.page').then( m => m.PerfilPage)
  },
  {
    path: 'sobre',
    loadComponent: () => import('./pages/sobre/sobre.page').then( m => m.SobrePage)
  },
];
