import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
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

  constructor() { }

  ngOnInit(): void {

  }
  currentItemIndex: number = -1;

  toggleParagraph(index: number) {
    if (this.currentItemIndex === index) {
      this.currentItemIndex = -1; // Hide the currently shown <p> tag
    } else {
      this.currentItemIndex = index; // Show the <p> tag for the clicked item
    }
  }
}
