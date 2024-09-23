/// <reference types="./phaser" />
import { ScriptNode } from "@phaserjs/editor-scripts-base";
export default class EmitTickActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    delay: number;
    execute(...args: any[]): void;
}
