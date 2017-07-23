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

});


