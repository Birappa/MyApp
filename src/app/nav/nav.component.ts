import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  username:String;
  constructor(private router:Router) { }

  ngOnInit() {
    this.username=window.localStorage.getItem('username')
    if(this.username){
      document.getElementById("username").style.display='block';
      document.getElementById("signout").style.display='block';
      document.getElementById("signin").style.display='none';
      document.getElementById("signup").style.display='none';
    }
    else{
      document.getElementById("username").style.display='none';
      document.getElementById("signout").style.display='none';
      document.getElementById("signin").style.display='block';
      document.getElementById("signup").style.display='block';
    }

  }

  signout(){
    window.localStorage.removeItem('username');
    this.router.navigate(['login']);
  }

  loginPage(): void {
    document.getElementById('login').style.display='block';
    this.router.navigate(['login']);
  };

   myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

}
