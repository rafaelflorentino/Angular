import { Moment } from './../form-moments/Moment';
import { Component, OnInit } from '@angular/core';
import { FormMomentsComponent } from '../form-moments/form-moments.component';
import { MommentService } from '../../services/momment.service';

@Component({
  selector: 'app-new-moment',
  standalone: true,
  imports: [FormMomentsComponent],
  templateUrl: './new-moment.component.html',
  styleUrl: './new-moment.component.scss'
})
export class NewMomentComponent implements OnInit{
  btnText = 'Compartilhar';
  ngOnInit(): void {}

  constructor(private momentService: MommentService){}

  async createHandler(moment: Moment){
    const formData = new FormData();

    formData.append("title", moment.title);
    formData.append("description", moment.description);

    if(moment.image){
      formData.append('image', moment.image);
    }
    //await this.momentService.createMoment(formData).subscribe();
  }

}
