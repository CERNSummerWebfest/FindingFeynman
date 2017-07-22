function main()
{
  //make a canvas object bound to the html canvas tag with id = "canvas"
  var canvas = new fabric.Canvas('canvas');
  //canvas.setDimensions({width:800, height:800});
  canvas.setHeight(window.innerHeight);
  canvas.setWidth(window.innerWidth);

  fabric.loadSVGFromURL('assets/FindingFeynmanLogo.svg', function(objects, options) {
    var obj = fabric.util.groupSVGElements(objects, options);
    obj.scale(2)
    obj.set({
      top: -75,
      left: window.innerWidth*0.05
    });
    obj.set('selectable', false)

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

    canvas.add(obj).renderAll();
  });  

  canvas.selection = false; // disable group selection
  


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


