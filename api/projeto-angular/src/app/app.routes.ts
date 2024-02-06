import { Routes } from '@angular/router';
import { Conteudo1Component } from './conteudo1/conteudo1.component';
import { Conteudo2Component } from './conteudo2/conteudo2.component';


export const routes: Routes = [
    {path: 'conteudo1', component: Conteudo1Component},
    {path: 'conteudo2', component: Conteudo2Component}
];
