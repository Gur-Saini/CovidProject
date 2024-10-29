import { Component, OnInit } from '@angular/core';
import { CovidDataService } from '../covid-data.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-page',
  templateUrl: './page.page.html',
  styleUrls: ['./page.page.scss'],
})
export class PagePage implements OnInit {

  selectedItem: any;
  message: string = '';  

  constructor(private dataService: CovidDataService, private messageService: MessageService) {}

  ngOnInit() {
    this.selectedItem = this.dataService.getSelectedItem();
    this.messageService.currentMessage.subscribe(message => {
      this.message = message;
    });
    
  }

 
  sendMessage() {
    this.messageService.changeMessage(this.message);
  }
}
