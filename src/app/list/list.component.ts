import { Component, OnInit } from '@angular/core';

import { POSTS } from '../@shared/mock';
import { Post } from '../@shared/models/post';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  posts: Post[] = POSTS;

  constructor() { }

  //pour appler la fonction get dans le postservice.ts
  ngOnInit(): void {
    console.log("posts > ", this.posts);
  }


  //pour appeler la fonction post dans le postservice
  addItem(newItem: Post){
    this.posts.push(newItem);
  }

}
