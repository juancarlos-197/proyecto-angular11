import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   implements OnInit {
  title = 'Portafolo-app';
  public card: Array<any>=[]
  ngOnInit(): void {
    this.card=[
      {
        title:'Video 1',
        subtitle:'Subtitle video 1'
      },
    
        {
          title:'Video 1',
          subtitle:'Subtitle video 1'
        }, 

    ]
  }
}
