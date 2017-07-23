var Page = fabric.util.createClass({

  type: 'Page',
  name: '',
  assets: [ ],
  global: {},

  initialize: function(assets, options) {
    this.name = options.name;
    this.assets = assets;
    this.global = options.global;
  },
});


var StartPage = fabric.util.createClass(Page, {

  type: 'StartPage',

  initialize: function(assets, options) {
    this.callSuper('initialize', assets, options);
    for (var a in this.assets) {
      a.selectable = false;
    }
  },

  showScreen: function() {
    for (var a in this.assets) {
      this.global.canvas.add(this.assets[a]);
    }
    this.global.canvas.renderAll();
    this.assets[1].on('mousedown', function(obj){
      return function() {
        for (var a in obj.assets) {
          obj.global.canvas.remove(obj.assets[a]);
        }
        console.log("clicked");
        obj.global.canvas.renderAll();
      };
    }(this));

  },

  formatAssets: function() {
    this.global.assets.FFlogo.scale(2);
    this.global.assets.FFlogo.set({
      top: -75,
      left: window.innerWidth*0.05
    });
    this.global.assets.FFlogo.set('selectable', false);

    this.global.assets.startButton.scale(0.5);
    this.global.assets.startButton.set({
      top: 500,
      left: window.innerWidth*0.45
    });
    this.global.assets.startButton.set('selectable', false);
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


