//this is to play our billboard video on load
AFRAME.registerComponent("play-on-click", {
  init: function () {
    this.onClick = this.onClick.bind(this);
    var videoEl = this.el.getAttribute("material").src;
    if (!videoEl) {
      return;
    }
    this.el.object3D.visible = true;
    videoEl.play();
  },

  play: function () {
    window.addEventListener("click", this.onClick);
  },
  pause: function () {
    window.removeEventListener("click", this.onClick);
  },

  onClick: function (evt) {},
});
