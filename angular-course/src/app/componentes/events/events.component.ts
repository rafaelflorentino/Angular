import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChangeNumberComponent } from './saida/change-number/change-number.component';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, ChangeNumberComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent implements OnInit{
  show: boolean = true;
  num = 0;
  myNumber: number = 0;

  ngOnInit(): void {}

  showMessage(): void{
    //this.show = this.show ? false : true; // Ternary  Toggle
    this.show = !this.show; //Togle
  }
  incrementar(): void{
    this.num++;
  }
  onChangeNumber(){
    console.log("deu certo");
    this.myNumber = Math.floor(Math.random() * 10) + 1;
  }
}
