/// <reference types="./phaser" />
import { ScriptNode } from "@phaserjs/editor-scripts-base";
export default class ZoomCameraActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    zoom: number;
    execute(...args: any[]): void;
}
