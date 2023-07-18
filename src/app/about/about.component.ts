import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  jsonData: any[] = [
    {
        "id":1,
        "url":"../../assets/images/team1.png",
        "name":"John Smith",
        "post":"CEO"
    },
    {
        "id":2,
        "url":"../../assets/images/team2.png",
        "name":"Simon Adams",
        "post":"CTO"
    },
    {
        "id":3,
        "url":"../../assets/images/team3.png",
        "name":"Paul Jones",
        "post":"Design Lead"
    },
    {
        "id":4,
        "url":"../../assets/images/team4.png",
        "name":"Sara Hardin",
        "post":"Project Manager"
    }

  ];
  gData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.myData();
  }

    
  myData(): void {
    this.http.get<any>('assets/db.json').subscribe((result) => {
      this.gData = result.gData.slice(0, 3); 
      console.log(this.gData);
    });
  }
  
}
