import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  constructor(private rr:Router,private us:UserService) { }
  text:string = "";
  ngOnInit(): void {
    let subt=localStorage.getItem('subt')
    this.us.gettext({name:subt}).subscribe(
      res=>{
        console.log(res.message)
        this.text=res.message
      },
      err=>{
        console.log(err.message)

      }
    )

  }
  fun(){
    let subt=localStorage.getItem('subt')
    this.us.puttext({name:subt,text:this.text}).subscribe(
      res=>{
        alert("saved")
        console.log(res.message)
      },
      err=>{
        console.log(err.message)
      }
    )
  }

}
