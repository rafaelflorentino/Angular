import { Routes } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { FormModelComponent } from './components/form-model/form-model.component';
import { FormsComponent } from './components/forms/forms.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { FormBuilderServiceComponent } from './components/form-builder-service/form-builder-service.component';
import { FormArrayComponent } from './components/form-array/form-array.component';
import { FormMomentsComponent } from './components/form-moments/form-moments.component';
import { NewMomentComponent } from './components/new-moment/new-moment.component';

export const routes: Routes = [
    {
        path: '',
        component: CadastroComponent
    },
    {
        path: 'form',
        component: FormModelComponent
    },
    {
        path: 'forms',
        component: FormsComponent
    },
    {
        path: 'reactive',
        component: ReactiveFormComponent
    },
    {
        path: 'formGroup',
        component: FormGroupComponent
    },
    {
        path: 'formBuilder',
        component: FormBuilderServiceComponent
    },
    {
        path: 'formArray',
        component: FormArrayComponent
    },
    {
        path: 'moments',
        component: NewMomentComponent
    }

];
