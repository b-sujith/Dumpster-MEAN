import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private rr:Router) { }
  title = 'myblog';
  name='' ;
  st:boolean = true;
  passw = '' ;
  fun(){
    if (this.name=='bois' && this.passw=='SRSwamy'){
      this.st=false;
      this.rr.navigateByUrl('/blog')
    }
  }
}
