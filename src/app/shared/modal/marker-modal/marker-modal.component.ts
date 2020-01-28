import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SearchType } from 'src/app/models/search-type.model';

@Component({
  selector: 'app-marker-modal',
  templateUrl: './marker-modal.component.html',
  styleUrls: ['./marker-modal.component.scss']
})
export class MarkerModalComponent {
  type: typeof SearchType = SearchType;
  constructor(
    public dialogRef: MatDialogRef<MarkerModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onCloseClick(): void {
    this.dialogRef.close();
  }

}
