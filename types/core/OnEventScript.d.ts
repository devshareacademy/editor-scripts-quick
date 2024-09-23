/// <reference types="./phaser" />
import { ScriptNode } from "@phaserjs/editor-scripts-base";
export default class OnEventScript extends ScriptNode {
    constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene);
    eventName: string;
    eventEmitter: "game.events" | "scene.events" | "scene.loader" | "scene.input" | "scene.input.keyboard" | "scene.anims" | "scene.physics.world" | "gameObject";
    once: boolean;
    awake(): void;
}
