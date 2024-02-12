import { Component, OnInit } from '@angular/core';
import { Typecode } from './model/typecode';
import { TypecodeService } from './services/typecode.service';
import { TypecodeListComponent } from './components/typecode-list/typecode-list.component';
import { TypecodeSingleComponent } from './components/typecode-single/typecode-single.component';

@Component({
  selector: 'app-typecode',
  standalone: true,
  imports: [TypecodeListComponent, TypecodeSingleComponent],
  templateUrl: './typecode.component.html',
  styleUrl: './typecode.component.scss'
})
export class TypecodeComponent implements OnInit {
  typeList: Typecode[] = [];
  typeCodeSingle!: Typecode

  constructor(private srv: TypecodeService) {}

  ngOnInit(): void {
    this.srv.getTypes().subscribe((types) => (this.typeList = types));
  }

  setType(type: Typecode): void {
    this.typeCodeSingle = type;
  }
}
