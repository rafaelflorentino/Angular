import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TituloComponent } from './titulo/titulo.component'; // importar Aqui TituloComponent
import { RodapeComponent } from './rodape/rodape.component'; // importar Aqui RodapeComponent
import { Conteudo1Component } from './conteudo1/conteudo1.component'; // importar Aqui Conteudo1Component
import { Conteudo2Component } from './conteudo2/conteudo2.component'; // importar Aqui Conteudo2Component


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TituloComponent, RodapeComponent, Conteudo1Component,
    Conteudo2Component], // Colocar Aqui TituloComponent, RodapeComponent, Conteudo1Component ,Conteudo12omponent
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-angular';
}
