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
      this.assets[a].selectable = true;
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
    if (this.global.canvas.getWidth() > this.global.assets.FFlogo.width*2) {
      this.global.assets.FFlogo.scale(2);
      this.global.assets.FFlogo.set({
        top: 0-this.global.assets.FFlogo.height*0.1*2.0,
        left: this.global.canvas.getWidth()*0.5-this.global.assets.FFlogo.width*2.0*0.5,
      });
      console.log("canvas too big!");
    } else {
      this.global.assets.FFlogo.scaleToWidth(this.global.canvas.getWidth());
      this.global.assets.FFlogo.set({
        top: 0-this.global.assets.FFlogo.height*0.1*(this.global.canvas.getWidth()/this.global.assets.FFlogo.width),
      });
    }
    //this.global.assets.FFlogo.set('selectable', false);

    this.global.assets.startButton.scale(this.global.canvas.getWidth());
    this.global.assets.startButton.scale(0.5);
    this.global.assets.startButton.set({
      top: this.global.canvas.getHeight()*0.8-this.global.assets.startButton.height*0.5,
      left: this.global.canvas.getWidth()*0.5-this.global.assets.startButton.width*0.25,
    });
    //this.global.assets.startButton.set('selectable', false);
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


