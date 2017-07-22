
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
  },

  toObject: function() {
    return fabric.util.object.extend(this.callSuper('toObject'), {
      	label: this.get('label'),
	solution_state: this.get('solution_state'),
	current_state: this.get('current_state')
    });
  },

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
		return sum + ( edge.pid == checkpid ? 1 : 0 );	
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

  removeNode: function(vid) {
	this.current_state.filter();
  }

});

