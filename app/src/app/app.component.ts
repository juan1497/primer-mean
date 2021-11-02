import { Component } from '@angular/core';
import { Nav } from './core/models/nav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  

  public nav:Nav[]=[
    {
      title:"Home",
      link:""
    },
    {
      title:"League",
      link:"league"
    },
    {
      title:"Team",
      link:"team"
    },
    {
      title:"Login",
      link:"login"
      
    }
  ]
  title = 'app';
}


