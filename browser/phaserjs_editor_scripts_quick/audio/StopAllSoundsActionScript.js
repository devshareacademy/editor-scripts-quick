// You can write more code here
/* START OF COMPILED CODE */
import { ScriptNode } from "@phaserjs/editor-scripts-base.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
export default class StopAllSoundsActionScript extends ScriptNode {
    constructor(parent) {
        super(parent);
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    /* START-USER-CODE */
    execute(...args) {
        this.scene.sound.stopAll();
    }
}
/* END OF COMPILED CODE */
// You can write more code here
