import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  card: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('id', id)

    this.http.get<any>('https://jsonplaceholder.typicode.com/photos').subscribe((data) => {
      console.log('data', data)
      this.card = data.find((card: any) => {
        if (card.id == id)
          return card
      });
      // If no card is found, you can handle the error or display an appropriate message
    });

  }
}
