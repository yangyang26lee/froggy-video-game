input.onButtonPressed(Button.A, function () {
    frog.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    frog.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    frog.change(LedSpriteProperty.X, 1)
})
let frog: game.LedSprite = null
frog = game.createSprite(2, 4)
frog.set(LedSpriteProperty.Blink, 8)
let car1 = game.createSprite(0, 3)
let car_2 = game.createSprite(4, 1)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        basic.pause(500)
        car1.change(LedSpriteProperty.X, 1)
        car_2.change(LedSpriteProperty.X, -1)
        if (frog.isTouching(car1) || frog.isTouching(car_2)) {
            game.gameOver()
        }
        if (frog.get(LedSpriteProperty.Y) == 0) {
            frog.delete()
            frog = game.createSprite(2, 4)
        }
    }
    car1.delete()
    car_2.delete()
    car1 = game.createSprite(0, 3)
    car_2 = game.createSprite(4, 1)
})
