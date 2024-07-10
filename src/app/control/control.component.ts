import { Component, ElementRef, HostBinding, HostListener, inject, input, ViewEncapsulation } from "@angular/core";

@Component({
    selector:'app-control',
    standalone:true,
    imports:[],
    templateUrl:'./control.component.hrml',
    styleUrl:'./control.component.less',
    encapsulation:ViewEncapsulation.None,
    host:{
        class:'control',
        '(click)':'onclick',
    },
    
})

export class ControlComponent{
    //@HostBinding('class') className='control';
    // @HostListener('click') onclick(){
    //console.log('clicked!');
    //  }
label=input.required<string>();
private el=inject(ElementRef);
    
onclick(){
    console.log('clicked!');
    console.log(this.el);
}
}