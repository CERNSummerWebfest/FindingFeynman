var Page = fabric.util.createClass({

  type: 'Page',
  name: '',
  global: {},

  initialize: function(options) {
    this.name = options.name;
    this.global = options.global;
  },

  enter: function() {
    this.global.curPage = this;
    this.addToCanvas();
  },

  exit: function() {
    this.removeFromCanvas();
  },

  //move from one page to another (maybe srcPage could just be 'this' I don't know yet)
  moveTo: function(global, srcPage, destPage) {
    return function() {
        console.log("going to from " + srcPage + " to " + destPage);
        global.pages[srcPage].exit();
        global.pages[destPage].enter();
    };
  },

  addToCanvas: function() {
    for (var key in this.assets) {
      this.global.canvas.add(this.assets[key]);
    }
  },

  removeFromCanvas: function() {
    for (var key in this.assets) {
      this.global.canvas.remove(this.assets[key]);
    }
  },

});


var StartPage = fabric.util.createClass(Page, {

  type: 'StartPage',

  initialize: function(options) {
    this.callSuper('initialize', options);
    this.formatAssets();
  },

  formatAssets: function() {
    this.assets = { FFlogo: this.global.assets.FFlogo, startButton: this.global.assets.startButton };

    if (this.global.canvas.getWidth() > this.assets.FFlogo.width*2) {
      this.assets.FFlogo.scale(2);
      this.assets.FFlogo.set({
        top: 0-this.assets.FFlogo.height*0.1*2.0,
        left: this.global.canvas.getWidth()*0.5-this.assets.FFlogo.width*2.0*0.5,
      });
      console.log("canvas too big!");
    } else {
      this.assets.FFlogo.scaleToWidth(this.global.canvas.getWidth());
      this.assets.FFlogo.set({
        top: 0-this.assets.FFlogo.height*0.1*(this.global.canvas.getWidth()/this.assets.FFlogo.width),
      });
    }

    this.assets.startButton.scale(this.global.canvas.getWidth());
    this.assets.startButton.scale(0.5);
    this.assets.startButton.set({
      top: this.global.canvas.getHeight()*0.8-this.assets.startButton.height*0.5,
      left: this.global.canvas.getWidth()*0.5-this.assets.startButton.width*0.25,
    });

    for (var a in this.assets) {
      this.assets[a].selectable = false;
    }

    this.assets.startButton.on("mousedown", this.moveTo(this.global, "startPage", "menuPage"));
  },

});

var MenuPage = fabric.util.createClass(Page, {

  type: 'MenuPage',

  initialize: function(assets, options) {
    this.callSuper('initialize', assets, options);
    console.log("Initialised menuPage!!!", this);

    this.formatAssets();
  },

  formatAssets: function() {
    //nothing here yet
  },

});


