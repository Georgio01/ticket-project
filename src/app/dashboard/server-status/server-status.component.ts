import { Component, OnInit } from "@angular/core";

@Component({
    selector:'app-server-status',
    standalone:true,
    imports:[],
    templateUrl:'./server-status.component.html',
    styleUrl:'./server-status.component.less',
})

export class serverStatusComponent implements OnInit{
    currentStatus:'online' | 'offline' |'unknown'='offline';

    constructor(){}

    ngOnInit(){
        setInterval(()=>{
            const rnd=Math.random();//0 ->0.999999999999
 
            if(rnd<0.5){
             this.currentStatus='online';
            }else if(rnd<0.9){
             this.currentStatus='offline';
            }else{
             this.currentStatus='unknown';
            }
         },5000);
    }

}