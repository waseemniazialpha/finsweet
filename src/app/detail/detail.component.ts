import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  data: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getDataById(id);
  }

  getDataById(id: string | null): void {
    if (id) {
      forkJoin([
        this.http.get<any>(`https://jsonplaceholder.typicode.com/photos/${id}`),
        this.http.get<any>(`https://jsonplaceholder.typicode.com/comments/${id}`)
      ]).subscribe((data: any[]) => {
        const photoData = data[0];
        const commentData = data[1];

        this.data = {
          ...photoData,
          body: commentData?.body,
          name: commentData?.name
        };

        console.log(this.data);
      });
    }
  }
}
