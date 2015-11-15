var Pixi = require("pixi.js")

var renderer = Pixi.autoDetectRenderer(80, 45)
document.getElementById("frame").appendChild(renderer.view)

var makeImage = function(colors, pixels) {
    var canvas = document.createElement("canvas")
    var context = canvas.getContext("2d")

    canvas.width = pixels[0].length
    canvas.height = pixels.length

    for(var y = 0; y < pixels.length; y++) {
        for(var x = 0; x < pixels[y].length; x++) {
            var pixel = pixels[y][x]
            if(pixel != undefined) {
                context.fillStyle = colors[pixel]
                context.fillRect(x, y, 1, 1)
            }
        }
    }

    return canvas.toDataURL()
}

var Colors = {
    0: "#5C415D",
    1: "#74526C",
    2: "#AA767C",
    3: "#D6A2AD",
    4: "#EEC584"
}

//var image = require("./image.png")
var image = makeImage(Colors, [
    [0,0,0,1,0,0,0],
    [1,0,0,1,0,0,1],
    [0,0,0,1,0,0,0],
    [1,0,0,1,0,0,1],
    [1,1,0,1,0,1,1],
    [0,0,0,1,0,0,0],
    [1,0,1,1,1,0,1],
])

var pulser = Pixi.Sprite.fromImage(image)
pulser.position.x = 15.5
pulser.position.y = 15.5
pulser.anchor.x = 0.5
pulser.anchor.y = 0.5

var stage = new Pixi.Container()
stage.addChild(pulser)

var Loop = require("./systems/Loop")
var Input = require("./systems/Input")

var loop = new Loop(function(tick) {
    renderer.render(stage)
    if(Input.isDown("<space>")) {
        if(pulser.position.y < 45 - 15.5) {
            pulser.position.y += 500 * tick
            if(pulser.position.y > 45 - 15.5) {
                pulser.position.y = 45 - 15.5
            }
        }
    } else {
        if(pulser.position.y > 15.5) {
            pulser.position.y -= 500 * tick
            if(pulser.position.y < 15.5) {
                pulser.position.y = 15.5
            }
        }
    }
})
