import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsDataService } from '../services/cards-data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  card: any;
  cardId:any;
  constructor(private activatedRoute: ActivatedRoute , private service : CardsDataService){}

  ngOnInit(): void{
    this.cardId = this.activatedRoute.snapshot.paramMap.get("id");
    this.getOne()
    // console.log(this.cardId)
  //  this.card =  this.service.cards.find((x: { id: string | null | undefined; }) => x.id == this.cardId)
  //  console.warn(this.card)
  }
  getOne(){
    this.service.getOne(this.cardId).subscribe(data=>{
      console.log(data);
    })
  }
}
