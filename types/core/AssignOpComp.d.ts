import { ScriptNode } from "@phaserjs/editor-scripts-base";
export default class AssignOpComp {
    constructor(gameObject: any);
    static getComponent(gameObject: any): AssignOpComp;
    private gameObject;
    operator: "=" | "+=" | "*=";
    static computeValue(node: ScriptNode, oldValue: number, newValue: number): number;
}
