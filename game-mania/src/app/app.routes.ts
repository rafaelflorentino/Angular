import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { RestritoComponent } from './components/restrito/restrito.component';
import { CadastroProdutoComponent } from './components/restrito/cadastro-produto/cadastro-produto.component';
import { ListaProdutoComponent } from './components/restrito/lista-produto/lista-produto.component';
import { AtualizaProdutoComponent } from './components/restrito/atualiza-produto/atualiza-produto.component';

export const routes: Routes = [
    
    {
        path: 'inicio',
        component: InicioComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        redirectTo: '/inicio', pathMatch: 'full'    
    },
    {
        path: 'restrito', component: RestritoComponent, children:[
            { path: 'cadastro',  component: CadastroProdutoComponent },
            { path: 'lista',  component: ListaProdutoComponent},
            { path: 'editar/:id',  component: AtualizaProdutoComponent}   
        ]     
    }
];


