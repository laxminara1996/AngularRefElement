import { Component, ElementRef, ViewChild,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@ViewChild('boxId')boxId:ElementRef={} as ElementRef;

  uname:string="ashok";
  constructor(private renderer:Renderer2 ){

  }
clickMe():void{
  alert('yes its working');
  console.log(this.boxId);
 // this.boxId.nativeElement.style.color='white';
//this.boxId.nativeElement.style.backgorundcolor='black';
this.renderer.setStyle(this.boxId.nativeElement,"color","white");
this.renderer.setStyle(this.boxId.nativeElement,"backgroundColor","red");
this.renderer.addClass(this.boxId.nativeElement,"myClass");
this.renderer.setProperty(this.boxId.nativeElement,'title',"hi");

}
}
