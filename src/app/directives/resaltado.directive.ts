import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

@Input('appResaltado') nuevoColor: string;

  constructor(private element: ElementRef) {
    console.log('Directiva llamadas');
    //element.nativeElement.style.backgroundColor = 'yellow';
  }

  //escucho el evento
  @HostListener('mouseenter') mouseEntro(){
    this.resaltar(this.nuevoColor || 'yellow');
   // this.element.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') mouseSalio(){
    this.resaltar(null);
  }

  private resaltar(color: string){
    this.element.nativeElement.style.backgroundColor = color;

  }
}
