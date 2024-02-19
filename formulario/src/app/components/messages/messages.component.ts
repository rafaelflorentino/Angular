import { Component } from '@angular/core';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { MessagesService } from '../../services/messages.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent {
  faTimes = faTimes;

  constructor(public messagesService: MessagesService){}

}
