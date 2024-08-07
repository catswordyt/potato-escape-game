scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorLockedNorth, function (sprite, location) {
    game.setGameOverEffect(true, effects.confetti)
    game.gameOver(true)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (num_j < max_j) {
        num_j += 1
        mySprite.vy = -200
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite4, location4) {
    sprites.destroy(mySprite)
    game.setGameOverEffect(false, effects.dissolve)
    game.gameOver(false)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(-50, 0)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    pause(1000)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    pause(1000)
})
scene.onHitWall(SpriteKind.Player, function (sprite2, location2) {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        num_j = 0
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorLockedSouth, function (sprite3, location3) {
	
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorLockedSouth, function (sprite, location) {
    game.setGameOverEffect(true, effects.confetti)
    game.gameOver(true)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(50, 0)
})
let max_j = 0
let num_j = 0
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . 
    . . . f f f f f f . . . 
    . . f e e e e e f f f . 
    . f e e e e e e e f f f 
    f e e e e e e e f f f f 
    f e e 4 e e e f f f f f 
    f e e 4 4 e e e f f f f 
    f f e 4 4 4 4 4 f f f f 
    . f e 4 4 f f 4 e 4 f f 
    . . f d d d d 4 d 4 f . 
    . . f b b d e e f f f . 
    . . f e 4 e d d 4 f . . 
    . . f 1 1 e d d e f . . 
    . f f 6 6 f e e f f f . 
    . f f f f f f f f f f . 
    . . f f f . . . f f . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
num_j = 0
max_j = 4
mySprite.ay = 500
mySprite.startEffect(effects.trail)
mySprite.startEffect(effects.trail)
mySprite.startEffect(effects.trail)
mySprite.startEffect(effects.trail)
mySprite.startEffect(effects.trail)
mySprite.startEffect(effects.trail)
mySprite.startEffect(effects.trail)
mySprite.startEffect(effects.trail)
mySprite.startEffect(effects.trail)
mySprite.startEffect(effects.trail)
mySprite.startEffect(effects.trail)
mySprite.startEffect(effects.trail)
mySprite.startEffect(effects.trail)
mySprite.startEffect(effects.trail)
mySprite.startEffect(effects.trail)
mySprite.startEffect(effects.trail)
mySprite.startEffect(effects.trail)
mySprite.startEffect(effects.trail)
mySprite.startEffect(effects.trail)
mySprite.startEffect(effects.trail)
