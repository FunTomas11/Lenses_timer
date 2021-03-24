import { Component, Input, OnInit, Inject } from '@angular/core';
import { Lens } from '../../model/lens';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-glass-card',
  templateUrl: './glass-card.component.html',
  styleUrls: ['./glass-card.component.styl']
})
export class GlassCardComponent implements OnInit {

  @Input() lens: Lens;
  @Input() eye: string = '';

  tiltSettings = {
    glare: true,
    max: 35,
    speed: 400,
    "max-glare": 1
  }

  onClick(): void
  {
    const dialogRef = this.dialog.open(ChangeDataDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  constructor(public dialog: MatDialog) {}


  ngOnInit(): void {

  }

}

@Component({
  selector: 'app-change-data-dialog',
  templateUrl: 'change-data-dialog.html'
})
export class ChangeDataDialog {

  constructor(
    public dialogRef: MatDialogRef<ChangeDataDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Lens) {}

    onNoClick(): void {
      this.dialogRef.close();
    }
}
