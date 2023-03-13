import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    // private viewportScroller:ViewportScroller
  ) { }

  ngOnInit(): void {
   
  }
  // onLinkClick(elementId:string):void {
  //   // document.getElementById('about').scrollIntoView();
  //   // will scroll to 4th h3 element
  //   this.viewportScroller.scrollToAnchor(elementId)
  // }
  
}
