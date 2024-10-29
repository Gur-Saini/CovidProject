import { Component,OnInit } from '@angular/core';
import { CovidDataService } from '../covid-data.service';
import { Router } from '@angular/router';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  items: any[] = [];
  message: string='';

  constructor(private dataService: CovidDataService, private router: Router,private messageService: MessageService) {}

  ngOnInit() {
    this.dataService.fetchData().subscribe(data => {
      this.items = data;
    });
    this.messageService.currentMessage.subscribe(message => this.message = message);
  }

  selectItem(item: any) {
    this.dataService.setSelectedItem(item);
    this.router.navigate(['/page']);
  }
  goToPage() {
    this.router.navigate(['/page']);
  }

}
