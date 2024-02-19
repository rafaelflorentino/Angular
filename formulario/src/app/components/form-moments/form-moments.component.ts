import { Comment } from './Comment';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Moment } from './Moment';
import { MessagesComponent } from '../messages/messages.component';


@Component({
  selector: 'app-form-moments',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MessagesComponent],
  templateUrl: './form-moments.component.html',
  styleUrl: './form-moments.component.scss'
})
export class FormMomentsComponent implements OnInit {
   @Output() onSubmit = new EventEmitter<Moment>()
   @Input() btnText!: string;
  
  momentForm!: FormGroup;

  constructor(){}

  ngOnInit():void{
    this.momentForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl(''),
    });
  }

  get title(){
    return this.momentForm.get('title')!;
  }

  get description(){
    return this.momentForm.get('description')!;
  }

  onFileSelected(event: any){
    const file: File = event.target.files[0];
    this.momentForm.patchValue({image: file});
  }

  submit(){
    if(this.momentForm.invalid){
      return;
    }else{
      console.log(this.momentForm.value);

      this.onSubmit.emit(this.momentForm.value);
    }
    
  }
}
