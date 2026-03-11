input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 2; index++) {
        basic.showNumber(3 - index)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        basic.pause(1000)
    }
    music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
