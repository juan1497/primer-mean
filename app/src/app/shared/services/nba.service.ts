import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Team } from 'src/app/pages/team/models/team';


@Injectable()
export class NbaService {
  urlBase:string="http://localhost:3000/"
  constructor(private http:HttpClient) { }
  getTeams(){
    return this.http.get(this.urlBase+"teams")
  }
  getTeam(id:any){
  return this.http.get(this.urlBase+"teams"+`/${id}`)
  }
  createTeam(body: any){
    return this.http.post(this.urlBase+"teams/create",body)
  }
  updateTeam(body: any){
    return this.http.put(this.urlBase+"teams/update"+`/${body._id}`,body)
  }
  deleteTeam(id:any){
    return this.http.delete(this.urlBase+"teams/delete"+`/${id}`)
  }
  getLeagues(){
    return this.http.get(this.urlBase+"league")
  }
}
