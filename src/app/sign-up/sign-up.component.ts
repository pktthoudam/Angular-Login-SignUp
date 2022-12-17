import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Signup } from '../signup';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  SignForm!:FormGroup;
  signup:Signup=new Signup;
  id=this.activatedrRoute.snapshot.params['id']
  constructor(private api: ApiService, private formBuilder: FormBuilder, private router:Router, private activatedrRoute:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.SignForm= this.formBuilder.group({
      fname: new FormControl(),
      lname: new FormControl(),
      username: new FormControl(),
      email: new FormControl(),
      password:new FormControl(),
    });

    this.api.getdetailByID(this.id).subscribe({
      next: (value)=>{console.log(value), this.fillFields(value)},
      error: (error)=>{console.log(error)},
      complete:()=>{console.log("Sucess getDetails")}
    })
  }

  postUsers(){
    this.api.postdetails(this.SignForm.value).subscribe({
      next: (value)=>{console.log(value), this.router.navigate(['/log-in']), window.alert("sucessfully Sign Up")},
      error: (error)=>{console.log(error)},
      complete:()=>{console.log("Sucess signup")}
    })
  }
  fillFields(data:Signup){
    this.SignForm.controls['fname'].setValue(data.fname);
    this.SignForm.controls['lname'].setValue(data.lname);
    this.SignForm.controls['username'].setValue(data.username);
    this.SignForm.controls['email'].setValue(data.email);
    this.SignForm.controls['password'].setValue(data.password);
  }

  putUsers(){
    this.api.putDetails(this.id, this.SignForm.value).subscribe({
      next: (value)=>{console.log(value), this.router.navigate(['/member-list']),window.alert("sucessfully Update")},
      error: (error)=>{console.log(error)},
      complete:()=>{console.log("Sucess Update")}
    })
  }
}
