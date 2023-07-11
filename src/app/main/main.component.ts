import { Component } from '@angular/core';
import { CardsDataService } from '../services/cards-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  cards:any;
  constructor(private cardsData:CardsDataService){
    
    this.cardsData.cards().subscribe((data)=>{
      this.cards = data
    } );
  }
  ngOnInit(): void{

  }
}
