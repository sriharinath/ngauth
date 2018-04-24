import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: any = {
    email: "",
    password: ""
  }

  

  ngOnInit() {
  }

  constructor(private translate: TranslateService){
    translate.setDefaultLang('fr');
    //translate.use('en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
  
  login() {
    console.log("ll")
  }

}
