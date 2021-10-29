import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private hc:HttpClient) { }
  fun(userObj:any):Observable<any>{
    return this.hc.post("/user/postblog",userObj)
  }
  gettopics():Observable<any>{
    return this.hc.get("/user/topics")
  }
  getsubtopics(userObj:any):Observable<any>{
    console.log("getsubtopics")
    return this.hc.post("/user/subtopics",userObj)
  }
  addsub(userObj:any):Observable<any>{
    return this.hc.post("/user/subt",userObj)
  }
  gettext(userObj:any):Observable<any>{
    return this.hc.post("/user/text",userObj)
  }
  puttext(userObj:any):Observable<any>{
    return this.hc.post("/user/puttext",userObj)
  }

}
