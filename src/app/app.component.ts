import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'project1';
  english:any;
  telugu:any;
  constructor(private ds:DataService,public router:Router,public location:Location){
  }
  ngOnInit():void{
    this.english=this.ds.english;
    this.telugu=this.ds.telugu;
  }
  changetoenglish(){
    this.ds.english=true;
    this.ds.telugu=false;
    this.english=this.ds.english;
    this.telugu=this.ds.telugu;
    this.reloadComponent();
  }
  changetotelugu(){
    this.ds.english=false;
    this.ds.telugu=true;
    this.english=this.ds.english;
    this.telugu=this.ds.telugu;
    this.reloadComponent();
  }
  reloadComponent() {
    this.router.navigateByUrl("/pagenotfound",{skipLocationChange:true}).then(()=>{
      this.router.navigate([decodeURI(this.location.path())]);
    });
}
}
