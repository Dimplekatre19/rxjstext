import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  postarr:Array<any>=[]
  constructor( 
     private _postservice : PostService
  ) { }

  ngOnInit(): void {
    this._postservice.fetchallpost()
                      .subscribe(res=>{
                          this.postarr=res
                      })
  }

}
