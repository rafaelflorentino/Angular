import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss'
})
export class DirectivesComponent {
  size = 40;
  font = 'Arial';
  color ='pink';

  classes =['green-title', 'small-title'];
  underline = ['underline-title'];

  canShow: boolean = true;
  name: string = "lucas";

}
