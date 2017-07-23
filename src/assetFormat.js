function formatAssets(global) {
  global.assets.FFlogo.scale(2);
  global.assets.FFlogo.set({
    top: -75,
    left: window.innerWidth*0.05
  });
  global.assets.FFlogo.set('selectable', false);

  global.assets.startButton.scale(0.5);
  global.assets.startButton.set({
    top: 500,
    left: window.innerWidth*0.45
  });
  global.assets.startButton.set('selectable', false);
}



