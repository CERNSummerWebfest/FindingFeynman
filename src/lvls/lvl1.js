var Level1 = fabric.util.createClass(Page, {

  type: 'level1',

  initialize: function(options) {
    this.callSuper('initialize', options);
    console.log("Initialised level1!!!", this);
    this.formatAssets();
  },

  formatAssets: function() {
   /*
   //canvas.add(vegroup); 
   vegroup.animate('left', "-=100", {
    onChange: canvas.renderAll.bind(canvas)
  });
    //canvas.add(ugroup); 
    ugroup.animate('left', "-=150", {
    onChange: canvas.renderAll.bind(canvas)
  });
   //canvas.add(dgroup); 
    dgroup.animate('left', "-=200", {
    onChange: canvas.renderAll.bind(canvas)
  });
  */

  },

  enter: function(){

      this.assets.line2 = new fabric.Line([50, 50, 100, 100], {
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

ebox = new fabric.Rect({ originX: 'center', originY: 'center', fill: 'black', width: 40, height: 40});
ebox.set('fill', 'white');
ebox.set({ strokeWidth: 3, stroke: 'black' });
ebox.set({ lockMovementX: true, 
                    lockMovementY: true,
                    hasBorders:false, 
                    hasControls:false });

  etext = new fabric.Text("e", 
    { fontsize: 80,
      fontFamily: 'Delicious',
      originX: 'center', 
      originY: 'center'});

  this.assets.egroup = new fabric.Group([ebox, etext], {
  top: window.innerHeight-100, left: (window.innerWidth/2)-50}
  );
  this.assets.egroup.set({ lockMovementX: true, 
                    lockMovementY: true,
                    hasBorders:false, 
                    hasControls:false });

  function add_e(page){
	return function() {
		console.log('clicked e');
    		page.assets.goClick = 1;
	};
  }

  this.assets.egroup.on('mousedown', add_e(this));


  vebox = new fabric.Rect({ originX: 'center', originY: 'center', fill: 'black', width: 40, height: 40});
  vebox.set('fill', 'white');
  vebox.set({ strokeWidth: 3, stroke: 'black' });
  vebox.set({ lockMovementX: true, 
                    lockMovementY: true,
                    hasBorders:false, 
                    hasControls:false });

  vetext = new fabric.Text("v", 
    { fontsize: 80,
      fontFamily: 'Delicious',
      originX: 'center', 
      originY: 'center'});


  this.assets.vegroup = new fabric.Group([vebox, vetext], {
  top: window.innerHeight-100, left: (window.innerWidth/2)-50}
  );

  this.assets.vegroup.set({ lockMovementX: true, 
                    lockMovementY: true,
                    hasBorders:false, 
                    hasControls:false });

  ubox = new fabric.Rect({ originX: 'center', originY: 'center', fill: 'black', width: 40, height: 40});
  ubox.set('fill', 'white');
  ubox.set({ strokeWidth: 3, stroke: 'black' });
  ubox.set({ lockMovementX: true, 
                    lockMovementY: true,
                    hasBorders:false, 
                    hasControls:false });

  utext = new fabric.Text("u", 
    { fontsize: 80,
      fontFamily: 'Delicious',
      originX: 'center', 
      originY: 'center'});


  this.assets.ugroup = new fabric.Group([ubox, utext], {
  top: window.innerHeight-100, left: (window.innerWidth/2)-50}
  );

  this.assets.ugroup.set({ lockMovementX: true, 
                    lockMovementY: true,
                    hasBorders:false, 
                    hasControls:false });

  dbox = new fabric.Rect({ originX: 'center', originY: 'center', fill: 'black', width: 40, height: 40});
  dbox.set('fill', 'white');
  dbox.set({ strokeWidth: 3, stroke: 'black' });
  dbox.set({ lockMovementX: true, 
                    lockMovementY: true,
                    hasBorders:false, 
                    hasControls:false });

  dtext = new fabric.Text("d", 
    { fontsize: 80,
      fontFamily: 'Delicious',
      originX: 'center', 
      originY: 'center'});

  this.assets.dgroup = new fabric.Group([dbox, dtext], {
  top: window.innerHeight-100, left: (window.innerWidth/2)-50}
  );

  this.assets.dgroup.set({ lockMovementX: true, 
                    lockMovementY: true,
                    hasBorders:false, 
                    hasControls:false });





  fermionbox = new fabric.Rect({     
    originX: 'center', 
    originY: 'center', 
     fill: 'black', width: 40, height: 40});
  fermionbox.set('fill', 'white');
  fermionbox.set({ strokeWidth: 3, stroke: 'black' });
  fermionbox.set({ lockMovementX: true, 
                    lockMovementY: true,
                    hasBorders:false, 
                    hasControls:false });

  dot = new fabric.Circle({ 
    originX: 'center',
    originY: 'center', 
    radius: 10, 
    fill: 'black'});
  dot.set({ lockMovementX: true, 
                    lockMovementY: true,
                    hasBorders:false, 
                    hasControls:false }); 
//  this.global.canvas.bringToFront(dot);

  this.assets.fermiongroup = new fabric.Group([fermionbox, dot],{
    top: window.innerHeight-100, left: window.innerWidth/2-50, 
  });
  this.assets.fermiongroup.set({ lockMovementX: true, 
                    lockMovementY: true,
                    hasBorders:false, 
                    hasControls:false });
  this.global.canvas.add(this.assets.fermiongroup); 






  this.assets.fermiongroup.expanded=false; 
  function animateE(page) { 
    return function() {
       console.log('selected fermionbox', page);
       if(page.assets.fermiongroup.expanded==false){
       page.global.canvas.add(page.assets.egroup); 
       page.assets.egroup.animate('left', "-=50", {
        onChange: page.global.canvas.renderAll.bind(page.global.canvas),
      });
       page.global.canvas.add(page.assets.ugroup); 
       page.assets.ugroup.animate('left', "-=100", {
        onChange: page.global.canvas.renderAll.bind(page.global.canvas),
      });
       page.global.canvas.add(page.assets.dgroup); 
       page.assets.dgroup.animate('left', "-=150", {
        onChange: page.global.canvas.renderAll.bind(page.global.canvas),
      });
       page.global.canvas.add(page.assets.vegroup); 
       page.assets.vegroup.animate('left', "-=200", {
        onChange: page.global.canvas.renderAll.bind(page.global.canvas),
      });
       page.assets.fermiongroup.expanded=true; 
     } else {
      page.assets.egroup.animate('left', "+=50", {
        onChange: page.global.canvas.renderAll.bind(page.global.canvas),
        onComplete: function() {page.global.canvas.remove(page.assets.egroup);},
         });
      page.assets.ugroup.animate('left', "+=100", {
        onChange: page.global.canvas.renderAll.bind(page.global.canvas),
        onComplete: function() {page.global.canvas.remove(page.assets.ugroup);},
         });
      page.assets.dgroup.animate('left', "+=150", {
        onChange: page.global.canvas.renderAll.bind(page.global.canvas),
        onComplete: function() {page.global.canvas.remove(page.assets.dgroup);},
         });
      page.assets.vegroup.animate('left', "+=200", {
        onChange: page.global.canvas.renderAll.bind(page.global.canvas),
        onComplete: function() {page.global.canvas.remove(page.assets.vegroup);},
         });
        page.assets.fermiongroup.expanded=false; 

     }
    };
  }

  this.assets.fermiongroup.on('mousedown', animateE(this));

  gammabox = new fabric.Rect({ originX: 'center', originY: 'center', fill: 'black', width: 40, height: 40});
  gammabox.set('fill', 'white');
  gammabox.set({ strokeWidth: 3, stroke: 'black' });
  gammabox.set({ lockMovementX: true, 
                    lockMovementY: true,
                    hasBorders:false, 
                    hasControls:false });

  gammatext = new fabric.Text("y", 
    { fontsize: 80,
      fontFamily: 'Delicious',
      originX: 'center', 
      originY: 'center'});

  this.assets.gammagroup = new fabric.Group([gammabox, gammatext], {
  top: window.innerHeight-100, left: (window.innerWidth/2)}
  );

  this.assets.gammagroup.set({ lockMovementX: true, 
                    lockMovementY: true,
                    hasBorders:false, 
                    hasControls:false });



  this.assets.squiggle = this.global.assets.squiggle; 
  this.global.canvas.add(this.assets.squiggle); 
  this.assets.squiggle.scale(0.11); 
  this.assets.squiggle.set({
    originX: 'center', 
    originY: 'center', 
    hasBorders: false, 
    hasControls: false,
  });


  this.assets.interactionbox = new fabric.Rect({ originX: 'center', originY: 'center' , fill: 'black', width: 40, height: 40});
  this.assets.interactionbox.set('fill', 'white');
  this.assets.interactionbox.set({ strokeWidth: 3, stroke: 'black' });
  this.assets.interactionbox.set({ lockMovementX: true, 
                    lockMovementY: true,
                    hasBorders:false, 
                    hasControls:false });

  this.assets.interactiongroup = new fabric.Group([this.assets.interactionbox, this.assets.squiggle],{
      top: window.innerHeight-100, left: (window.innerWidth/2),
  });
  this.assets.interactiongroup.set({
    hasBorders: false, 
    hasControls: false, 
  });
  this.global.canvas.add(this.assets.interactiongroup);
  this.assets.interactiongroup.on('mousedown', animateI(this));

  this.assets.interactiongroup.expanded=false; 
  function animateI(page) { 
    return function() {
       console.log('selected interactionbox', page);
       if(page.assets.interactiongroup.expanded==false){
       page.global.canvas.add(page.assets.gammagroup); 
       page.assets.gammagroup.animate('top', "-=50", {
        onChange: page.global.canvas.renderAll.bind(page.global.canvas),
      });

       page.assets.interactiongroup.expanded=true; 
     } else {
      page.assets.gammagroup.animate('top', "+=50", {
        onChange: page.global.canvas.renderAll.bind(page.global.canvas),
        onComplete: function() {page.global.canvas.remove(page.assets.gammagroup);},
         });
        page.assets.interactiongroup.expanded=false; 

     }
    };
  }  

  this.assets.deletebox = new fabric.Rect({ 
    originX: 'center', 
    originY: 'center',
     fill: 'black', width: 40, height: 40});
  this.assets.deletebox.set('fill', 'white');
  this.assets.deletebox.set({ strokeWidth: 3, stroke: 'black' });

  this.assets.deletebox.set({ lockMovementX: true, 
                    lockMovementY: true,
                    hasBorders:false, 
                    hasControls:false });



  this.assets.eraser = this.global.assets.eraser; 
  this.assets.eraser.scale(0.11); 
  this.assets.eraser.set({
    originX: 'center', 
    originY: 'center', 
    hasBorders: false, 
    hasControls: false,
  });

  this.assets.deletegroup = new fabric.Group([this.assets.deletebox, this.assets.eraser],{
      top: window.innerHeight-100, left: (window.innerWidth/2)+50,
  });
  this.assets.deletegroup.set({
    hasBorders: false, 
    hasControls: false, 
  });
  this.global.canvas.add(this.assets.deletegroup);


  this.assets.homebox = new fabric.Rect({ 
    originX: 'center', 
    originY: 'center',
     fill: 'black', width: 40, height: 40});
  this.assets.homebox.set('fill', 'white');
  this.assets.homebox.set({ strokeWidth: 3, stroke: 'black' });

  this.assets.homebox.set({ lockMovementX: true, 
                    lockMovementY: true,
                    hasBorders:false, 
                    hasControls:false });



  this.assets.home = this.global.assets.menu; 
  this.assets.home.scale(0.1); 
  this.assets.home.set({
    originX: 'center', 
    originY: 'center', 
    hasBorders: false, 
    hasControls: false,
  });

  this.assets.homegroup = new fabric.Group([this.assets.homebox, this.assets.home],{
      top: (window.innerHeight/2)-100, left: window.innerWidth-50,
  });
  this.assets.homegroup.set({
    hasBorders: false, 
    hasControls: false, 
  });
  this.global.canvas.add(this.assets.homegroup);


  this.assets.helpbox = new fabric.Rect({ 
    originX: 'center', 
    originY: 'center',
     fill: 'black', width: 40, height: 40});
  this.assets.helpbox.set('fill', 'white');
  this.assets.helpbox.set({ strokeWidth: 3, stroke: 'black' });

  this.assets.helpbox.set({ lockMovementX: true, 
                    lockMovementY: true,
                    hasBorders:false, 
                    hasControls:false });



  this.assets.help = this.global.assets.help; 
  this.assets.help.scale(0.14); 
  this.assets.help.set({
    originX: 'center', 
    originY: 'center', 
    hasBorders: false, 
    hasControls: false,
  });

  this.assets.helpgroup = new fabric.Group([this.assets.helpbox, this.assets.help],{
      top: (window.innerHeight/2)-50, left: window.innerWidth-50,
  });
  this.assets.helpgroup.set({
    hasBorders: false, 
    hasControls: false, 
  });
  this.global.canvas.add(this.assets.helpgroup);


  this.assets.smbox = new fabric.Rect({ 
    originX: 'center', 
    originY: 'center',
     fill: 'black', width: 40, height: 40});
  this.assets.smbox.set('fill', 'white');
  this.assets.smbox.set({ strokeWidth: 3, stroke: 'black' });

  this.assets.smbox.set({ lockMovementX: true, 
                    lockMovementY: true,
                    hasBorders:false, 
                    hasControls:false });



  this.assets.sm = this.global.assets.sm; 
  this.assets.sm.scale(0.14); 
  this.assets.sm.set({
    originX: 'center', 
    originY: 'center', 
    hasBorders: false, 
    hasControls: false,
  });

  this.assets.smgroup = new fabric.Group([this.assets.smbox, this.assets.sm],{
      top: (window.innerHeight/2), left: window.innerWidth-50,
  });
  this.assets.smgroup.set({
    hasBorders: false, 
    hasControls: false, 
  });
  this.global.canvas.add(this.assets.smgroup);  


  this.assets.puzzle = loadPuzzle(this.global); // Init puzzle structure, preloaded with lvl1
  this.assets.goClick = 0;

  function uponCanvasClick(options,page) {
	return function(options){
		console.log(options.e.clientX, options.e.clientY);
		if (page.assets.goClick==1) {
			page.assets.temp1 = new fabric.Circle({ radius: 6, fill: '#f55', top: options.e.clientY-3, left: options.e.clientX-3});
		  	page.assets.temp1.set({ hasBorders:false, hasControls:false }); 
			page.global.canvas.add(page.assets.temp1);
			page.global.canvas.renderAll();
			page.assets.goClick = 2;
			page.assets.tempStartX = options.e.clientX;
			page.assets.tempStartY = options.e.clientY;
		} else
		if (page.assets.goClick==2) {
			page.assets.temp2 = new fabric.Circle({ radius: 6, fill: '#5f5', top: options.e.clientY-3, left: options.e.clientX-3});
		  	page.assets.temp2.set({ hasBorders:false, hasControls:false }); 
			page.global.canvas.add(page.assets.temp2);
			page.global.canvas.renderAll();
			page.assets.goClick = 0;
			page.assets.puzzle.addEdge(11,4,5, page.assets.tempStartX, page.assets.tempStartY,
options.e.clientX,options.e.clientY);
			page.assets.puzzle.renderDiagram();
			page.global.canvas.remove(page.assets.temp1);
			page.global.canvas.remove(page.assets.temp2);
		}
	};
  }
  
  this.global.canvas.on('mouse:down', uponCanvasClick(this.global.options,this));

  this.assets.nextButton = this.global.assets.nextButton;
  this.assets.doneButton = this.global.assets.doneButton;

  this.global.canvas.add(this.assets.nextButton);
  this.global.canvas.add(this.assets.doneButton);

  this.assets.nextButton.scale(0.5);
  this.assets.nextButton.set({
    top: this.global.canvas.getHeight()*0.8,
    left: this.global.canvas.getWidth()*0.7,
  });

  this.assets.doneButton.scale(0.5);
  this.assets.doneButton.set({
    top: this.global.canvas.getHeight()*0.8,
    left: this.global.canvas.getWidth()*0.1,
  });

  for (var a in this.assets) {
    this.assets[a].selectable = false;
  }

  this.assets.nextButton.on('mouse:down', function() {
    console.log("clicked next button");
  });
  //this.assets.nextButton.on('mousedown', this.moveTo(this.global, "level1", "menuPage"));

  this.global.canvas.renderAll();

  }

});
