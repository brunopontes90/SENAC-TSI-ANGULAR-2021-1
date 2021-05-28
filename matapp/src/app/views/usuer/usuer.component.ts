import { ConfirmationVo } from './../dialogs/confirm/confirmation-vo';
import { ConfirmComponent } from './../dialogs/confirm/confirm.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from './../../services/user.service';
import { User } from './../../../../model/user';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-usuer',
  templateUrl: './usuer.component.html',
  styleUrls: ['./usuer.component.css']
})
export class UsuerComponent implements OnInit {

  users = new Array<User>();
  columns = ['name', 'username', 'actions'];
  selectedUser?: User = undefined;
  inserting = false;

  constructor(private userService: UserService, private snackBar: MatSnackBar, private dialog: MatDialog) { }

  // QUANDO ABRIR O COMPONENTE DO USUARIO, EXECUTA O LIST
  ngOnInit(): void {
    this.list();
  }

  showSnackBar(msg: string): void{
    this.snackBar.open(msg, '', {duration: 3000});
  }

  list(): void{
    this.userService.list().subscribe(
      users => {
        console.log(users);
        this.users = users;
      },
      error => {
        this.handleServiceError(error);
      }
    );
  }

  private handleServiceError(error: HttpErrorResponse): void {
    console.log(error);
    this.showSnackBar(error.statusText);
  }

  // tslint:disable-next-line: typedef
  select(user: User) {
    this.selectedUser = user;
    this.inserting = false;
  }

  // tslint:disable-next-line: typedef
  cancel() {
    this.selectedUser = undefined;
    this.list();
  }

  // tslint:disable-next-line: typedef
  save() {
    if (this.inserting){
      this.insert();
    }else {
      this.update();
    }
  }


  // tslint:disable-next-line: typedef
  private update() {
    this.userService.update(this.selectedUser).subscribe(() => {
      this.list();
      this.cancel();
      this.showSnackBar('Usuario Atualizado');
    },
      error => {
        this.handleServiceError(error);
      });
  }

  // tslint:disable-next-line: typedef
  private insert() {
    this.userService.insert(this.selectedUser).subscribe(() => {
      this.list();
      this.cancel();
      this.showSnackBar('Usuario Inserido');
    },
      error => {
        this.handleServiceError(error);
      });
  }

  // tslint:disable-next-line: typedef
  create(){
    this.inserting = true;
    this.selectedUser = {
      id: undefined,
      name: '',
      username: '',
      pass: '',
    };
  }

  // tslint:disable-next-line: typedef
  confirm(removeId?: number){
    const result = this.dialog.open(ConfirmComponent, {
      width: '300px',
      data: {
        id: removeId,
        answer: false
      }
    });

    result.afterClosed().subscribe((confirmationVo: ConfirmationVo) => {
      if (confirmationVo && confirmationVo.answer && confirmationVo.id){
        this.remove(confirmationVo.id);
      }
    });
  }

  // tslint:disable-next-line: typedef
  remove(id: number){
    this.userService.remove(id).subscribe(() => {
      this.list();
    },
    error => {
      this.handleServiceError(error);
    });
  }
}
