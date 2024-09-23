/// <reference types="./phaser" />
import { ScriptNode } from "@phaserjs/editor-scripts-base";
export default class EmitRandomTickActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    private _target?;
    execute(...args: any[]): void;
    nextTick(...args: any[]): void;
}
