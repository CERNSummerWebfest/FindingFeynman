var SMPage = fabric.util.createClass(Page, {

  type: 'SMPage',

  initialize: function(options) {
    this.callSuper('initialize', options);
    console.log("Initialised smPage!!!", this);
    this.formatAssets();
  },

  formatAssets: function() {
    this.assets = { smImage: this.global.assets.smImage };

    this.assets.smImage.scaleToWidth(window.innerWidth);

    this.assets.smImage.on("mousedown", this.moveTo(this.global, "smPage", "menuPage"));

  },
});



