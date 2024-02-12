import { Component } from '@angular/core';
import { MeuPrimeiroComponent } from '../meu-primeiro/meu-primeiro.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MeuPrimeiroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  teste = 'Meu texto na variavel na Home';


  handleEvent(){
    console.log("evento 2 acontceu na home.ts");
  }


}
