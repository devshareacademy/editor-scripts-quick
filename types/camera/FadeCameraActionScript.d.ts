/// <reference types="./phaser" />
import { ScriptNode } from "@phaserjs/editor-scripts-base";
export default class FadeCameraActionScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    fadeDirection: "FadeIn" | "FadeOut";
    color: string;
    static getColor(colorName: string): Phaser.Display.Color;
    execute(...args: any[]): void;
}
