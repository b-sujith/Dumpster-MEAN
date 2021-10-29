import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(public us:UserService, private rr:Router) { }
   topic="";
   tops:any=[];
  ngOnInit(): void {
    this.us.gettopics().subscribe(
      res=>{
        console.log(res.message)
        this.tops=res.message
      },
      err=>{
        console.log(err.message)
      }
    )

  }
  funn(){
    
    this.us.fun({name:this.topic}).subscribe(
      res=>{
        alert(res.message)
        this.us.gettopics().subscribe(
          res=>{
            console.log(res.message)
            this.tops=res.message
          },
          err=>{
            console.log(err.message)
          }
        )
      },
      err=>{
        console.log(err)
      }
    )
  }
  fun2(blog:any){
    localStorage.setItem('topic',blog)
    this.rr.navigateByUrl('/subblog')
  }

}
