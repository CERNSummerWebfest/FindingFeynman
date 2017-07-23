var Level1 = fabric.util.createClass(Page, {

  type: 'level1',

  initialize: function(assets, options) {
    this.callSuper('initialize', assets, options);
    console.log("Initialised level1!!!", this);

    this.formatAssets();
  },

  formatAssets: function() {
    this.assets.forEach(
      function(e) {
        e.set({
          hasControls: false,
        });
    });

    this.global.assets.FFlogo.scale(0.4);
    //this.assets[1].on("mousedown", this.moveTo(this.global, "startPage", "menuPage"));

  var line2 = new fabric.Line([50, 50, 100, 100], {
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
  this.assets.push(line2);


    var ebox = new fabric.Rect({ originX: 'center', originY: 'center', fill: 'black', width: 40, height: 40});
  ebox.set('fill', 'white');
  ebox.set({ strokeWidth: 3, stroke: 'black' });
  ebox.set({ lockMovementX: true, 
                    lockMovementY: true,
                    hasBorders:false, 
                    hasControls:false });

  var etext = new fabric.Text("e", 
    { fontsize: 80,
      fontFamily: 'Delicious',
      originX: 'center', 
      originY: 'center'});

  var egroup = new fabric.Group([ebox, etext], {
  top: window.innerHeight-100, left: (window.innerWidth/2)-50}
  );
  egroup.set({ lockMovementX: true, 
                    lockMovementY: true,
                    hasBorders:false, 
                    hasControls:false });

  egroup.on('mousedown', function(){
    console.log('clicked e');
  });

  this.assets.push(egroup);


   var vebox = new fabric.Rect({ originX: 'center', originY: 'center', fill: 'black', width: 40, height: 40});
  vebox.set('fill', 'white');
  vebox.set({ strokeWidth: 3, stroke: 'black' });
  vebox.set({ lockMovementX: true, 
                    lockMovementY: true,
                    hasBorders:false, 
                    hasControls:false });

  var vetext = new fabric.Text("v", 
    { fontsize: 80,
      fontFamily: 'Delicious',
      originX: 'center', 
      originY: 'center'});


  var vegroup = new fabric.Group([vebox, vetext], {
  top: window.innerHeight-100, left: (window.innerWidth/2)-50}
  );

  vegroup.set({ lockMovementX: true, 
                    lockMovementY: true,
                    hasBorders:false, 
                    hasControls:false });

  this.assets.push(vegroup);


  var ubox = new fabric.Rect({ originX: 'center', originY: 'center', fill: 'black', width: 40, height: 40});
  ubox.set('fill', 'white');
  ubox.set({ strokeWidth: 3, stroke: 'black' });
  ubox.set({ lockMovementX: true, 
                    lockMovementY: true,
                    hasBorders:false, 
                    hasControls:false });

  var utext = new fabric.Text("u", 
    { fontsize: 80,
      fontFamily: 'Delicious',
      originX: 'center', 
      originY: 'center'});


  var ugroup = new fabric.Group([ubox, utext], {
  top: window.innerHeight-100, left: (window.innerWidth/2)-50}
  );

  ugroup.set({ lockMovementX: true, 
                    lockMovementY: true,
                    hasBorders:false, 
                    hasControls:false });

  this.assets.push(ugroup);

  var dbox = new fabric.Rect({ originX: 'center', originY: 'center', fill: 'black', width: 40, height: 40});
  dbox.set('fill', 'white');
  dbox.set({ strokeWidth: 3, stroke: 'black' });
  dbox.set({ lockMovementX: true, 
                    lockMovementY: true,
                    hasBorders:false, 
                    hasControls:false });

  var dtext = new fabric.Text("d", 
    { fontsize: 80,
      fontFamily: 'Delicious',
      originX: 'center', 
      originY: 'center'});

  var dgroup = new fabric.Group([dbox, dtext], {
  top: window.innerHeight-100, left: (window.innerWidth/2)-50}
  );

  dgroup.set({ lockMovementX: true, 
                    lockMovementY: true,
                    hasBorders:false, 
                    hasControls:false });

  this.assets.push(dgroup);

    var fermionbox = new fabric.Rect({ top: window.innerHeight-100, left: (window.innerWidth/2)-50, fill: 'black', width: 40, height: 40});
  fermionbox.set('fill', 'white');
  fermionbox.set({ strokeWidth: 3, stroke: 'black' });
  fermionbox.set({ lockMovementX: true, 
                    lockMovementY: true,
                    hasBorders:false, 
                    hasControls:false });
  this.assets.push(fermionbox); 

  var expanded=0; 
  function animateE(page) { 
    return function() {
      console.log(expanded);

       console.log('selected fermionbox');
       page.global.canvas.add(egroup); 
       page.assets.egroup.animate('left', "-=50", {
        onChange: page.global.canvas.renderAll.bind(canvas)
      });
    };
  }

  fermionbox.on('mousedown', animateE(this));
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
    this.callSuper('enter');

  }

});