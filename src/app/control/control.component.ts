import { Component, input } from "@angular/core";

@Component({
    selector:'app-control',
    standalone:true,
    imports:[],
    templateUrl:'./control.component.hrml',
    styleUrl:'./control.component.less',
})

export class ControlComponent{
    label=input.required<string>();
}