
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
    this.callSuper('initialize', options);
    this.set('label', options.label || '');
    this.set('solution_state', options.solution_state || '');	// Should never be accessed
    this.set('current_state', options.solution_state || '');
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

