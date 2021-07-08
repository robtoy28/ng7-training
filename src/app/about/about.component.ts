import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [{
      data: [1, 2, 3],
      type: 'line'
    }]
  };
  myText = '';
  
  constructor(public dataService: DataService) {
    this.myText = 'this is my text';
  }


  onsubmit(){
    this.myText = 'not now different';
    this.dataService.myData = this.dataService.myData + '' +Math.random();
  }

  ngOnInit() {
    this.myText = 'not now';
  }

}
