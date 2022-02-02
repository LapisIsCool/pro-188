AFRAME.registerComponent("on-click", {
  init: function () {
    this.click();
  },
  click: function () {
    $("#target").click(function () {
      alert("Handler for .click() called.");
    });
  },
});
