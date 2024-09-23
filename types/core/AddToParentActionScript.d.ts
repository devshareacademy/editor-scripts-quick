/// <reference types="./phaser" />
import { ScriptNode } from "@phaserjs/editor-scripts-base";
export default class AddToParentActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    parentContainer: Phaser.GameObjects.Container | Phaser.GameObjects.Layer;
    execute(...args: any[]): void;
}
