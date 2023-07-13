import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';
  // cards: any;

  constructor(private http: HttpClient) {

  }

  // ngOnInit(): void {
  //   this.http.get('assets/db.json').subscribe((data) => {
  //     // Access the data from db.json
  //    this.cards=data
  //    console.log()
  //   });
  // }
  }

