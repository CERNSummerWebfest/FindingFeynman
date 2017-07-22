
//make a canvas object bound to the html canvas tag with id = "canvas"
var canvas = new fabric.Canvas('canvas');
//canvas.setDimensions({width:800, height:800});
canvas.setHeight(window.innerHeight);
canvas.setWidth(window.innerWidth);

var edge  = {
	start: 	1,
	end:	2,
	id:	3,
	PID:	4,
	reset_nodes: function() {
		console.log("before");
		console.log(this.start);
		this.start = 0;
		console.log("after");
		console.log(this.start);
		this.end = 1;
	}
};


var text = new fabric.Text(""+edge.start, { left: 200, top: 200 });
edge.reset_nodes();
var text2 = new fabric.Text(""+edge.start, { left: 300, top: 200 });

canvas.add(text);
canvas.add(text2);
canvas.add(new fabric.Circle({ radius: 30, fill: '#f55', top: 100, left: 100 }));
canvas.item(0).hasControls = canvas.item(0).hasBorders = false;

canvas.add(new fabric.Rect({ top: 200, left: 200 , fill: 'red', width: 20, width: 20}));

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

