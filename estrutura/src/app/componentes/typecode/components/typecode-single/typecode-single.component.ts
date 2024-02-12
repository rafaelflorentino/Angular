import { Component, Input } from '@angular/core';
import { Typecode } from '../../model/typecode';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-typecode-single',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './typecode-single.component.html',
  styleUrl: './typecode-single.component.scss'
})
export class TypecodeSingleComponent {
  @Input() typecode!: Typecode;
}
