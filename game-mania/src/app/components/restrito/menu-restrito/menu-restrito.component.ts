import { Component } from '@angular/core';
import { MatToolbarModule} from '@angular/material/toolbar';
import { Router, RouterLink } from '@angular/router';



@Component({
  selector: 'app-menu-restrito',
  standalone: true,
  imports: [MatToolbarModule, RouterLink],
  templateUrl: './menu-restrito.component.html',
  styleUrl: './menu-restrito.component.scss'
})
export class MenuRestritoComponent {

  constructor( private _router: Router){}

  logout(){
    localStorage.clear();
    
    this._router.navigate(['/login']);
  }
}
