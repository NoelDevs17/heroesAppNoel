import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-Page',
  templateUrl: './layout-Page.component.html',

})
export class LayoutPageComponent implements OnInit {

  public sidebarItems = [
    {label: 'Listado', icon: 'label', url: './list'},
    {label: 'Añadir', icon: 'add', url: './new-hero'},
    {label: 'Buscar', icon: 'search', url: './search'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
