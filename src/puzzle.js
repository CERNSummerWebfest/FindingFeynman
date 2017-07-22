
//make a canvas object bound to the html canvas tag with id = "canvas"
var canvas = new fabric.Canvas('canvas');
//canvas.setDimensions({width:800, height:800});
canvas.setHeight(window.innerHeight);
canvas.setWidth(window.innerWidth);

var Edge = fabric.util.createClass({
  initialize: function(id, pid, start, end) {
    this.start = start || 0;
    this.end = end || 0;
    this.id = id || 0;
    this.pid = pid || 0;
  },
  toString: function() {
    return '( ID: ' + this.id + ' , PID: ' + this.pid + ' , START: ' + this.start + ' , END: ' + this.end + ' )';
  }
});

var edge = new Edge(1,2,3,4);
console.log(edge);
console.log(edge.toString());

//Note: need to change inheritance to "page object" once such a thing exists
var Puzzle = fabric.util.createClass(fabric.Rect, {

  type: 'puzzle',

  initialize: function(options) {
    options || (options = { });

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


var labeledRect = new Puzzle({
  width: 100,
  height: 50,
  left: 100,
  top: 100,
  label: 'test',
  fill: '#faa' 
});
canvas.add(labeledRect);

canvas.on({
  'mouse:down': function(e) {
    if (e.target) {
      e.target.opacity = 0.5;
      canvas.renderAll();
    }
  },
  'mouse:up': function(e) {
    if (e.target) {
      e.target.opacity = 1;
      canvas.renderAll();
    }
  },
  'object:moved': function(e) {
    e.target.opacity = 0.5;
  },
  'object:modified': function(e) {
    e.target.opacity = 1;
  }
});

