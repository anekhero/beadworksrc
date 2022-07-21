import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {WorkCreateDialogComponent} from './components/work-create-dialog/work-create-dialog.component';
import {Work} from './models/work';
import {Bead} from './models/bead';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    color = 'green';
    scale = 10;
    work: Work;

    private colorIndex = 0;
    private colors = ['green', 'pink', 'blue', 'white', 'black'];

    constructor(public dialog: MatDialog) {
        this.work = new Work();
    }

    createWork() {
        const dialogRef = this.dialog.open(WorkCreateDialogComponent, {
            width: '250px',
            data: new Work()
        });

        dialogRef.afterClosed().subscribe((result: Work) => {
            if (result) {
                result.refill();
                this.work = result;
                console.log('work', this.work);
            }
        });
    }

    fill() {
        this.work.beads.forEach(row => {
            row.forEach(slot => {
                if (slot.selected) {
                    if (!slot.bead) {
                        slot.bead = new Bead();
                    }
                    slot.bead.color = this.color;
                }
            });
        });
    }

    selectAll() {
        this.work.beads.forEach(row => {
            row.forEach(slot => {
                slot.selected = true;
            });
        });
    }

    unselectAll() {
        this.work.beads.forEach(row => {
            row.forEach(slot => {
                slot.selected = false;
            });
        });
    }

    onZoomIn() {
        this.scale += 1;
    }

    onZoomOut() {
        this.scale -= 1;
    }

    changeColor() {
        if (++this.colorIndex >= this.colors.length) { this.colorIndex = 0; }
        this.color = this.colors[this.colorIndex];
    }
}
