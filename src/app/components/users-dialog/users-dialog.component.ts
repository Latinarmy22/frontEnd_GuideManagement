import { Component } from '@angular/core';
import { faClose, faBars, faUser, faCheckSquare, faTrash, faPenToSquare} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-users-dialog',
  templateUrl: './users-dialog.component.html'
})
export class UsersDialogComponent {
  faClose = faClose;
  faBars = faBars;
  faUser = faUser;
  faCheckSquare = faCheckSquare;
  faTrash = faTrash;
  faPenToSquare = faPenToSquare

  close(){
    // this.dialogRef.close();
  }
}
