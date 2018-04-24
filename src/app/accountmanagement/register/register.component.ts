import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../../_services/index'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public user: any = {
    name: "",
    email: "",
    password: ""
  }

  private responseData: any;

  constructor(private userservice: UserserviceService) { }

  ngOnInit() {
  }

  registerUser() {
    this.userservice.registerUser(this.user).subscribe((res) => {
      console.log(res)
      
      this.responseData = res;
      if (this.responseData.success) {
        this.clearInputs();
      }
    })
  }

  clearInputs() {
    this.user.email = "";
    this.user.password = "";
    this.user.name = "";
  }
}
