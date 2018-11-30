import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  private MNISTpredictionCount = new BehaviorSubject(0);
  MNISTcount = this.MNISTpredictionCount.asObservable();

  private dogsVcatsPredictionCount = new BehaviorSubject(0);
  dogsVcatscount = this.dogsVcatsPredictionCount.asObservable();

  constructor() { }

  updateClickCount(tag) {
    const MNISTclickCount =  this.MNISTpredictionCount.value;
    const dvcClickCount   =  this.dogsVcatsPredictionCount.value;
    console.log(MNISTclickCount)
    console.log(dvcClickCount)
    if (tag === 'mnist' ) {
      this.MNISTpredictionCount.next(MNISTclickCount + 1);
    } else if (tag === 'dvc' ) {
      this.dogsVcatsPredictionCount.next(dvcClickCount + 1);
    }
    console.log('tag :' +  'MNIST count incremented' + this.MNISTpredictionCount);
  }
}


/*private data = new BehaviorSubject('');
currentData = this.data.asObservable()

constructor() { }

updateClickCount(item: any) {
  this.data.next(item);
}*/
