import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbaService } from 'src/app/shared/services/nba.service';
import { Team } from '../../models/team';

@Component({
  selector: 'app-team-content',
  templateUrl: './team-content.component.html',
  styleUrls: ['./team-content.component.scss']
})
export class TeamContentComponent implements OnInit {
  teams:Team[]=[]
  registerForm:FormGroup;
  constructor(private api:NbaService,public formBuilder:FormBuilder,public router:Router) {
    this.registerForm= formBuilder.group({
      name:['',[Validators.required,Validators.maxLength(20)]],
      city:['',[Validators.required,Validators.maxLength(20)]],
      stadium:['',[Validators.required,Validators.maxLength(20)]],
      fundation:['',[Validators.required,Validators.maxLength(20)]]
    })
  }
  onSubmit(){
    if(this.registerForm.valid){
        const team:Team={
          name: this.registerForm.get('name')?.value.toUpperCase(),
          city:this.registerForm.get('city')?.value.toUpperCase(),
	        stadium: this.registerForm.get('stadium')?.value.toUpperCase(),
	        fundation: this.registerForm.get('fundation')?.value,
        }
	      // Reseteamos todos los campos y el indicador de envío o submitted
        this.api.createTeam(team).subscribe((t:any)=>{
          this.getTeams()
        })
	      this.registerForm.reset();
    }
  }
  ngOnInit(): void {
    this.getTeams()
    
  }
  getTeams(){
    this.api.getTeams()
    .subscribe((data:any)=>{
      this.teams=data.data.teams.map((e:any)=>e)   
    })
  }
  delete(id:any){
    this.api.deleteTeam(id).subscribe((response:any)=>{
      console.log(response)
      this.getTeams()
    })
    
  }
  

}
