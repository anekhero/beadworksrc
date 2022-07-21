import {BeadSlot} from './bead-slot';


export class Work {

    columns = 5;
    name = 'New work';
    rows = 5;
    beadHeight = 5;
    beads: BeadSlot[][];
    beadWidth = 3;

    constructor() {
        this.refill();
    }

    refill() {
        this.beads = [];
        for (let ri = 0; ri < this.rows; ri++) {
            const r = [];
            for (let ci = 0; ci < this.columns; ci++) {
                r.push(new BeadSlot());
            }
            this.beads.push(r);
        }
    }
}
