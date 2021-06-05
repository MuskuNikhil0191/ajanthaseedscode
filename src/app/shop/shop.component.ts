import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  constructor(private ds:DataService,private router:Router,private location:Location) { }
  english:any;
  telugu:any;
  lform=true;
  sform=false;
  forgotpwd=false;
  ngOnInit(): void {
    this.english=this.ds.english;
    this.telugu=this.ds.telugu;
  }
  onsubmit(form:any){
    this.ds.createuser(form.value).subscribe(
      (res)=>{
        if(res.message=="success"){
          this.ds.users.push(res.data);
          this.gotoshopping();
          console.log(res);
        }
        else{
          alert(JSON.stringify(res));
        }
        console.log("response from api",res)
      },
      (err)=>{console.log(err)}
    );
  }
  updatepwd(form:any){
    this.ds.updatepwdfd(form.value).subscribe(
      (res)=>{
        alert(JSON.stringify(res));
      },
      (err)=>{console.log(err)}
    );
  }
  getform(form:any){
      this.ds.getuser(form.value).subscribe(
        (res)=>{
          if(res.message!="success"){
            alert(JSON.stringify(res));
          }
          else{
            this.ds.users.push(res.data);
            this.gotoshopping();
          }
          console.log("response from api",res)},
        (err)=>{console.log(err)}
      );
  }
  // fun(){
  //   this.ds.getusers().subscribe(
  //     (res)=>{
  //       console.log('response from api is ',res);
  //       this.users=res;
  //     },
  //     (err)=>{console.log(err.message)}
  //   );
  // }
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
  gotosignupform(){
    this.sform=true;
    this.lform=false;
    this.forgotpwd=false;
  }
  gotologinform(){
    this.lform=true;
    this.sform=false;
    this.forgotpwd=false;
  }
  gotoforgotpwd(){
    this.lform=false;
    this.sform=false;
    this.forgotpwd=true;
  }
  reloadComponent() {
    this.router.navigateByUrl("/pagenotfound",{skipLocationChange:true}).then(()=>{
      this.router.navigate([decodeURI(this.location.path())]);
    });
  }
  gotoshopping(){
    this.router.navigateByUrl("/home/shopping").then(
      ()=>{this.router.navigate([decodeURI(this.location.path())])}
    );
  }
}
