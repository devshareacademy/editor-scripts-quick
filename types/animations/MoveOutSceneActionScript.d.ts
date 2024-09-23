/// <reference types="./phaser" />
import { ScriptNode } from "@phaserjs/editor-scripts-base";
export default class MoveOutSceneActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    to: "LEFT" | "RIGHT" | "TOP" | "BOTTOM" | "NONE";
    execute(...args: any[]): void;
}
