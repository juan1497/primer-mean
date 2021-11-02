import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbaService } from 'src/app/shared/services/nba.service';
import { Team } from '../../models/team';

@Component({
  selector: 'app-team-update',
  templateUrl: './team-update.component.html',
  styleUrls: ['./team-update.component.scss']
})
export class TeamUpdateComponent implements OnInit {
  updateForm!:FormGroup;
  id:any
  team!:Team;
  constructor(private builder:FormBuilder,private path:ActivatedRoute,private router:Router,private api:NbaService) {
    this.updateForm = new FormGroup({
      name: new FormControl(),
      city:new FormControl(),
      stadium:new FormControl(),
      fundation:new FormControl()
  });
   }

  ngOnInit(): void {this.formularioUpdate()}

  formularioUpdate(){
    this.path.paramMap.subscribe((params:any)=>{
      this.id=params.get('id')
    })
    this.api.getTeam(this.id).subscribe((t:any)=>{
      this.team=t.data.teams
      this.updateForm=this.builder.group({
        name:[this.team.name,[Validators.required]],
        city:[this.team.city,[Validators.required]],
        stadium:[this.team.stadium,[Validators.required]],
        fundation:[this.team.fundation,[Validators.required]]
      })
    })
  }

  update(){
    if(this.updateForm.valid){ 
      this.team={
        _id:this.id,
        name:this.updateForm.get('name')?.value.toUpperCase(),
        city:this.updateForm.get('city')?.value.toUpperCase(),
        stadium:this.updateForm.get('stadium')?.value.toUpperCase(),
        fundation:this.updateForm.get('fundation')?.value
      }
      this.api.updateTeam(this.team).subscribe((response:any)=>console.log(response))
      this.updateForm.reset();
      this.router.navigate(['team'])
    }
  }


}
