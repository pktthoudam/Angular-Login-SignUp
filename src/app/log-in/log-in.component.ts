import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Signup } from '../signup';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  loginForm!: FormGroup;
  find = Signup;
  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      username: new FormControl(),
      password: new FormControl()
    })
  }

  logIn() {
    this.http.get<any>('http://localhost:3000/signup').subscribe({
      next: (value) => {
        const user = value.find((data: Signup) => {
          return data.username === this.loginForm.value.username && data.password === this.loginForm.value.password
        })
        if (user) {
          alert(" You are successfully login !");
          this.loginForm.reset();
          this.router.navigate(['/dashboard'])
        }
        else {
          alert("Username or password not found !!");
          this.router.navigate(['/log-in'])

        }
      },
      error: (error) => { console.log(error) },
      complete: () => { console.log("Sucess Login") }
    })
  }


}
