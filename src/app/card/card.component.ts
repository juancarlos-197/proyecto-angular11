import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
public imagen:any
  constructor() { }

  ngOnInit(): void {
    this.imagen='https://picsum.photos/536/354'
  }

}
