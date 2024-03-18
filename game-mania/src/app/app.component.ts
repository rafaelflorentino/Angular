import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MenuComponent } from './components/menu/menu.component';
import { LoginComponent } from './components/login/login.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    MatInputModule, 
    MatMenuModule, 
    MatToolbarModule, 
    MatButtonModule, 
    MatCardModule, 
    MatFormFieldModule, 
    MatGridListModule, 
    MatIconModule, 
    MenuComponent,
    LoginComponent, 
    RodapeComponent,
    InicioComponent, 
    RouterLink,
    ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'Game Mania';
  //mostrarMenu:boolean = true;

  constructor(){}

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
   // localStorage.clear();
    
  }
}
