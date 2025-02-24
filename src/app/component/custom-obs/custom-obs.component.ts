import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-obs',
  templateUrl: './custom-obs.component.html',
  styleUrls: ['./custom-obs.component.scss']
})
export class CustomOBSComponent implements OnInit {
  
  ourInterval$ = new Observable(observer=>{
       let count=1;
       setInterval(() => {
            observer.next(count);
            count++;

            if(count > 13){
               observer.error('something went wrong');  
            }

            if(count === 21){
               observer.complete()
            }

       }, 1000);
  })
  

  constructor() { }

  ngOnInit(): void {
    this.ourInterval$
        .subscribe(res=>{
           console.log(res);  
        },
       err=>{
            throw new Error(err);  
        },
        ()=>{
           console.log("The observable is complete...!!!");  
        }
      )

  }

}
