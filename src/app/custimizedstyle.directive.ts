import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustimizedstyle]'
})
export class CustimizedstyleDirective implements OnInit{

  constructor(private e:ElementRef) {
    console.log(e);
   }
ngOnInit(): void {
  this.e.nativeElement.style.color='yellow';
  
}
}
