import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  myData: any;

  constructor(private http: HttpClient) {
  }
 
  ngOnInit(): void {
    this.getData();
  }
  getData(): void {
    this.http.get<any>('assets/db.json').subscribe((result) => {
      this.myData = result.gData;
      console.log(this.myData);
    });
  }
  }


