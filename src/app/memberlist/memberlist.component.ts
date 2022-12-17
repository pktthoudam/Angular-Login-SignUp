import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-memberlist',
  templateUrl: './memberlist.component.html',
  styleUrls: ['./memberlist.component.css']
})
export class MemberlistComponent implements OnInit {
  Userlist:any
  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
   

   this.getUsers();

  }

  getUsers(){
    this.api.getdetails().subscribe({
      next: (value)=>{console.log(value), this.Userlist=value},
      error: (error)=>{console.log(error)},
      complete:()=>{console.log("Sucess get")}
    })
  }
  
  delete(id:number){
    this.api.deleteDetails(id).subscribe({
      next: (value)=>{console.log(value), window.confirm("Are you Sure"), this.getUsers()},
      error: (error)=>{console.log(error)},
      complete:()=>{console.log("Delete Sucess")}
    })
  }
  edit(id:number){
    this.router.navigate(['update/'+ id]);
    window.confirm("Are sure to Update Profile")
  }
}
