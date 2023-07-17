import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  combinedData: any[] | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    forkJoin([
      this.http.get<any>('https://jsonplaceholder.typicode.com/photos'),
      this.http.get<any>('https://jsonplaceholder.typicode.com/comments')
    ]).subscribe((data: any[]) => {
      const photosData = data[0].slice(0, 6);
      const commentsData = data[1].slice(0, 6);

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
