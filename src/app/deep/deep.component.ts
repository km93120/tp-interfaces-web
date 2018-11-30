import { Component, OnInit } from '@angular/core';

import { DataManagerService } from './../services/data-manager.service';

import NeuralNet from 'neocortex-js';



@Component({

  selector: 'app-ml',

  templateUrl: './deep.component.html',

  styleUrls: ['./deep.component.css']

})

export class DeepComponent implements OnInit {

  constructor(private _data: DataManagerService) { }



  public img: Blob;

  public nn: NeuralNet;

  shareData(tag) {

    this._data.updateClickCount(tag);

  }



  ngOnInit() {

  }



}
