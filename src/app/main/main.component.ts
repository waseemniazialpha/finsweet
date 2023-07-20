
import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, interval } from 'rxjs';

interface Star {
  x: number;
  y: number;
  size: number;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {

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

  private starsPerScreen: number[] = [250, 100, 50]; // Number of stars for desktop, tablet, and mobile respectively
  private minStarSize = 1;
  private maxStarSize = 3;
  private animationSpeed = 0.5; // Increase the animation speed here

  stars: Star[] = [];

  constructor(private http: HttpClient) {
    // Start animation loop for stars movement
    setInterval(() => {
      this.animateStars();
    }, 1000 / 60); // 60 FPS
  }
  

  ngOnInit(): void {
    this.myData();
    this.getData();
    this.generateStars();
  }

  private generateStars() {
    const screenWidth = window.innerWidth;
    let numStars;
  
    if (screenWidth >= 768 && screenWidth < 1024) {
      numStars = this.starsPerScreen[1]; // Tablet
    } else if (screenWidth < 768) {
      numStars = this.starsPerScreen[2]; // Mobile
    } else {
      numStars = this.starsPerScreen[0]; // Desktop (default)
    }
  
    this.stars = []; // Reset stars array
    for (let i = 0; i < numStars; i++) {
      const star: Star = {
        size: this.getRandomSize(),
        x: this.getRandomX(),
        y: this.getRandomY(),
      };
      this.stars.push(star);
    }
  }
  
  private getRandomSize(): number {
    return Math.random() * (this.maxStarSize - this.minStarSize) + this.minStarSize;
  }

  private getRandomX(): number {
    return Math.random() * window.innerWidth;
  }

  private getRandomY(): number {
    return Math.random() * window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.generateStars();
  }

  animateStars() {
    this.stars.forEach(star => {
      star.y += this.animationSpeed;
      if (star.y >= window.innerHeight) {
        star.y = 0;
      }
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
  currentItemIndex: number = -1;

  toggleParagraph(index: number) {
    if (this.currentItemIndex === index) {
      this.currentItemIndex = -1; 
    } else {
      this.currentItemIndex = index; 
    }
  }
  onCrossIconClick(event: Event, index: number) {
    event.stopPropagation();
    this.toggleParagraph(index);
  }
  
  
  
  myData(): void {
    this.http.get<any>('assets/db.json').subscribe((result) => {
      this.gData = result.gData;
      console.log(this.gData);
    });
  }

}


