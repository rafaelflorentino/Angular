import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { MenuRestritoComponent } from './menu-restrito/menu-restrito.component';

@Component({
  selector: 'app-restrito',
  standalone: true,
  imports: [RouterLink, MenuRestritoComponent, RouterModule],
  templateUrl: './restrito.component.html',
  styleUrl: './restrito.component.scss'
})
export class RestritoComponent {

}
