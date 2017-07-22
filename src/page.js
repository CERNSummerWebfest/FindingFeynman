var Page = fabric.util.createClass(fabric.Group, {

  type: 'Page',
  name: '',
  canvas: { },

  initialize: function(options, canvas, name, assets) {
    this.callSuper('initialize', options);

    console.log(this);

    this.canvas = canvas;
    this.name = name;
    for (var a in assets) {
      this.add(assets[a]);
    }
  },
});


var StartPage = fabric.util.createClass(Page, {

  type: 'StartPage',

  initialize: function(options, canvas, name) {
    this.callSuper('initialize', options, canvas, name);
    console.log("start page!!!");
    console.log(this);
  },

  showScreen: function() {
    for (var a in [0,1]) {
      console.log(this[a]);
    }
    console.log(this);
    this.canvas.add(this);
    this.canvas.renderAll();
  }

});


