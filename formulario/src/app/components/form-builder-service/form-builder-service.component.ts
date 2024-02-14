import { Component } from '@angular/core';
import { FormBuilder,  ReactiveFormsModule,  Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder-service',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-builder-service.component.html',
  styleUrl: './form-builder-service.component.scss'
})
export class FormBuilderServiceComponent {

    profileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['',],
      address: this.formBuilder.group({
        street: [''],
        city: [''],
        state: [''],
        zip: [''],
      }),
    });

  constructor(private formBuilder: FormBuilder){}

  onSubmit(){
    console.log(this.profileForm.value);
  }

}
