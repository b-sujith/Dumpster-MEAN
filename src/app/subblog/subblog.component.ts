import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-subblog',
  templateUrl: './subblog.component.html',
  styleUrls: ['./subblog.component.css']
})
export class SubblogComponent implements OnInit {

  constructor(private rr:Router,private us:UserService) { }
  subtopic="";
  kk:any="";
  subtopics:any=[]
  ngOnInit(): void {
    let t=localStorage.getItem('topic')
    this.kk=t;
    console.log(t)
    this.us.getsubtopics({name:t}).subscribe(
      res=>{
        this.subtopics=res.message
        console.log(this.subtopics)
        
      },
      err=>{
        console.log(err.message)
      }
    )
  }
  addsub(){
    let t=localStorage.getItem('topic')

    this.us.addsub({name:t,subt:this.subtopic}).subscribe(
      res=>{
        alert(res.message)
        let t=localStorage.getItem('topic')
        this.kk=t;
        console.log(t)
        this.us.getsubtopics({name:t}).subscribe(
          res=>{
            this.subtopics=res.message
            console.log(this.subtopics)
            
          },
          err=>{
            console.log(err.message)
          }
        )
      },
      err=>{
        console.log(err.message)
      }
    )

  }
  final(name:any){
    localStorage.setItem('subt',name)

    this.rr.navigateByUrl('/final')
  }

}
