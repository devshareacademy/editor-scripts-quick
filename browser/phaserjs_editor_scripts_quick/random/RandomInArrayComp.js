// You can write more code here
/* START OF COMPILED CODE */
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */
export default class RandomInArrayComp {
    constructor(gameObject) {
        this.gameObject = gameObject;
        gameObject["__RandomInArrayComp"] = this;
        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }
    static getComponent(gameObject) {
        return gameObject["__RandomInArrayComp"];
    }
    gameObject;
    options = [];
    /* START-USER-CODE */
    getRandomInArray() {
        return Phaser.Utils.Array.GetRandom(this.options);
    }
}
/* END OF COMPILED CODE */
// You can write more code here