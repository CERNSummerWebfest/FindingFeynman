
//make a canvas object bound to the html canvas tag with id = "canvas"
var canvas = new fabric.Canvas('canvas');
canvas.setHeight(window.innerHeight);
canvas.setWidth(window.innerWidth);

fabric.Image.fromURL('Assets/logo.jpg', function(oImg) {
  oImg.scale(0.1);
  canvas.add(oImg);
  oImg.set('selectable',false);
});


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
                  hasControls:false })

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
                  hasControls:false })

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
                  hasControls:false })

var fermionbox = new fabric.Rect({ top: window.innerHeight-100, left: (window.innerWidth/2)-50, fill: 'black', width: 40, height: 40});
fermionbox.set('fill', 'white');
fermionbox.set({ strokeWidth: 3, stroke: 'black' });
canvas.add(fermionbox); 
fermionbox.set({ lockMovementX: true, 
                  lockMovementY: true,
                  hasBorders:false, 
                  hasControls:false });


var gammabox = new fabric.Rect({ originX: 'center', originY: 'center', fill: 'black', width: 40, height: 40});
gammabox.set('fill', 'white');
gammabox.set({ strokeWidth: 3, stroke: 'black' });
gammabox.set({ lockMovementX: true, 
                  lockMovementY: true,
                  hasBorders:false, 
                  hasControls:false });

var gammatext = new fabric.Text("y", 
  { fontsize: 80,
    fontFamily: 'Delicious',
    originX: 'center', 
    originY: 'center'});

var gammagroup = new fabric.Group([gammabox, gammatext], {
top: window.innerHeight-100, left: (window.innerWidth/2)}
);

gammagroup.set({ lockMovementX: true, 
                  lockMovementY: true,
                  hasBorders:false, 
                  hasControls:false })


var interactionbox = new fabric.Rect({ top: window.innerHeight-100, left:(window.innerWidth/2) , fill: 'black', width: 40, height: 40});
interactionbox.set('fill', 'white');
interactionbox.set({ strokeWidth: 3, stroke: 'black' });
canvas.add(interactionbox); 
interactionbox.set({ lockMovementX: true, 
                  lockMovementY: true,
                  hasBorders:false, 
                  hasControls:false });

var deletebox = new fabric.Rect({ top: window.innerHeight-100, left: (window.innerWidth/2)+50, fill: 'black', width: 40, height: 40});
deletebox.set('fill', 'white');
deletebox.set({ strokeWidth: 3, stroke: 'black' });
canvas.add(deletebox); 
deletebox.set({ lockMovementX: true, 
                  lockMovementY: true,
                  hasBorders:false, 
                  hasControls:false });

var homebox = new fabric.Rect({ top: (window.innerHeight/2)-100, left: window.innerWidth-50, fill: 'black', width: 40, height: 40});
homebox.set('fill', 'white');
homebox.set({ strokeWidth: 3, stroke: 'black' });
canvas.add(homebox);
homebox.set({ lockMovementX: true, 
                  lockMovementY: true,
                  hasBorders:false, 
                  hasControls:false }); 

var helpbox = new fabric.Rect({ top: (window.innerHeight/2)-50, left: window.innerWidth-50, fill: 'black', width: 40, height: 40});
helpbox.set('fill', 'white');
helpbox.set({ strokeWidth: 3, stroke: 'black' });
canvas.add(helpbox); 
helpbox.set({ lockMovementX: true, 
                  lockMovementY: true,
                  hasBorders:false, 
                  hasControls:false }); 

var smbox = new fabric.Rect({ top: (window.innerHeight/2), left: window.innerWidth-50, fill: 'black', width: 40, height: 40});
smbox.set('fill', 'white');
smbox.set({ strokeWidth: 3, stroke: 'black' });
canvas.add(smbox); 
smbox.set({ lockMovementX: true, 
                  lockMovementY: true,
                  hasBorders:false, 
                  hasControls:false }); 


console.log('hello')

var verpart1 = new fabric.Circle({ radius: 10, fill: 'blue', top: (window.innerHeight/2), left: window.innerWidth/2-100})
verpart1.set({
                  hasBorders:false, 
                  hasControls:false }); 

