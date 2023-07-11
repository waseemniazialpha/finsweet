import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CardsDataService {
  getCards() {
    throw new Error('Method not implemented.');
  }
  getCard(id: number) {
    throw new Error('Method not implemented.');
  }
  find(arg0: (x: any) => boolean) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }
  url = "http://localhost:3000/cards"
  cards(){
    return this.http.get(this.url)
  }
  
  // getOne(id: string){
  //   return this.http.get("http://localhost:3000/card"+id)
  // }
}
