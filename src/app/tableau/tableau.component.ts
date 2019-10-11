import { Component, OnInit } from '@angular/core';

declare var tableau: any;

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent implements OnInit {

  viz: any;

  selected = 0;
  tableauVizs = ['https://public.tableau.com/views/WorldIndicators/GDPpercapita',
                 'http://public.tableau.com/views/RegionalSampleWorkbook/Storms' ];

  constructor() {
  }


  ngOnInit (){
    this.initializeViz (this.tableauVizs[this.selected]);
  }

  initializeViz(url){

    console.log('initializeViz');
    const placeholderDiv = document.getElementById('vizContainer');
    // Replace this url with the url of your Tableau dashboard

    const options = {
            hideTabs: true,
            width: "80%",
            height: "500px",
            onFirstInteractive: function() {
                  // The viz is now ready and can be safely used.
                  console.log("Run this code when the viz has finished loading.");
            }
    };


    this.viz = tableau.VizManager.getVizs()[0];
    if (this.viz) {
      this.viz.dispose();
    }

    // Creating a viz object and embed it in the container div.
    this.viz = new tableau.Viz(placeholderDiv, url, options);


  }

  onsubmit(){
    this.initializeViz(this.tableauVizs[this.toggleSelected()]);

  }

  toggleSelected = () => {
    if (this.selected === 0){
      this.selected = 1;
    } else {
      this.selected = 0;
    }
    return this.selected;
  }

}
