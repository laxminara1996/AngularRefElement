import { Directive, OnInit, Renderer2,ElementRef } from '@angular/core';

@Directive({
  selector: '[appRendercustomizedstyle]'
})
export class RendercustomizedstyleDirective implements OnInit{

  constructor(private e:ElementRef ,private renderer:Renderer2) {
    console.log(renderer);
   }
   ngOnInit(): void {
     //this.renderer.setStyle(this.e.nativeElement,"backgroundColor","pink");
     //this.renderer.setStyle(this.e.nativeElement,"color","green");
     //this.renderer.setStyle(this.e.nativeElement,"font-size","30px");
     //this.renderer.setStyle(this.e.nativeElement,"text-align","center");
     this.renderer.addClass(this.e.nativeElement,"myClass");

   
   
    }

}
