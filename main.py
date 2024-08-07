def on_overlap_tile(sprite, location):
    pass
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.door_locked_north,
    on_overlap_tile)

def on_hit_wall(sprite2, location2):
    global num_j
    if mySprite.is_hitting_tile(CollisionDirection.BOTTOM):
        num_j = 0
scene.on_hit_wall(SpriteKind.player, on_hit_wall)

def on_up_pressed():
    global num_j
    if num_j < max_j:
        num_j += 1
        mySprite.vy = -200
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_left_pressed():
    mySprite.set_velocity(-50, 0)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_right_released():
    while mySprite.vx < 0:
        mySprite.vx += -25
        pause(5000)
controller.right.on_event(ControllerButtonEvent.RELEASED, on_right_released)

def on_left_released():
    while mySprite.vx > 0:
        mySprite.vx += 25
        pause(5000)
controller.left.on_event(ControllerButtonEvent.RELEASED, on_left_released)

def on_overlap_tile2(sprite3, location3):
    pass
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.door_locked_south,
    on_overlap_tile2)

def on_right_pressed():
    mySprite.set_velocity(50, 0)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_overlap_tile3(sprite4, location4):
    sprites.destroy(mySprite)
    game.set_game_over_effect(False, effects.dissolve)
    game.game_over(False)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.hazard_lava1,
    on_overlap_tile3)

max_j = 0
num_j = 0
mySprite: Sprite = None
tiles.set_current_tilemap(tilemap("""
    level2
"""))
mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
scene.camera_follow_sprite(mySprite)
tiles.place_on_random_tile(mySprite, sprites.dungeon.collectible_insignia)
num_j = 0
max_j = 2
mySprite.ay = 500