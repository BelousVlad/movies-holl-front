import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectionListChange } from '@angular/material/list';

@Component({
  selector: 'app-set-phone-dialog',
  templateUrl: './set-phone-dialog.component.html',
  styleUrls: ['./set-phone-dialog.component.css']
})
export class SetPhoneDialogComponent implements OnInit {

  custom_phone: boolean = false;
  inputed_phone!: String;
  selected_phone!: Array<{ phone: string, id: number }>;

  phoneControll = new FormControl('', [
    Validators.required,
    Validators.pattern("[0-9]{10,11}")
  ])

  constructor(@Inject(MAT_DIALOG_DATA) public data: { phones: Array<any> }, private dialogRef: MatDialogRef<SetPhoneDialogComponent>) { }

  ngOnInit(): void {
    // console.log(this.data);
  }

  sendPhone() {
    if(this.custom_phone) {
      if(this.phoneControll.valid)
        this.dialogRef.close({ input: this.custom_phone && this.inputed_phone, select: this.selected_phone[0] })
      else
        this.phoneControll.markAllAsTouched()
    }
    else {
      this.dialogRef.close({ input: this.custom_phone && this.inputed_phone, select: this.selected_phone[0] })
    }
  }

}
