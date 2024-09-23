/// <reference types="./phaser" />
import { ScriptNode } from "@phaserjs/editor-scripts-base";
export default class MakeObjectColliderActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    collideWith: Phaser.GameObjects.GameObject | Phaser.GameObjects.GameObject[];
    overlapOnly: boolean;
    execute(...args: any[]): void;
    private onCollide;
    private getCollidingObject;
}
