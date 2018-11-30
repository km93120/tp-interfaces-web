import { Component, OnInit } from '@angular/core';
import { DataManagerService } from './../services/data-manager.service';
import NeuralNet from 'neocortex-js';

@Component({
  selector: 'app-ml',
  templateUrl: './ml.component.html',
  styleUrls: ['./ml.component.css']
})
export class MlComponent implements OnInit {
  constructor(private _data: DataManagerService) { }

  public img: Blob;
  public nn: NeuralNet;


  shareData(tag) {
    this._data.updateClickCount(tag);
  }

  ngOnInit() {
  }

}
