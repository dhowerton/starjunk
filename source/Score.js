var $ = require("jquery")
import Reference from "./Reference.js"


export default class Score {
    constructor(playerNumber) {
        this.count = 0
        this.playerNumber = (playerNumber === undefined) ? game.playerCount : playerNumber
        this.domElement = $("#p" + this.playerNumber + "-score")
        this.update()
    }

    update() {
        $(this.domElement).text(this.getScore())
    }

    getScore() {
        return this.count
    }

    incrementScore(increaseAmount) {
        increaseAmount = (increaseAmount !== undefined) ? increaseAmount : 1
        this.count += increaseAmount
        this.update()
    }

    reset() {
        $(this.domElement).text("")
    }

    static resetAll() {
        $("[id$=-score]").each(function() {
            $(this).text("")
        })
    }
}
