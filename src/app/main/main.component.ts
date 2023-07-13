import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  cards: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('https://jsonplaceholder.typicode.com/photos').subscribe((data) => {
      // Access the data from db.json
      const sliceData = data.slice(0 ,6)
      this.cards = sliceData;
      
      // console.log(this.cards);
    });
  }

}
