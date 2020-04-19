import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
   <app-ng-style></app-ng-style>
    <hr>
    <app-css></app-css>
    <p>
        Soy re boca
    </p>
    <hr>
    <app-clases></app-clases>

    <p [appResaltado]="'red'">
       Creo mi propia directiva de angular
    </p>
    <app-ng-switch></app-ng-switch>

  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
         AfterContentChecked, AfterViewInit, AfterViewChecked , OnDestroy {

  constructor() { console.log('constructor') }

  ngOnInit(): void { console.log('ngOnInit') }

  ngOnChanges(): void { console.log('ngOnChanges') }

  ngDoCheck(): void { console.log('ngDoCheck') }

  ngAfterContentInit(): void{ console.log('ngAfterContentInit') }

  ngAfterContentChecked(): void { console.log('ngAfterContentChecked') }

  ngAfterViewInit(): void { console.log('ngAfterViewInit') }

  ngAfterViewChecked(): void { console.log('ngAfterViewChecked') }

  ngOnDestroy(): void { console.log('ngOnDestroy') }
}