import { Component, OnInit } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  
  username: any;
  password: any;

  constructor(private router: Router) { }

  

  ngOnInit() {
  }




  login(): void {
  this.router.navigate(['/pages/drag-drop']);
  }
 
}
