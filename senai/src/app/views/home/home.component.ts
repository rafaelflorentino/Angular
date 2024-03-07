import { Component, OnInit } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  public titulo: string ='';
  public texto: string ='';

  classToDiv = {};

  constructor(){
    this.classToDiv ={
      'text-sucess': true
    };
  }

  ngOnInit(): void {
    this.titulo ="Home Page Titulo";
    this.texto ="Lorem ipsum dolor sit Porro aperiam molestiae repudiandae et voluptatibus corporis numquam, dicta consectetur, explicabo exercitationem harum esse, id architecto minus eum voluptatem.";
    
  }
}
