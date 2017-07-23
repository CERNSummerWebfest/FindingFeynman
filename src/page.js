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
});


var StartPage = fabric.util.createClass(Page, {

  type: 'StartPage',

  initialize: function(assets, options) {
    this.callSuper('initialize', assets, options);
    console.log("Initialised startPage!!!", this);

  },

  formatAssets function() {
      assets.forEach(function(e) {e.set({
      hasControls: false, 
    });
  });
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

});


