import { User } from 'src/app/Models/user.model';
import { UserService } from 'src/app/services/user.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent  implements OnInit{
  constructor(private route: ActivatedRoute,private userService:UserService) {}
  userId: number;
  user:User

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params)
      this.userId = +params['id']; // recuperer l'ID depuis les parametres de la route
      this.getUserDetails(this.userId); // obtenir les détails de l'utilisateur
    });
  }
  getUserDetails(id:number){
   this.userService.getUserById(id).subscribe(data=>{
          this.user=data
  },
  error=>{
     console.error(error)
  }
)
  }

}
