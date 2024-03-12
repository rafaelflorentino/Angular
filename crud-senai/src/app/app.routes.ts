import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListarClienteComponent } from './components/listar-cliente/listar-cliente.component';
import { CadastrarClienteComponent } from './components/cadastrar-cliente/cadastrar-cliente.component';
import { AtualizarClienteComponent } from './components/atualizar-cliente/atualizar-cliente.component';

export const routes: Routes = [

  { 
    path: 'listar', 
    component: ListarClienteComponent 
  },
  {
    path: 'cadastrar', 
    component: CadastrarClienteComponent 
  },
  { 
    path: 'editar/:id', 
    component: AtualizarClienteComponent 
  },
  { path: '', redirectTo: '/listar', pathMatch: 'full' },
];
