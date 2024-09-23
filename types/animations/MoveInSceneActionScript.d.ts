/// <reference types="./phaser" />
import { ScriptNode } from "@phaserjs/editor-scripts-base";
export default class MoveInSceneActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    from: "LEFT" | "RIGHT" | "TOP" | "BOTTOM" | "NONE";
    execute(...args: any[]): void;
}
