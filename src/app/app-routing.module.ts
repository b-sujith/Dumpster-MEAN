import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { FinalComponent } from './final/final.component';
import { SubblogComponent } from './subblog/subblog.component';

const routes: Routes = [
{path: 'blog', component:BlogComponent},
{path:'subblog', component:SubblogComponent},
{path:'final', component:FinalComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
