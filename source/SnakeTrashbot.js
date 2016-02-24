import Trashbot from "./Trashbot.js"
import Reference from "./Reference.js"
import Projectile from "./Projectile.js"

export default class SnakeTrashbot extends Trashbot {
    constructor(position, movementStyle) {
        super(
            position,
            Reference.TRASHBOT.MOVEMENT.SPEED,
            Reference.TRASHBOT.HEALTH.SNAKE,
            PIXI.loader.resources.snakeTrashbot.texture
        )
        this.movement = movementStyle
    }

    update(delta) {
        this.movement(this, Reference.TRASHBOT.MOVEMENT.AMPLITUDE, Reference.TRASHBOT.MOVEMENT.PERIOD)


        super.update(delta)
    }
}