import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterViewInit{
@ViewChild(ChildComponent)boxId:ChildComponent={} as ChildComponent;
  
accessProperty():void{
  this.boxId.clickMe();
  this.boxId.uname="laxmi";
}
ngAfterViewInit(): void {
}
}
