import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CovidStatus } from '../../interface';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent  implements OnInit {

  data: CovidStatus[] = [];
 

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<CovidStatus[]>('assets/data/status.json').subscribe(
      data => {
        this.data = data;
  
      }
    );
  }


}
