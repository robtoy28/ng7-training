import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent implements OnInit {

  tableau: any;
  viz: any;
  selected = 'option2';

  constructor() {
  }


  ngOnInit() {
    var placeholderDiv = document.getElementById('vizContainer');
    // Replace this url with the url of your Tableau dashboard
    var url = 'https://public.tableau.com/views/WorldIndicators/GDPpercapita';
    var options = {
            hideTabs: true,
            width: "80%",
            height: "500px",
            onFirstInteractive: function() {
                  // The viz is now ready and can be safely used.
                  console.log("Run this code when the viz has finished     loading.");
            }
    };
    // Creating a viz object and embed it in the container div.
    this.viz = new tableau.Viz(placeholderDiv, url, options);
  }

}
