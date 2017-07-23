var Level1 = fabric.util.createClass(Page, {

  type: 'level1',

  initialize: function(options) {
    this.callSuper('initialize', options);
    console.log("Initialised level1!!!", this);
    this.formatAssets();
  },

  formatAssets: function() {
    //this.assets[1].on("mousedown", this.moveTo(this.global, "startPage", "menuPage"));




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



  this.assets.fermionbox = new fabric.Rect({ top: window.innerHeight-100, left: (window.innerWidth/2)-50, fill: 'black', width: 40, height: 40});
  this.assets.fermionbox.set('fill', 'white');
  this.assets.fermionbox.set({ strokeWidth: 3, stroke: 'black' });
  this.assets.fermionbox.set({ lockMovementX: true, 
                    lockMovementY: true,
                    hasBorders:false, 
                    hasControls:false });
  this.global.canvas.add(this.assets.fermionbox);


  this.assets.fermionbox.expanded=false; 
  function animateE(page) { 
    return function() {
       console.log('selected fermionbox', page);
       if(page.assets.fermionbox.expanded==false){
       page.global.canvas.add(page.assets.egroup); 
       page.assets.egroup.animate('left', "-=50", {
        onChange: page.global.canvas.renderAll.bind(page.global.canvas),
      });
       page.assets.fermionbox.expanded=true; 
     } else {
      page.assets.egroup.animate('left', "+=50", {
        onChange: page.global.canvas.renderAll.bind(page.global.canvas),
         });
        page.assets.fermionbox.expanded=false; 
     }
    };
  }

  this.assets.fermionbox.on('mousedown', animateE(this));
  }


});