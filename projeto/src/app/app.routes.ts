import { Routes } from '@angular/router';
import { MeuSegundoComponent } from './meu-segundo/meu-segundo.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'segundo',
        component: MeuSegundoComponent
    },
    {
        path: '**',
        component: HomeComponent
    },
];
