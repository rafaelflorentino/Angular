import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-number',
  standalone: true,
  imports: [],
  templateUrl: './change-number.component.html',
  styleUrl: './change-number.component.scss'
})
export class ChangeNumberComponent implements OnInit{
  @Output() changeNumber: EventEmitter<any> = new EventEmitter();

  ngOnInit(){

  }

  handleClick(){
    this.changeNumber.emit();
  }

}
