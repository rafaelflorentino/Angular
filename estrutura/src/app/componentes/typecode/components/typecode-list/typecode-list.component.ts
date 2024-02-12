import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Typecode } from '../../model/typecode';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-typecode-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './typecode-list.component.html',
  styleUrl: './typecode-list.component.scss'
})
export class TypecodeListComponent {
  @Input() typecode!: Typecode[];
  @Output() typecodeevents = new EventEmitter<Typecode>();
}
