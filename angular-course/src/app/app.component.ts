import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './componentes/first-component/first-component.component';
import { DirectivesComponent } from './componentes/directives/directives.component';
import { EventsComponent } from './componentes/events/events.component';
import { ListRenderComponent } from './componentes/list-render/list-render.component';
import { PipesComponent } from './componentes/pipes/pipes.component';
import { ToWayBindingComponent } from './componentes/to-way-binding/to-way-binding.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FirstComponentComponent, DirectivesComponent, EventsComponent, ListRenderComponent, PipesComponent, ToWayBindingComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-course';
  dadoPai = 'nome do pai App.components.ts';

  userData ={
    email: 'joao@gmail.com',
    role: 'Admin'
  }
}
