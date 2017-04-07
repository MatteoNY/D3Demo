import { Component, OnInit, OnChanges } from '@angular/core';

import { MdSelect } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public spercent: any[] = [];

  public title = 'D3 Angular 4.x demo';
  public isReady = false;
  private chartData: any[];
  private chartPreloadData: any[];

  public selectedValue: number;

  constructor() { }

  setSelected() {

    this.genChart(true, this.selectedValue);

  }

  ngOnInit() {

    this.generatePercentages();

    setTimeout(() => {
      this.generateData();
    }, 1000);

  }


  generatePercentages() {

    this.spercent = [];
    for (let i = 0; i <= 100; i += 20) {
      this.spercent.push({ value: i, viewValue: 'Percent: ' + i });
    }

  }



  genChart(usevalue: boolean = false, value: number = null) {
    this.chartData = [];
    let data = 0;
    for (let i = 0; i < this.chartPreloadData.length; i++) {

      if (usevalue && i === 0) {
        data = this.chartPreloadData[0].data = value;
      } else {
        data = this.chartPreloadData[i].data;
      }

      this.chartData.push([
        `${this.chartPreloadData[i].name}`, data
      ]);
    }
    this.isReady = true;

  }

  updateChart(value: number) {
    setTimeout(() => {
      this.genChart(true, value);
    }, 1200);
  }

  generateData() {

    this.chartPreloadData = [{
      'name': 'Trump', 'data': 0,
    }, {
      'name': 'Obama', 'data': 76
    }, {
      'name': 'G.W Bush', 'data': 57
    }, {
      'name': 'Clinton', 'data': 58
    }, {
      'name': 'Bush Sr.', 'data': 51
    }, {
      'name': 'Reagan', 'data': 51
    }, {
      'name': 'Carter', 'data': 66
    }
    ];


    //   this.chartPreloadData = [{
    //   'name': 'Trump (2017-)', 'data': 0,
    // }, {
    //   'name': 'Obama (2000-2017)', 'data': 76
    // }, {
    //   'name': 'G.W Bush (2001-2009)', 'data': 57
    // }, {
    //   'name': 'Clinton (1993-2001)', 'data': 58
    // }, {
    //   'name': 'Bush Sr. (1989-1993)', 'data': 51
    // }, {
    //   'name': 'Reagan (1981-1989)', 'data': 51
    // }, {
    //   'name': 'Carter (1977-1981)', 'data': 66
    // }
    // ];


    this.genChart();


    // run again to animate initial value for 0
    this.updateChart(44);



  }



}
