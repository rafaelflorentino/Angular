import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { JogosComponent } from './views/jogos/jogos.component';
import { ContatoComponent } from './views/contato/contato.component';

export const routes: Routes = [

    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'jogos',
        component: JogosComponent
    },
    {
        path: 'contato',
        component: ContatoComponent
    }
];
