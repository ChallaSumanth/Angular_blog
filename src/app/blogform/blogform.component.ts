import { Component,OnInit } from '@angular/core';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-blogform',
  templateUrl: './blogform.component.html',
  styleUrls: ['./blogform.component.css']
})
export class BlogformComponent implements OnInit{
  categories = ['Technical', 'Functional', 'Non-technical']
  constructor(private service:BlogService)
  {

  }
  ngOnInit()
  {
      
  }
  insert(blog:any)
  {
    //alert(blog)
    this.service.addBlog(blog);
  }
}
