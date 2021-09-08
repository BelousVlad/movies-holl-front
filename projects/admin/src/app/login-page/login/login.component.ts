import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SliderService } from '../../services/slider.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login!: String;
  password!: String;

  constructor(private sliderService: SliderService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.sliderService.login(this.login as string, this.password as string)
      .subscribe(isLogin => {
        console.log('isLogin', isLogin)
        if(isLogin)
        {
          console.log(this.router); 
          this.router.navigate(['slider'])
        }
    })
  }

}
