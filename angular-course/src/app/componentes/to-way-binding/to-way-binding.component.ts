import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-way-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './to-way-binding.component.html',
  styleUrl: './to-way-binding.component.scss'
})
export class ToWayBindingComponent {
  name: string = '';
}
