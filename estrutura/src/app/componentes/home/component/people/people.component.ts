import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { People } from '../../model/people.interface';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './people.component.html',
  styleUrl: './people.component.scss'
})
export class PeopleComponent {
  @Input() people!: People[];
}
