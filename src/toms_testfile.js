var LabeledRect = fabric.util.createClass(fabric.Rect, {

  type: 'labeledRect',

  initialize: function(options) {

    this.callSuper('initialize', options);
    this.set('label', options.label || '');
  },

  toObject: function() {
    return fabric.util.object.extend(this.callSuper('toObject'), {
      label: this.get('label')
    });
  },

  _render: function(ctx) {
    this.callSuper('_render', ctx);

    ctx.font = '20px Helvetica';
    ctx.fillStyle = '#333';
    ctx.fillText(this.label, -this.width/2, -this.height/2 + 20);
  }
});