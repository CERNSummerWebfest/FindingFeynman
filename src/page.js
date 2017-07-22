var Page = fabric.util.createClass(fabric.Group, {

  type: 'Page',
  name: '',
  canvas: { },

  initialize: function(options, canvas, name, assets) {
    this.callSuper('initialize', options);

    this.canvas = canvas;
    this.name = name;
    this.add(assets);
  },
});


var StartPage = fabric.util.createClass(Page, {

  type: 'StartPage',

  initialize: function(options, canvas, name) {
    this.callSuper('initialize', options, canvas, name);
  },

  showScreen: function() {
    this.canvas.add(this);
    this.canvas.renderAll();
  }

});


