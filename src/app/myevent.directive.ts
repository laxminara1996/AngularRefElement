import { Directive,Renderer2,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appMyevent]'
})
export class MyeventDirective {

  constructor(private e:ElementRef,private renderer:Renderer2) {

   }
@HostListener ('mouseover') method1(event:Event){
this.e.nativeElement.style.color='pink';
}
@HostListener ('mouseenter') method2(event:Event){
  this.e.nativeElement.style.color='yellow';
  }
@HostListener ('mouseout') method3(event:Event){
    this.renderer.setStyle(this.e.nativeElement,"backgroundColor","black");
    this.renderer.setStyle(this.e.nativeElement,"color","white");
    }
@HostListener('click') show(event:Event){
  this.renderer.setStyle(this.e.nativeElement,'color','red');
}

}
