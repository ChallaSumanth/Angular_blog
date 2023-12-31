import { Injectable } from '@angular/core';
import { Blog } from '../model/bloghub';
import { blogs } from '../model/bloglist';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogs:Blog[]
  constructor() { 
    this.blogs = blogs
  }
  getBlogs()
  {
    return this.blogs;
  }
  addBlog(blog:Blog)
  {
    let id = this.blogs.length + 1;
    blog.id = id;
    console.log(blog);
    this.blogs.unshift(blog);
  }
}
