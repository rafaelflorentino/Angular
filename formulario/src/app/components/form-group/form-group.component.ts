import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.scss'
})
export class FormGroupComponent {
  showInfo = false;

    profileForm = new FormGroup({
      firstName: new FormControl(''),
      lastName : new FormControl(''),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl(''),
      }),
    });


    onSubmit(){
      console.warn(this.profileForm.value);
      this.showInfo=true;
      //this.profileForm.reset();
    }

    updateProfile() {
      this.profileForm.patchValue({
        firstName: 'Nancy',
        address: {
          street: '123 Drew Street',
        },
      });
    }
}
