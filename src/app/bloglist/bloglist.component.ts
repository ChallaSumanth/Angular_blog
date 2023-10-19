import { Component } from '@angular/core';
import { Blog } from '../model/bloghub';
import {blogs} from '../model/bloglist'
import { BlogService } from '../service/blog.service';
@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']

})
export class BloglistComponent {

  blogs : any
  constructor(private service : BlogService){

  }

  ngOnInit()
  {
    this.blogs = this.service.getBlogs();
  }
}
