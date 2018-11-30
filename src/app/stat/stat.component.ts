import { Component, OnInit } from '@angular/core';
import {DataManagerService} from '../services/data-manager.service';
import {Data} from '@angular/router';



@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {

  // this. MNISTcountValue,this.dogsVcatsCountValue
  MNISTcountValue = 0
  dogsVcatsCountValue = 0;

  public chartType = 'pie';

  public chartData: Array<any> = [this. MNISTcountValue, this.dogsVcatsCountValue];

  public chartLabels: Array<any> = ['Red', 'Green'];

  public chartColors: Array<any> = [{
    hoverBorderColor: ['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)'],
    hoverBorderWidth: 0,
    backgroundColor: ['#F7464A', '#46BFBD', ],
    hoverBackgroundColor: ['#FF5A5E', '#5AD3D1'],
  }];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

  constructor(private _data: DataManagerService) { }

  ngOnInit() {
    this._data.MNISTcount.subscribe(MNISTcount => {this.MNISTcountValue = MNISTcount;
      this.chartData = [this. MNISTcountValue, this.dogsVcatsCountValue]; });
    this._data.dogsVcatscount.subscribe(dogsVcatscount => {this.dogsVcatsCountValue = dogsVcatscount;
      this.chartData = [this. MNISTcountValue, this.dogsVcatsCountValue]; } );

  }

}
