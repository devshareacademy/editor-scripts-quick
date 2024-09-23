/// <reference types="./phaser" />
import { ScriptNode } from "@phaserjs/editor-scripts-base";
export default class SpawnActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    objectPrefab: any;
    spawnInParentPosition: boolean;
    execute(...args: any[]): void;
}
