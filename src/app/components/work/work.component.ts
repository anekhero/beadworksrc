import {Component, Input, OnInit} from '@angular/core';
import {Work} from '../../models/work';
import {BeadSlot} from '../../models/bead-slot';
import {Bead} from '../../models/bead';

@Component({
    selector: 'app-work',
    templateUrl: './work.component.html',
    styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

    @Input()
    work: Work;

    @Input()
    scale;

    constructor() {
    }

    ngOnInit() {
    }

    onBeadClick(slot: BeadSlot) {
        slot.selected = !slot.selected;
        // if (slot.bead) {
        //     slot.bead = undefined;
        // } else {
        //     slot.bead = new Bead();
        //     slot.bead.color = 'blue';
        // }
    }

}
