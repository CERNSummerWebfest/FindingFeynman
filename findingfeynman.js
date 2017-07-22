

// starting file: ./src//nodes.js

// starting file: ./src//page.js
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



// starting file: ./src//puzzle.js

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


// starting file: ./src//toms_testfile.js
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

function main()
{
  //make a canvas object bound to the html canvas tag with id = "canvas"
  var canvas = new fabric.Canvas('canvas');
  //canvas.setDimensions({width:800, height:800});
  canvas.setHeight(window.innerHeight);
  canvas.setWidth(window.innerWidth);

  var assets = { 'FFlogo': {}, 'startButton': {} };

  var numAssetsLoaded = 0;

  fabric.loadSVGFromURL('assets/FindingFeynmanLogo.svg', function(objects, options) {
    var obj = fabric.util.groupSVGElements(objects, options);
    obj.scale(2)
    obj.set({
      top: -75,
      left: window.innerWidth*0.05
    });
    obj.set('selectable', false)
    //assets.FFlogo = obj;
    numAssetsLoaded += 1;
    canvas.add(obj).renderAll();
  });

  fabric.loadSVGFromURL('assets/StartButton.svg', function(objects, options) {
    var obj = fabric.util.groupSVGElements(objects, options);
    obj.scale(0.5)
    obj.set({
      top: 500,
      left: window.innerWidth*0.45
    });
    obj.set('selectable', false)
    //assets.startButton = obj;
    numAssetsLoaded += 1;
    canvas.add(obj).renderAll();
  });  

  canvas.selection = false; // disable group selection

  while (numAssetsLoaded < 2) {
    console.log["still num assets loaded less than 2"]
  }

  fabric.loadSVGFromURL('assets/StartButton.svg', function(objects, options) {
    var obj = fabric.util.groupSVGElements(objects, options);
    obj.scale(0.5)
    obj.set({
      top: 500,
      left: window.innerWidth*0.45
    });
    obj.set('selectable', false)
    //assets.startButton = obj;
    numAssetsLoaded += 1;
    canvas.add(obj).renderAll();
  });  

  // var startPage = new StartPage({ }, canvas, 'startPage', [ assets.FFlogo, assets.startButton ]);

  // startPage.showScreen();


  // var text = new fabric.Text('hello world', { left: 100, top: 100 });
  // var edge  = {
  //   start:  1,
  //   end:  2,
  //   id: 3,
  //   PID:  4
  // };

  // console.log(canvas)

  // canvas.add(text);
  // canvas.add(new fabric.Circle({ radius: 30, fill: '#f55', top: 100, left: 100 }));
  // canvas.item(0).hasControls = canvas.item(0).hasBorders = false;

  // canvas.add(new fabric.Rect({ top: 200, left: 200 , fill: 'red', width: 20, width: 20}));

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
}

window.onload=main;


