import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Work} from '../../models/work';

@Component({
  selector: 'app-work-create-dialog',
  templateUrl: './work-create-dialog.component.html',
  styleUrls: ['./work-create-dialog.component.scss']
})
export class WorkCreateDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<WorkCreateDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Work) {}

    onClose(): void {
        this.dialogRef.close();
    }

}
