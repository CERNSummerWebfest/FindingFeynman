

// starting file: ./src/nodes.js

// starting file: ./src/puzzle.js

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

//var edge = new Edge(1,2,3,4);
//console.log(edge);
//console.log(edge.toString());

var Node = fabric.util.createClass({
  initialize: function(id, listOfEdges) {
    this.id = id || 0;
    this.listOfEdges = listOfEdges || [];
  },
  toString: function() {
    return '( ID: ' + this.id + ' , EDGES: ' + this.listOfEdges.toString() + ' )';
  },
  addEdge: function(number) {
	this.listOfEdges.push(number);
  }
});

//Note: need to change inheritance to "page object" once such a thing exists
var Puzzle = fabric.util.createClass(fabric.Rect, {

  type: 'puzzle',

  initialize: function(options) {
    options || (options = { });

    this.callSuper('initialize', options);
    this.set('label', options.label || '');
    this.set('solution_state', options.solution_state || '');	// Should never be accessed
    this.set('current_state', options.solution_state || '');
	// Maximum current edge id + 1
    this.set('nextid', this.current_state.length || 0); 	// Note: only applies at init()
    this.set('nodes_list', []);	// Contains only start and end node
  },

//  toObject: function() {
//    return fabric.util.object.extend(this.callSuper('toObject'), {
//     	label: this.get('label'),
//	solution_state: this.get('solution_state'),
//	current_state: this.get('current_state')
//    });
//  },

  _render: function(ctx) {
    this.callSuper('_render', ctx);

    ctx.font = '20px Helvetica';
    ctx.fillStyle = '#333';
    ctx.fillText(this.solution_state[0].toString(), -this.width/2, -this.height/2 + 40);
	ctx.fillText(this.solution_state[1].toString(), -this.width/2, -this.height/2 + 20);
	ctx.fillText(this.solution_state[2].toString(), -this.width/2, -this.height/2 + 0);
  },

	// Shit I still have to write (specifically checkers) <3

  checkSolution: function() {



  },

  checkNumberOfParticlesType: function(checkpid, number) {
	return (number == this.current_state.reduce(function(sum, edge) {
		return sum + ( edge.pid == checkpid );	
	}, 0));
  },

  checkNumberOfEdges: function(number) {
	return (this.current_state.length == number);
  },
  
  checkNumberOfNodes: function(number) {		// MUST call genNodesList first!!!
	return (this.nodes_list.length == number);
  },

	// Functions for editing the diagram

  addEdge: function(pid, start, end) {
  	this.current_state.push(new Edge(this.nextid,pid,start,end));
  	this.nextid += 1;			//90% sure this will work, will test later
  },

  removeEdge: function(id) {
	this.current_state.splice(id, 1);	//80% sure this will work, will test later
	//nextid is not decremented, because we didn't bother to shift the id for each edge because lazi
  },

  removeNode: function(nodeid) {
	this.current_state = this.current_state.filter(function(edge) {
		return (edge.start != nodeid); 
		//neither end of edge is at node
	});
  },

  printState: function() {
	console.log("Current State:");
	this.current_state.map(function(edge) {
		console.log(edge.toString());
		return;
	});
  },

  genNodesList: function() {
	this.nodes_list = [];
	//console.log(this.nodes_list.length);
	for (var j = 0; j < this.current_state.length; j++) {
	var edge = this.current_state[j];
	//console.log(edge.toString());
	var startnodematch = this.nodes_list.reduce(function(sofar,node,index) {
		return sofar + ((node.id == edge.start)? index + 1 : 0);
	}, 0)	// if the start node of the edge is already in the node list,
	if (startnodematch) 	{ 
			//console.log(this.nodes_list[startnodematch-1].listOfEdges.indexOf(edge.id));
			if (this.nodes_list[startnodematch-1].listOfEdges.indexOf(edge.id) == -1) {
					this.nodes_list[startnodematch-1].addEdge(edge.id);
				}}
	else			{ this.nodes_list.push(new Node(edge.start,[edge.id])); }
	var endnodematch = this.nodes_list.reduce(function(sofar,node,index) {
		return sofar + ((node.id == edge.end)? index + 1 : 0);
	}, 0)	// if the end node of the edge is already in the node list,
	if (endnodematch) 	{ 
			if (this.nodes_list[endnodematch-1].listOfEdges.indexOf(edge.id) == -1) { 
					this.nodes_list[endnodematch-1].addEdge(edge.id);
				}}
	else			{ this.nodes_list.push(new Node(edge.end,[edge.id])); }
    }
  },

  printNodesList: function() {
	console.log("Nodes:");
	this.nodes_list.map(function(node) {
		console.log(node.toString());
		return;
	});
  }

});


// starting file: ./src/index.js

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
		//console.log("before");
		//console.log(this.start);
		this.start = 0;
		//console.log("after");
		//console.log(this.start);
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

var puzzle = new Puzzle({
  width: 300,
  height: 50,
  left: 600,
  top: 200,
  label: 'test',
  fill: '#faa',
  solution_state: [	new Edge(0,11,0,2),
			new Edge(1,30,2,3),
			new Edge(2,-11,3,0),
			new Edge(3,11,2,1),
			new Edge(4,-11,1,3)
			],
		
  current_state: [	new Edge(0,11,0,2),
			new Edge(1,30,2,3),
			new Edge(2,-11,3,0),
			new Edge(3,11,2,1),
			new Edge(4,-11,1,3)
			]
});

canvas.add(puzzle);
puzzle.printState();
puzzle.genNodesList();
puzzle.printNodesList();
puzzle.addEdge(22,3,1);
puzzle.printState();
puzzle.genNodesList();
puzzle.printNodesList();
puzzle.removeEdge(1);
puzzle.printState();
puzzle.genNodesList();
puzzle.printNodesList();
puzzle.removeNode(3);
puzzle.printState();
puzzle.genNodesList();
puzzle.printNodesList();

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


// starting file: ./src/toms_testfile.js
var LabeledRect = fabric.util.createClass(fabric.Rect, {

  type: 'labeledRect',

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
// starting file: main.js 

//make a canvas object bound to the html canvas tag with id = "canvas"
var canvas = new fabric.Canvas('canvas');

//this might disable the annoying touch scrolling on a phone, dunno
//canvas.allowTouchScrolling = false;

//make a background image?
//canvas.backgroundImage = ...

//make it better for ios?
//canvas.enableRetinaScaling = true;

//canvas.setDimensions({width:800, height:800});
canvas.setHeight(window.innerHeight);
canvas.setWidth(window.innerWidth);

var edge  = {
	start: 	1,
	end:	2,
	id:	3,
	PID:	4,
	reset_nodes: function() {
		//console.log("before");
		//console.log(this.start);
		this.start = 0;
		//console.log("after");
		//console.log(this.start);
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

