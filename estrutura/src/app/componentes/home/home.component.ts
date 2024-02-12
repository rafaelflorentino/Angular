import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PeopleComponent } from './component/people/people.component';
import { People } from './model/people.interface';
import { PeopleService } from './service/people.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PeopleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit   {
  pessoas!: People[];

  constructor(private srv: PeopleService) {}

  ngOnInit(): void {
    this.srv.getPeople().subscribe(result => this.pessoas = result)
  }

}
