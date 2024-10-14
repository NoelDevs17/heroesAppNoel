import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-Page',
  templateUrl: './new-Page.component.html',
})
export class NewPageComponent implements OnInit {

  public publishers = [
    {id: 'DC Comics', desc: 'DC - Comics'},
    {id: 'Marvel Comics', desc: 'Malver - Comics'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
