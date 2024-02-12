import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { TypecodeComponent } from './componentes/typecode/typecode.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'typecode',
        component: TypecodeComponent,
      },
];
