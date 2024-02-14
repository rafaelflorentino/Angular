import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-way-binding',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './to-way-binding.component.html',
  styleUrl: './to-way-binding.component.scss'
})
export class ToWayBindingComponent {
  name: string = '';
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    addres: new FormGroup({
       rua: new FormControl(''),
       numero: new FormControl('')
    })
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
}
