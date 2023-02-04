import { Component } from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css']

})
export class XyzComponent {
  count = 1;
  increaseCount(){
    this.count = (this.count + 1 ) * this.count;
  }
}
