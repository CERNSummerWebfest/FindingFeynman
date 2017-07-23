var Page = fabric.util.createClass({

  type: 'Page',
  name: '',
  global : {},
  assets : [],

  initialize: function(assets, options) {
    this.canvas = options.canvas;
    this.name = options.name;
    this.global = options.global;
    this.assets = assets;
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
    //this is a function that returns a callback function
    //this is needed to get a reference to global inside the callback
    function makeCanvasAdder(global) {
      return function(e) { global.canvas.add(e); };
    }

    //map the callback over the assets
    this.assets.forEach(makeCanvasAdder(this.global));
  },

  removeFromCanvas: function() {
    //this is a function that returns a callback function
    //this is needed to get a reference to global inside the callback
    function makeCanvasRemover(global) {
      return function(e) { global.canvas.remove(e); };
    }

    //map the callback over the assets
    this.assets.forEach(makeCanvasRemover(this.global));
  },

});


var StartPage = fabric.util.createClass(Page, {

  type: 'StartPage',

  initialize: function(assets, options) {
    this.callSuper('initialize', assets, options);
    console.log("Initialised startPage!!!", this);

    this.formatAssets();
  },

  formatAssets: function() {
    this.assets.forEach(
      function(e) {
        e.set({
          hasControls: false,
        });
    });

    this.assets[1].on("mousedown", this.moveTo(this.global, "startPage", "menuPage"));


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
    this.assets[0].on("mousedown", this.moveTo(this.global, "menuPage", "level1"));

  },

});


