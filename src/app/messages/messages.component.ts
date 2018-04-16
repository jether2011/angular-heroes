import { Component, OnInit } from '@angular/core';

import { MessageProviderService } from '../services/message-provider.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageProvider: MessageProviderService) { }

  ngOnInit() {
  }
  
}
