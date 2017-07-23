var Page = fabric.util.createClass({

  type: 'Page',
  name: '',
  global: {},
  assets: {},

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

  initialize: function(options) {
    this.callSuper('initialize', options);
    console.log("Initialised menuPage!!!", this);
    this.formatAssets();
  },

  formatAssets: function() {
    this.assets = { //level1: this.global.assets.level1, 
      // level2: this.global.assets.level2,
      // level3: this.global.assets.level3,
      // level4: this.global.assets.level4,
      // level5: this.global.assets.level5,
      // level6: this.global.assets.level6,
      // level7: this.global.assets.level7,
      // level8: this.global.assets.level8,
      // level9: this.global.assets.level9,
      // level10: this.global.assets.level10,
      // level11: this.global.assets.level11,
      // level12: this.global.assets.level12,
      menuLabel: this.global.assets.menuLabel,
      // menuPath: this.global.assets.menuPath,
    };

    if (this.global.canvas.getWidth() > this.assets.menuLabel.width*2) {
      this.assets.menuLabel.scale(2);
      this.assets.menuLabel.set({
        top: this.assets.menuLabel.height*2*0.25,
        left: this.global.canvas.getWidth()*0.5-this.assets.menuLabel.width*2.0*0.5,
      });
      console.log("canvas too big!");
    } else {
      this.assets.menuLabel.scaleToWidth(this.global.canvas.getWidth());
      this.assets.menuLabel.set({
        top: this.assets.menuLabel.height*0.25*(this.global.canvas.getWidth()/this.assets.menuLabel.width),
      });
    }

    //this.assets.level1.on("mousedown", this.moveTo(this.global, "menuPage", "level1"));
  },

});


