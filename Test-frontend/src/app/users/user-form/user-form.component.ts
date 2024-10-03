import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/Models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @Input() openUserForm:boolean=true
  @Output() closeDialog= new EventEmitter<boolean>(false);
  @Output() userAdded = new EventEmitter<void>();
  submitted: boolean = false;
  user:User

  constructor(private userService:UserService,private messageService: MessageService) {
    this.user=new User()
  }
  SaveUser(user:User){
    this.submitted = true;
    if(this.isFormValid(user)){ // Controle des champs vide
      this.userService.AddUser(user).subscribe(response=>{
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Utilisateur ajouté avec succes', life: 3000 });
        this.userAdded.emit();
        this.openUserForm=false

      },
     error=>{
      this.messageService.add({ severity: 'error', summary: 'error', detail: 'une erreur est survenue'+error, life: 3000 });

     }

    )
    }

  }
  hideDialog(){
    this.closeDialog.emit(false)
     this.openUserForm=false
  }

  isFormValid(user:User) {

    return user.firstName && user.lastName && user.email && user.address;
  }



}
