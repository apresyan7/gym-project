import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFilterDirective]'
})
export class FilterDirectiveDirective {

  constructor(private element:ElementRef, private renderer:Renderer2) { }

  // @HostListener('click',['$event']) onClick(event: Event){
  //   // this.renderer.setStyle(this.element.nativeElement,'display','none')
  //   this.renderer.removeClass( ,'active')
  //   this.renderer.addClass(event.target ,'active')
  // }

}
