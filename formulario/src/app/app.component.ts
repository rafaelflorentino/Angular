import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormModelComponent } from './components/form-model/form-model.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormModelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'formulario';
}
