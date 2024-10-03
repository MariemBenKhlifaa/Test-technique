import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: User[] = [];
  user?:User
  cols:[] = [];
  idUser?:number
  openFormUser:boolean=false




    constructor(private userService:UserService,private router: Router) {

    }

    ngOnInit() {
      this.getUsers()  // Recupere la liste des utilisateurs
    }

    getUsers() {
      return  this.userService.getUsers().subscribe((data) => {
        this.users = data;
    });
    }

    closeDialogForms(event:boolean){
      this.openFormUser=event
    }
    openForm(){
      this.openFormUser=true
    }

    onUserAdded(): void {
      this.getUsers();//refraicher la liste des utilisateurs
    }

    DetailsUser(userId: number) {

    this.router.navigate(['/users/user',userId]); // naviguer vers la route avec l'ID
   }


}
