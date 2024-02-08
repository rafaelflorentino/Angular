import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, CursosComponent
  ],
  exports: [CursosComponent]
})
export class CursosModule { }
