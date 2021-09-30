import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { concatAll, map, mergeAll } from 'rxjs/operators';
import { SetPhoneDialogComponent } from 'src/app/dialogs/set-phone-dialog/set-phone-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor(private http: HttpClient, private dialog: MatDialog, @Inject('api_url') public url: String) { }

  start() {
    return this.http.get<any>(`${this.url}/megogo/check_ip`).pipe(
      map(result => { if (result.ok) return result; }),
      map(res => {
        return this.getOurPath();
        // if(res.is_our) {
        // }
        // else {
        //   return null;
        // }
      }),
      mergeAll()
    )
  }

  private getOurPath() {
    return this.http.get<any>(`${this.url}/megogo/get_phones`).pipe(
      map(res => {
        console.log('path')
        return this.dialog.open(SetPhoneDialogComponent, {
          data: {
            phones: res.data.phones
          }
        }).afterClosed()
        // if(res.ok) {
        // }
        // return null;
      }),
      mergeAll(),
      map(res => {
        console.log(res)
      })
    )
  }
}
