import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';
import { User } from '../user';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
@Input()  post: Post;

  constructor() { }

  ngOnInit() {
  }

}
