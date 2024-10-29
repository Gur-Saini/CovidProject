import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidDataService {
  private selectedItem: any;

  constructor(private http: HttpClient) {}

  fetchData(): Observable<CovidData[]> {
    return this.http.get<CovidData[]>('/assets/data/cases.json'); 
  }

 
  setSelectedItem(item: CovidData) {
    this.selectedItem = item;
  }

  
  getSelectedItem(): CovidData {
    return this.selectedItem;
  }
}

export interface CovidData {
  report_date: string;
  previous_day_total_doses_administered: number;
  previous_day_at_least_one: number;
  previous_day_fully_vaccinated: number;
  total_individuals_at_least_one: number;
  total_individuals_partially_vaccinated: number;
}
