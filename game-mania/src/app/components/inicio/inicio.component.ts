import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { LoginComponent } from '../login/login.component';
import { RodapeComponent } from '../rodape/rodape.component';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [MenuComponent, MatCardModule, MatButtonModule, MatGridListModule, LoginComponent, RodapeComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

}
