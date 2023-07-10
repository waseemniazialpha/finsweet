import { Component } from '@angular/core';
import {CardsDataService} from './services/cards-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-project';
  cards:any;
  constructor(private cardsData:CardsDataService){ }
  getCards(){
    this.cardsData.cards().subscribe((data)=>{
      this.cards = data
    } );
  }
  getCard(id: any) {
    this.cards = this.getCards();
    const selectedCard = this.cards.find((card: { id: any; }) => card.id === id)
    return selectedCard;
}
  // getCard(id:number){
  //   this.cardsData.cards().subscribe((data)=>{
  //     this.cards = data
  //   } );
  // }
  ngOnInit(): void{

  }
}
