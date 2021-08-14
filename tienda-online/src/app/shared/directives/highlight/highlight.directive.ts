import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
    element: ElementRef
  ) {
    // Manipular los elementos en el DOM
    element.nativeElement.style.backgroundColor = 'red'
   }

}
