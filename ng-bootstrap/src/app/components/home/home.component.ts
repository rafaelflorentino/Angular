import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdCarouselPause } from '../carousel-pause/carousel-pause.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgbModule, NgbdCarouselPause],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
