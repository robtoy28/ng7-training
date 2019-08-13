import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  myText = '';
  
  constructor() {
    this.myText = 'this is my text';
  }


  onsubmit(){
    this.myText = 'not now different';
  }

  ngOnInit() {
    this.myText = 'not now';
  }

}
