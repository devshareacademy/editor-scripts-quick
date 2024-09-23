/// <reference types="./phaser" />
import OnEventScript from "./OnEventScript";
import { ScriptNode } from "@phaserjs/editor-scripts-base";
export default class OnPointerDownScript extends OnEventScript {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    awake(): void;
}
