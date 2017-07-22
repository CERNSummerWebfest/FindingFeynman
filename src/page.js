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

  // _render: function(ctx) {
  //   ctx.font = '20px Helvetica';
  //   ctx.fillStyle = '#333';
  //   ctx.fillText(this.label, -this.width/2, -this.height/2 + 20);
  // }
});


var StartPage = fabric.util.createClass(Page, {

  type: 'StartPage',

  initialize: function(options, canvas, name) {
    this.callSuper('initialize', options, canvas, name);
  },

  // _render: function(ctx) {
  //   ctx.font = '20px Helvetica';
  //   ctx.fillStyle = '#333';
  //   ctx.fillText(this.label, -this.width/2, -this.height/2 + 20);
  // }

  showScreen: function() {
    this.canvas.add(this);
    this.canvas.renderAll();
  }

});


