import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-highlight-directive',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './highlight-directive.component.html',
  styleUrl: './highlight-directive.component.scss'
})
export class HighlightDirectiveComponent {
  color = 'yellow';
}
