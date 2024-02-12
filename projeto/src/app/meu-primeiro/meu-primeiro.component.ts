import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-meu-primeiro',
  standalone: true,
  imports: [],
  templateUrl: './meu-primeiro.component.html',
  styleUrl: './meu-primeiro.component.css'
})
export class MeuPrimeiroComponent {
  

  @Input() myProp: string = '';
  @Output() newItemEvent= new EventEmitter<string>();



  handleEvent(){
    console.log("evento 2 acontceu na primeiro.ts");
  }
}
