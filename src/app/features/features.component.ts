import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
  gData: any;

  constructor(private http: HttpClient) { }
  myData(): void {
    this.http.get<any>('assets/db.json').subscribe((result) => {
      this.gData = result.gData;
      console.log(this.gData);
    });
  }
  ngOnInit(): void {
    this.myData();
  }
}
