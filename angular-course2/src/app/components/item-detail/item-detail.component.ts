import { ListService } from './../../../../../angular-course2/src/app/services/list.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Pessoa } from '../../interfaces/Pessoa';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.scss'
})
export class ItemDetailComponent implements OnInit {
  pessoa?: Pessoa;

  constructor(private ListService: ListService, private route: ActivatedRoute){
    this.getPessoa();
  }

  ngOnInit(): void{}

  getPessoa(){
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.ListService.getItem(id).subscribe((pessoa) => (this.pessoa = pessoa));
  }

}
