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

  this.assets.egroup.on('mousedown', function(){
    console.log('clicked e');
  });


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


  this.assets.interactionbox = new fabric.Rect({ top: window.innerHeight-100, left:(window.innerWidth/2) , fill: 'black', width: 40, height: 40});
  this.assets.interactionbox.set('fill', 'white');
  this.assets.interactionbox.set({ strokeWidth: 3, stroke: 'black' });

  this.assets.interactionbox.set({ lockMovementX: true, 
                    lockMovementY: true,
                    hasBorders:false, 
                    hasControls:false });

  this.global.canvas.add(this.assets.interactionbox);
  this.assets.interactionbox.on('mousedown', animateI(this));

  this.assets.interactionbox.expanded=false; 
  function animateI(page) { 
    return function() {
       console.log('selected interactionbox', page);
       if(page.assets.interactionbox.expanded==false){
       page.global.canvas.add(page.assets.gammagroup); 
       page.assets.gammagroup.animate('top', "-=50", {
        onChange: page.global.canvas.renderAll.bind(page.global.canvas),
      });

       page.assets.interactionbox.expanded=true; 
     } else {
      page.assets.gammagroup.animate('top', "+=50", {
        onChange: page.global.canvas.renderAll.bind(page.global.canvas),
        onComplete: function() {page.global.canvas.remove(page.assets.gammagroup);},
         });
        page.assets.interactionbox.expanded=false; 

     }
    };
  }  

  this.assets.deletebox = new fabric.Rect({ top: window.innerHeight-100, left: (window.innerWidth/2)+50, fill: 'black', width: 40, height: 40});
  this.assets.deletebox.set('fill', 'white');
  this.assets.deletebox.set({ strokeWidth: 3, stroke: 'black' });
  this.global.canvas.add(this.assets.deletebox); 
  this.assets.deletebox.set({ lockMovementX: true, 
                    lockMovementY: true,
                    hasBorders:false, 
                    hasControls:false });

  this.assets.homebox = new fabric.Rect({ top: (window.innerHeight/2)-100, left: window.innerWidth-50, fill: 'black', width: 40, height: 40});
  this.assets.homebox.set('fill', 'white');
  this.assets.homebox.set({ strokeWidth: 3, stroke: 'black' });
  this.global.canvas.add(this.assets.homebox);
  this.assets.homebox.set({ lockMovementX: true, 
                    lockMovementY: true,
                    hasBorders:false, 
                    hasControls:false }); 

  this.assets.helpbox = new fabric.Rect({ top: (window.innerHeight/2)-50, left: window.innerWidth-50, fill: 'black', width: 40, height: 40});
  this.assets.helpbox.set('fill', 'white');
  this.assets.helpbox.set({ strokeWidth: 3, stroke: 'black' });
  this.global.canvas.add(this.assets.helpbox); 
  this.assets.helpbox.set({ lockMovementX: true, 
                    lockMovementY: true,
                    hasBorders:false, 
                    hasControls:false }); 

  this.assets.smbox = new fabric.Rect({ top: (window.innerHeight/2), left: window.innerWidth-50, fill: 'black', width: 40, height: 40});
  this.assets.smbox.set('fill', 'white');
  this.assets.smbox.set({ strokeWidth: 3, stroke: 'black' });
  this.global.canvas.add(this.assets.smbox); 
  this.assets.smbox.set({ lockMovementX: true, 
                    lockMovementY: true,
                    hasBorders:false, 
                    hasControls:false }); 





  }

  this.assets.puzzle = loadPuzzle(this.global);
  }

});
