import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

base_url : string =`${environment.baseUrls}`;
post_url : string =`${this.base_url}/posts.json`

  constructor(
    private _http: HttpClient
  ) { }
 
  fetchallpost():Observable<any>{
     return this._http.get<any>(this.post_url)
                      .pipe(
                         map(res=>{
                            let postsArr:Array<any>=[];
                            for(const key in res){
                               postsArr.push({...res[key],id:key})
                            }
                            return postsArr
                         })
                      )
  }



}
