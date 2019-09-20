import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.background = 'blue';
    elementRef.nativeElement.style.color = 'yellow';
    elementRef.nativeElement.style.padding = '60px';
   }
   @HostBinding('style.background') background: String;

   @HostListener('mouseenter')
   mouseenter(){
     console.log('Mouse Entered')
     this.background = "skyblue";

    //  alert("mouseenter")
    // this.elementRef.nativeElement.style.background = 'red';
    // this.elementRef.nativeElement.style.color = 'white';
    // this.elementRef.nativeElement.style.fontSize = '40px';

   }



   @HostListener('mouseleave')
   mouseleave(){
     this.background = "purple";
    //  console.log('Mouse Left')
    //  alert("mouseenter")
    // this.elementRef.nativeElement.style.background = 'green';
    // this.elementRef.nativeElement.style.color = 'black';
    // this.elementRef.nativeElement.style.fontSize = '20px';
   }

}
