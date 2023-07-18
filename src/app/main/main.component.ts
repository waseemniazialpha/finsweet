import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent  implements OnInit {
  jsonData: any[] = [
    {
        "id":1,
        "num":"01",
        "title":"How much time does it take?",
        "detail":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        "id":2,
        "num":"02",
        "title":"What is your class naming convention?",
        "detail":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        "id":3,
        "num":"03",
        "title":"How do you communicate?",
        "detail":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        "id":4,
        "num":"04",
        "title":"I have a bigger project. Can you handle it?",
        "detail":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        "id":5,
        "num":"05",
        "title":"What is your class naming convention?",
        "detail":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];
  gData: any;
  combinedData: any[] = [];
  showParagraph: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.myData();
    this.getData();
  }
  currentItemIndex: number = -1;

  toggleParagraph(index: number) {
    if (this.currentItemIndex === index) {
      this.currentItemIndex = -1; // Hide the currently shown <p> tag
    } else {
      this.currentItemIndex = index; // Show the <p> tag for the clicked item
    }
  }
  
  
  
  myData(): void {
    this.http.get<any>('assets/db.json').subscribe((result) => {
      this.gData = result.gData;
      console.log(this.gData);
    });
  }

  getData(): void {
    forkJoin([
      this.http.get<any>('https://jsonplaceholder.typicode.com/photos'),
      this.http.get<any>('https://jsonplaceholder.typicode.com/comments')
    ]).subscribe((data: any[]) => {
      const photosData = data[0].slice(0, 3);
      const commentsData = data[1].slice(0, 3);

      const mergedData = photosData.map((photo: any, index: number) => {
        return {
          ...photo,
          body: commentsData[index]?.body,
          name: commentsData[index]?.name
        };
      });
      

      this.combinedData = mergedData;

      // console.log(this.combinedData);
    });
  }
}