var verpart2 = new fabric.Circle({ radius: 10, fill: 'blue', top: (window.innerHeight/2), left: window.innerWidth/2-100})
verpart2.set({
                  hasBorders:false, 
                  hasControls:false }); 

var inpart1 = new fabric.Circle({ radius: 10, fill: '#f55', top: (window.innerHeight/2), left: window.innerWidth/2-100})
inpart1.set({
                  hasBorders:false, 
                  hasControls:false }); 

var inpart2 = new fabric.Circle({ radius: 10, fill: '#f55', top: (window.innerHeight/2), left: window.innerWidth/2-100})
inpart2.set({
                  hasBorders:false, 
                  hasControls:false }); 


 
var expanded = 0; 
var nparticles = 0;  

fermionbox.on('mousedown', function() {
console.log(expanded)
if(expanded<1){
 console.log('selected fermionbox');
 canvas.add(egroup); 
 egroup.animate('left', "-=50", {
  onChange: canvas.renderAll.bind(canvas)
});
 canvas.add(vegroup); 
 vegroup.animate('left', "-=100", {
  onChange: canvas.renderAll.bind(canvas)
});
  canvas.add(ugroup); 
  ugroup.animate('left', "-=150", {
  onChange: canvas.renderAll.bind(canvas)
});
 canvas.add(dgroup); 
  dgroup.animate('left', "-=200", {
  onChange: canvas.renderAll.bind(canvas)
});
  expanded=1; 
  console.log(expanded);
}
else if(expanded>0){
 console.log('selected fermionbox');

 egroup.animate('left', "+=50", {
  onChange: canvas.renderAll.bind(canvas)
});

 vegroup.animate('left', "+=100", {
  onChange: canvas.renderAll.bind(canvas)
});

  ugroup.animate('left', "+=150", {
  onChange: canvas.renderAll.bind(canvas)
});
  dgroup.animate('left', "+=200", {
  onChange: canvas.renderAll.bind(canvas)
});
  canvas.remove(ugroup)
  canvas.remove(dgroup)
  canvas.remove(egroup)
  canvas.remove(vegroup)
  expanded=0; 
  console.log(expanded);
}

});





ugroup.on('mousedown', function() {
 console.log('selected u');
 if(nparticles<1){
  canvas.add(inpart1);
   nparticles=nparticles+1;
 }
else if(nparticles<2){
  canvas.add(inpart2);
   nparticles=nparticles+1;
 }
 console.log(nparticles)

});

dgroup.on('mousedown', function() {
 console.log('selected d');
 if(nparticles<1){
  canvas.add(inpart1);
   nparticles=nparticles+1;
 }
else if(nparticles<2){
  canvas.add(inpart2);
   nparticles=nparticles+1;
 }
 console.log(nparticles)

});

vegroup.on('mousedown', function() {
 console.log('selected v');
 if(nparticles<1){
  canvas.add(inpart1);
   nparticles=nparticles+1;
 }
else if(nparticles<2){
  canvas.add(inpart2);
   nparticles=nparticles+1;
 }

});

egroup.on('mousedown', function() {
 console.log('selected e');
 if(nparticles<1){
  canvas.add(inpart1);
   nparticles=nparticles+1;
 }
else if(nparticles<2){
  canvas.add(inpart2);
   nparticles=nparticles+1;
 }

});


var expanded2=0; 
interactionbox.on('mousedown', function() {
  if(expanded2<1){ 
  console.log('hi')
  canvas.add(gammagroup)
  gammagroup.animate('top', "-=50", {
  onChange: canvas.renderAll.bind(canvas)
  });
  expanded2=1; 

 } else if (expanded2>0){
  gammagroup.animate('top', "+=50", {
  onChange: canvas.renderAll.bind(canvas)
  });
  canvas.remove(gammagroup)
  expanded2=0; 
 } 
});

inpart1.on('mousedown', function(){
  console.log('mouse down')
  console.log(inpart1.clientX, inpart1.clientY);
  canvas.add(verpart1)
})

inpart1.on({
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