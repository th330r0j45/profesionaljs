function MediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
}
MediaPlayer.prototype._initPlugins = function() {
    this.plugins.forEach(element => {
        element.run(this)
    });
}
MediaPlayer.prototype.play = function() {
    this.media.play();
};

MediaPlayer.prototype.pause = function() {
    this.media.pause();
};

MediaPlayer.prototype.togglePlay = function() {
    if (this.media.paused) {
        this.play();
    } else {
        this.pause();
    }
}

MediaPlayer.prototype.toggleMute = function() {
    this.media.muted = !this.media.muted
}

MediaPlayer.prototype.mute = function() {
    this.media.mute;
}
MediaPlayer.prototype.unmuteMute = function() {
    this.media.muted ? this.media.muted = false : this.media.muted = true;
};

export default MediaPlayer;