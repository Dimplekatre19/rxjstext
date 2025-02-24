import { Injectable } from '@angular/core';
import { filter, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfService {
  of$ =of(1,2,3,4,5,6,7,8)

  ofEven$= this.of$
                .pipe(
                   filter(nums => {
                      return nums % 2 == 0
                   })
                )
              
  ofstring$ = this.of$
                  .pipe(
                      map(nums=>{
                          return `The value is ${nums}`
                      })
                  )

                  
  constructor() { }
}
