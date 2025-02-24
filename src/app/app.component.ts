import { Component, OnInit } from '@angular/core';
import { OfService } from './service/of.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'rxjstest';


  
 constructor(
  private _ofservice : OfService
 ){}
  ngOnInit(): void {
       this._ofservice.of$
                      .subscribe(nums=>{
                          console.log(nums);     
                      })

       this._ofservice.ofEven$
                       .subscribe(evennums=>{
                        console.log(evennums);  
                       })  
       this._ofservice.ofstring$
                      .subscribe(nums=>{
                        console.log(nums);
                        
                      })             
  }
 
}
