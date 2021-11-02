import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { Nav } from '../../models/nav';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Input() nav!:Nav[]
  constructor(private api:UserService,private router:Router) { }

  ngOnInit(): void {
  }
  logout(data:any){
    localStorage.removeItem("token")
    this.api.logOut(data).subscribe((response:any)=>{     
      console.log(response)
      this.router.navigate(['login'])
    })
  }
}
