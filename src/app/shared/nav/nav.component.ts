import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  navItems: Array<string>;
  currentItem: string;
  constructor() {
    this.navItems = ['Work', 'About', 'Contact'];
    this.currentItem = 'Work';
  }

  ngOnInit() {
  }

}
