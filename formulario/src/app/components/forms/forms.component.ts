import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {
   nome="";

  form!: FormGroup;

  ngOnInit():void {

    this.form = new FormGroup({
      firstName: new FormControl('',  Validators.required),
      lastName: new FormControl('',  Validators.required),
      email: new FormControl('',  Validators.required),
    });
  }
  get firstName(){
    return this.form.get('firstName')!;
  }
  get lastName(){
    return this.form.get('lastName')!;
  }
  get email(){
    return this.form.get('lastName')!;
  }

  submitApplication(){

    if(this.form.invalid){
      return;
    }else{
      console.log('Enviou Formulario');
      console.log(this.form.value);
    }
    
  }


}
