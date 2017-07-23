
var Edge = fabric.util.createClass({
  initialize: function(id, pid, start, end, startx, starty, endx, endy, gcanvas, isreal) {
    this.start = start || 0;
    this.end = end || 0;
    this.id = id || 0;
    this.pid = pid || 0;
    this.gcanvas = gcanvas || 0;
    this.startx = startx || 0;
    this.endx = endx || 0;
    this.starty = starty || 0;
    this.endy = endy || 0;
    if (isreal) {
	    this.line = new fabric.Line([startx,starty,endx,endy], {
		    fill: 'black',
		    stroke: 'black',
		    strokeWidth: 1,
		    selectable: true,
		    hasControls: false,
		    hasBorders: false,
		    centeredRotation: false,
		    centeredScaling: false,
		    //originX: 'center',
		    //originY: 'center'
		});
	    //console.log(this.line);
	    this.node1 = new fabric.Circle({ radius: 6, fill: '#333', top: starty-3, left: startx-3});
	    this.node1.set({ hasBorders:false, hasControls:false });
	    this.node2 = new fabric.Circle({ radius: 6, fill: '#333', top: endy-3, left: endx-3});
	    this.node2.set({ hasBorders:false, hasControls:false }); 

		console.log("Gcanvas:", gcanvas);
		var callback = function(gcanvas, line, node1, node2){
			return function (){
			gcanvas.add(line);
			//console.log('updating line');
			line.set({
				x1: node1.getCenterPoint().x, y1: node1.getCenterPoint().y, 
				x2: node2.getCenterPoint().x, y2: node2.getCenterPoint().y,
				selectable: false
			});
			gcanvas.renderAll();
			};
		};

		this.node1.on('moving', callback(gcanvas,this.line,this.node1,this.node2));
		this.node2.on('moving', callback(gcanvas,this.line,this.node1,this.node2));


    }
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
var Puzzle = fabric.util.createClass(fabric.Object, {

  type: 'puzzle',

  initialize: function(options) {
    this.callSuper('initialize', options);
    this.set('label', options.label || ''); 
    this.set('gcanvas', options.gcanvas || '');			// Required to write/render to canv
    this.set('solution_state', options.solution_state || '');	// Should never be accessed
    this.set('current_state', options.current_state || '');
	// Maximum current edge id + 1
    this.set('nextid', this.current_state.length || 0); 	// Note: only applies at init()
    this.set('nodes_list', []);	// Contains only start and end node, must be manually 'gen'd'
  },

//  toObject: function() {
//    return fabric.util.object.extend(this.callSuper('toObject'), {
//     	label: this.get('label'),
//	solution_state: this.get('solution_state'),
//	current_state: this.get('current_state')
//    });
//  },

//  _render: function(ctx) {
//    this.callSuper('_render', ctx);

//    ctx.font = '20px Helvetica';
//    ctx.fillStyle = '#333';
//    ctx.fillText(this.solution_state[0].toString(), -this.width/2, -this.height/2 + 40);
//	ctx.fillText(this.solution_state[1].toString(), -this.width/2, -this.height/2 + 20);
//	ctx.fillText(this.solution_state[2].toString(), -this.width/2, -this.height/2 + 0);
//  },

	// Shit I still have to write (specifically checkers) <3

  checkSolution: function() {

	return this.current_state.reduce( function(oldcheck,edge) {
		
	}, 1);
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
  	this.nextid += 1;			
  },

  removeEdge: function(id) {
	this.current_state.splice(id, 1);
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
		return {};
	});
  },

  genNodesList: function() {
	this.nodes_list = [];
	//console.log(this.nodes_list.length);
	for (var j = 0; j < this.current_state.length; j++) {
	var ಠ_ಠ = this.current_state[j];
	//console.log(edge.toString());
		/* jshint ignore:start */
	var startnodematch = this.nodes_list.reduce(function(sofar,nod,ind) {
		return sofar + ((nod.id == ಠ_ಠ.start)? ind + 1 : 0);
	}, 0);	// if the start node of the edge is already in the node list,
		/* jshint ignore:end */
	if (startnodematch) 	{ 
			//console.log(this.nodes_list[startnodematch-1].listOfEdges.indexOf(edge.id));
			if (this.nodes_list[startnodematch-1].listOfEdges.indexOf(ಠ_ಠ.id) == -1) {
					this.nodes_list[startnodematch-1].addEdge(ಠ_ಠ.id);
				}}
	else			{ this.nodes_list.push(new Node(ಠ_ಠ.start,[ಠ_ಠ.id])); }
		/* jshint ignore:start */	
	var endnodematch = this.nodes_list.reduce(function(sofar,nod,ind) {
		return sofar + ((nod.id == ಠ_ಠ.end)? ind + 1 : 0);
	}, 0);	// if the end node of the edge is already in the node list,
		/* jshint ignore:end */
	if (endnodematch) 	{ 
			if (this.nodes_list[endnodematch-1].listOfEdges.indexOf(ಠ_ಠ.id) == -1) { 
					this.nodes_list[endnodematch-1].addEdge(ಠ_ಠ.id);
				}}
	else			{ this.nodes_list.push(new Node(ಠ_ಠ.end,[ಠ_ಠ.id])); }
    }
  },

  printNodesList: function() {
	console.log("Nodes:");
	this.nodes_list.map(function(node) {
		console.log(node.toString());
		return {};
	});
  },

	// Functions for rendering the diagram and elements

  renderDiagram: function() {
	console.log("rendering diagram");	
	for (var i=0; i<this.current_state.length; i++){
		//console.log(this.current_state[i]);
		this.gcanvas.add(this.current_state[i].line);
		this.gcanvas.add(this.current_state[i].node1);
		//console.log(this.current_state[i].node1);
		this.gcanvas.add(this.current_state[i].node2);
		//console.log(this.current_state[i].node2);
	}
	this.gcanvas.renderAll();
  }

});

function loadPuzzle(global) {	// This will probably support loading each level later

	var topheight = (window.innerHeight/2)+100;
	var botheight = (window.innerHeight/2)-100;
	console.log(window.innerHeight);

	var leftwidth = (window.innerWidth/2)-200;
	var rightwidth = (window.innerWidth/2)+200;

	var puzzle = new Puzzle({
	  label: 'test',
	  gcanvas: global.canvas,
	  solution_state: [	new Edge(0,11,0,2,0,0,0,0, global.canvas,0),
				new Edge(1,22,2,3,0,0,0,0, global.canvas,0),
				new Edge(2,-11,3,0,0,0,0,0, global.canvas,0),
				new Edge(3,11,2,1,0,0,0,0, global.canvas,0),
				new Edge(4,-11,1,3,0,0,0,0, global.canvas,0)
				],
		
	  current_state: [	new Edge(0,11,0,2,leftwidth,topheight,leftwidth+75,topheight, global.canvas,1),
				new Edge(1,-11,3,0,leftwidth+75,botheight,leftwidth,botheight, global.canvas,1),
				new Edge(2,11,4,1,rightwidth-75,topheight,rightwidth,topheight, global.canvas,1),
				new Edge(3,-11,1,5,rightwidth,botheight,rightwidth-75,botheight, global.canvas,1)
				]
	});

//-100, left: (window.innerWidth/2)-50}

puzzle.printState();
puzzle.genNodesList();
puzzle.printNodesList();
puzzle.renderDiagram();
//puzzle.addEdge(22,3,1);
//puzzle.printState();
//puzzle.genNodesList();
//puzzle.printNodesList();
//puzzle.removeEdge(1);
//puzzle.printState();
//puzzle.genNodesList();
//puzzle.printNodesList();
//puzzle.removeNode(3);
//puzzle.printState();
//puzzle.genNodesList();
//puzzle.printNodesList();
	
	return puzzle;

}

