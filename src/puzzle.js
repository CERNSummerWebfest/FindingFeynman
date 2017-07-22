
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
    return '( ID: ' + this.id + ' , EDGES: ' + this.listOfEdges + ' )';
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
    this.set('nodes_list', [new Node(0,[]), new Node(1,[]) ]);	// Contains only start and end node
    //for (edge in current_state) {	
    //     
    //	this.set('nodes', 
    //}
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
  
  checkNumberOfNodes: function(checkpid, number) {
	return (number == this.current_state.reduce(function(sum, edge) {
		return sum + ( edge.pid == checkpid );	
	}, 0));
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
  }

});

