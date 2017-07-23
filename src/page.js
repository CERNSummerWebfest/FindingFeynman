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
    //prevent it from rerendering the page for each loop iteration
    this.global.canvas.renderOnAddRemove=false;
    for (var key in this.assets) {
      this.global.canvas.add(this.assets[key]);
    }
    
    //re-enable the default behaviour
    this.global.canvas.renderOnAddRemove = true;
    this.global.canvas.renderAll();
  },

  removeFromCanvas: function() {
    //prevent it from rerendering the page for each loop iteration
    this.global.canvas.renderOnAddRemove=false;
    for (var key in this.assets) {
      this.global.canvas.remove(this.assets[key]);
    }
    //re-enable the default behaviour
    this.global.canvas.renderOnAddRemove = true;
    this.global.canvas.renderAll();
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
    this.assets = {
      menuLabel: this.global.assets.menuLabel,
      menuPath: this.global.assets.menuPath, 
      level1: this.global.assets.level1, 
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
      level12: this.global.assets.level12,
    };

    if (this.global.canvas.getWidth() > this.assets.menuLabel.width*0.5) {
      this.assets.menuLabel.scale(0.5);
      this.assets.menuLabel.set({
        top: this.assets.menuLabel.height*0.1*0.5,
        left: this.global.canvas.getWidth()*0.5-this.assets.menuLabel.width*0.5*0.5,
      });
      console.log("canvas too big!");
    } else {
      this.assets.menuLabel.scaleToWidth(this.global.canvas.getWidth());
      this.assets.menuLabel.set({
        top: this.assets.menuLabel.height*0.1*(this.global.canvas.getWidth()/this.assets.menuLabel.width),
      });
    }

    if (this.global.canvas.getWidth() > this.assets.menuPath.width*0.5) {
      this.assets.menuPath.scale(0.5);
      this.assets.menuPath.set({
        top: this.assets.menuLabel.height*1.3*0.5,
        left: this.global.canvas.getWidth()*0.5-this.assets.menuPath.width*0.5*0.5,
      });
      console.log("canvas too big!");
    } else {
      this.assets.menuPath.scaleToWidth(this.global.canvas.getWidth());
      this.assets.menuPath.set({
        top: this.assets.menuPath.height*0.1*(this.global.canvas.getWidth()/this.assets.menuPath.width),
      });
    }

    this.assets.level1.setFill('white');
    if (this.global.canvas.getWidth() > this.assets.menuLabel.width*0.5) {
      this.assets.level1.scale(0.5);
      this.assets.level1.set({
        top: this.assets.menuLabel.height*1.1*0.5,
        left: this.global.canvas.getWidth()*0.5-this.assets.menuPath.width*0.5*0.5,
      });
      console.log("canvas too big!");
    } else {
      this.assets.level1.scale(this.global.canvas.getWidth()/this.assets.menuLabel.width);
      this.assets.level1.set({
        top: this.assets.level1.height*0.1*(this.global.canvas.getWidth()/this.assets.level1.width),
      });
    }

    this.assets.level12.setFill('white');
    if (this.global.canvas.getWidth() > this.assets.menuLabel.width*0.5) {
      this.assets.level12.scale(0.5);
      this.assets.level12.set({
        top: this.assets.menuLabel.height*1.1*0.5+this.assets.menuPath.height*0.5*0.8,
        left: this.global.canvas.getWidth()*0.5+this.assets.menuPath.width*0.5*0.1,
      });
      console.log("canvas too big!");
    } else {
      this.assets.level12.scale(this.global.canvas.getWidth()/this.assets.menuLabel.width);
      this.assets.level12.set({
        top: this.assets.level1.height*0.1*(this.global.canvas.getWidth()/this.assets.level12.width),
      });
    }



    for (var a in this.assets) {
      this.assets[a].selectable = false;
    }

    this.assets.level1.on("mousedown", this.moveTo(this.global, "menuPage", "level1"));
  },

});


