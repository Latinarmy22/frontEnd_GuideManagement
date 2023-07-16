import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dialog } from '@angular/cdk/dialog'

import { UsersDialogComponent } from '../../components/users-dialog/users-dialog.component'
import { Users } from '../../models/users.model'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit{
  user: Users[] = [];
  columns: string[] = ['id', 'name', 'lastname', 'cellphone', 'idRol']

  constructor(
    private http: HttpClient,
    private dialog: Dialog
  ){}

  ngOnInit(): void {
    this.http.get<Users[]>('http://localhost:8000/api/users')
    .subscribe(data => {
      this.user = data;
      console.log(this.user)
    })
  }

  openUser(user: Users){
    const dialogRef = this.dialog.open(UsersDialogComponent, {
      minWidth: '300px',
      maxWidth: '50%',
      autoFocus: false,
      data: {
        user: user
      }
    });
    dialogRef.closed.subscribe(output => {
      console.log(output);
    })
  }
}
