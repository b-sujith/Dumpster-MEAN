import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { UserService } from './user.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SubblogComponent } from './subblog/subblog.component';
import { FinalComponent } from './final/final.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    SubblogComponent,
    FinalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
  providers:[]
})
export class AppModule { }
