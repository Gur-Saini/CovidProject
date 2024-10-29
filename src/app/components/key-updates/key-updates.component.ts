import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Updates } from '../../interface';

@Component({
  selector: 'app-key-updates',
  templateUrl: './key-updates.component.html',
  styleUrls: ['./key-updates.component.scss'],
})
export class KeyUpdatesComponent  implements OnInit {
  update: Updates[] = [];
 

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Updates[]>('assets/data/updates.json').subscribe(
      data => {
        this.update = data;
  
      }
    );
  }

}
