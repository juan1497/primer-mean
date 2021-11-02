import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbaService } from 'src/app/shared/services/nba.service';
import { Team } from '../../models/team';

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.scss']
})
export class TeamCreateComponent implements OnInit {
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
          name: this.registerForm.get('name')?.value,
          city:this.registerForm.get('city')?.value,
	        stadium: this.registerForm.get('stadium')?.value,
	        fundation: this.registerForm.get('fundation')?.value,
        }
	      // Reseteamos todos los campos y el indicador de envío o submitted
        this.api.createTeam(team).subscribe((t:any)=>{
          this.router.navigate(['team'],{queryParams:{status:t.message}})
        })
	      this.registerForm.reset();
    }
  }
  ngOnInit(): void {
  }

}
