import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  private data = {
    "mgr-levels": [     
      {"Key": "Consultant", "Value": "4"},
      {"Key": "Sr Consultant", "Value": "9"},
      {"Key": "Manager", "Value": "7"},
      {"Key": "Sr Manager", "Value": "4"},
      {"Key": "Director", "Value": "2"},
      {"Key": "Tech Director", "Value": "1"},
    ], 
    "clients-by-office": [
      {"Key": "Anthem", "Value": "7"},
      {"Key": "Capital One", "Value": "7"},
      {"Key": "Markel", "Value": "4"},
      {"Key": "CarMax", "Value": "2"},
      {"Key": "Goldman Sachs", "Value": "2"},
      {"Key": "Mission Lane", "Value": "2"},
      {"Key": "Landstar", "Value": "1"},
      {"Key": "TECO", "Value": "1"},
      {"Key": "LPL", "Value": "1"},
      {"Key": "Prolink", "Value": "1"},

    ], 

  }
  
  
  private svg;
  private margin = 50;
  private width = 1080 - (this.margin * 2);
  private height = 700 - (this.margin * 2);

  divId;

  constructor() { }

  ngOnInit() {
    // this.createSvg();
    
  }

  showChart(id: string) {
    this.divId = id;
    this.createSvg();    
    this.drawBars(this.data[this.divId]);

  }

  private createSvg(): void {
    this.svg = d3.select(`figure#${this.divId}`)
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

  private drawBars(data: any[]): void {
    // Create the X-axis band scale
    const x = d3.scaleBand()
    .range([0, this.width])
    .domain(data.map(d => d.Key))
    .padding(0.5);

    // Draw the X-axis on the DOM
    this.svg.append("g")
    .attr("transform", "translate(0," + (this.height - 3)+ ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");

    // Create the Y-axis band scale
    const y = d3.scaleLinear()
    .domain([0, 10])
    .range([this.height, 0]);

    // Draw the Y-axis on the DOM
    this.svg.append("g")
    .call(d3.axisLeft(y));

    // Create and fill the bars
    this.svg.selectAll("bars")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", d => x(d.Key))
    .attr("y", d => y(d.Value))
    .attr("width", x.bandwidth())
    .attr("height", (d) => this.height - y(d.Value))
    .attr("fill", "#d04a35");
  }

}
