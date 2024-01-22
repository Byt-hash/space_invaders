input.onButtonPressed(Button.A, function () {
    ship.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    projectile = game.createSprite(ship.get(LedSpriteProperty.X), ship.get(LedSpriteProperty.Y))
    for (let index = 0; index < 4; index++) {
        projectile.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
        if (projectile.isTouching(invader)) {
            score += 1
            invader.delete()
            projectile.delete()
            invader = game.createSprite(randint(0, 4), 0)
        }
    }
    projectile.delete()
})
input.onButtonPressed(Button.B, function () {
    ship.move(1)
})
let score = 0
let projectile: game.LedSprite = null
let ship: game.LedSprite = null
let invader: game.LedSprite = null
invader = game.createSprite(randint(0, 4), 0)
ship = game.createSprite(2, 4)
basic.forever(function () {
    invader.change(LedSpriteProperty.Y, 1)
    basic.pause(500)
    if (invader.get(LedSpriteProperty.Y) == 4) {
        basic.showString("Game Over!")
        basic.showNumber(score)
        control.reset()
    }
})
