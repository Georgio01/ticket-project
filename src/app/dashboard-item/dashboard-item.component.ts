import { Component, input, Input } from "@angular/core";

@Component({
    selector:'app-item',
    standalone:true,
    imports:[],
    templateUrl:'./dashboard-item.component.html',
    styleUrl:'./dashboard-item.component.less',
   //host:{
     //   class:'dashboard-item'
    //},

})

export class DashboardItemComponent{
   // @Input({required:true})image!:{ src:string; alt:string};
    //@Input({required:true})title!:string;

    image =input.required<{src:string; alt:string}>();
    title=input.required<{title:string}>
}