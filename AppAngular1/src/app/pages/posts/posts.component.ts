import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {

  //posts: any;
  //mensajes: any[] = [];

  mensajes: any;
  constructor(private dataService: DataService){ }

  ngOnInit(){
      this.mensajes = this.dataService.getPosts();
  }

  /* 
  ngOnInit(): void {

      this.dataService.getPosts()
        .subscribe(res => {
          this.posts = res;

          for (let i = 0; i < this.posts.length; i++) {
            i < 10 ? this.mensajes.push(this.posts[i]) : void(0);
            console.log(this.posts);
          }
        });
  }*/
}
