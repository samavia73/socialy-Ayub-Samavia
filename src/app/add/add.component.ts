import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Post } from '../@shared/models/post';
import { IdGeneratorUtils } from '../@shared/utils/id-generator.utils';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  @Output() addPostEvent = new EventEmitter<Post>();

  profileForm = new FormGroup({
    title: new FormControl(''),
    link: new FormControl(''),
    description: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

  createPost(){
    const Post:Post = {

      title: this.profileForm.get("title").value,
      link: this.profileForm.get("link").value,
    }
    this.addPostEvent.emit(Post);
    this.profileForm.reset();
  }

  onSubmit() {
    console.warn(this.profileForm)
  }

}
