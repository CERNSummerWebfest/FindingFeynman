

function afterAssetsLoaded(global) {
  console.log("Loaded assets: ", global.assets);
  // for (var a in global.assets) {
  //   global.canvas.add(global.assets[a]).renderAll();
  // }
  global.pages.startPage = new StartPage({
                              global: global,
                              name: "startPage",
                              });

  global.pages.menuPage = new MenuPage({
                              global : global,
                              name: "menuPage",
                              });

  global.pages.level1 = new Level1([global.assets.FFlogo], {
                              global : global,
                              name: "level1",
                              });

  global.pages.startPage.enter();

  //level1(global);
}

function loadAssets(global, function_to_run_after_assets_are_loaded) {

  //info on the assets that we're gonna load
  global.assets_to_load = [
    {url: "FindingFeynmanLogo.svg", name: "FFlogo"},
    {url: "StartButton.svg", name: "startButton"},
    {url: "DoneButton.svg", name: "doneButton"},
    {url: "DotIcon.svg", name: "dot"},
    //{url: "EmmyNoether.svg", name: "noether"},
    {url: "EraserIcon.svg", name: "eraser"},
    {url: "HelpIcon.svg", name: "help"},
    {url: "Level10Icon.svg", name: "level10"},
    {url: "Level11Icon.svg", name: "level11"},
    {url: "Level12Icon.svg", name: "level12"},
    {url: "Level1Icon.svg", name: "level1"},
    {url: "Level2Icon.svg", name: "level2"},
    {url: "Level3Icon.svg", name: "level3"},
    {url: "Level4Icon.svg", name: "level4"},
    {url: "Level5Icon.svg", name: "level5"},
    {url: "Level6Icon.svg", name: "level6"},
    {url: "Level7Icon.svg", name: "level7"},
    {url: "Level8Icon.svg", name: "level8"},
    {url: "Level9Icon.svg", name: "level9"},
    {url: "MenuLabel.svg", name: "menuLabel"},
    {url: "MenuPageStuff.svg", name: "menuPage"},
    {url: "MenuPath.svg", name: "menuPath"},
    {url: "MenuIcon.svg", name: "menu"},
    {url: "NextButton.svg", name: "nextButton"},
    {url: "SM_Background.svg", name: "smBackground"},
    {url: "SM_bottom.svg", name: "smBottom"},
    {url: "SM_charm.svg", name: "smCharm"},
    {url: "SM_down.svg", name: "smDown"},
    {url: "SM_electron.svg", name: "smElectron"},
    {url: "SM_electron_neutrino.svg", name: "smElectronNeutrino"},
    {url: "SM_gluon.svg", name: "smGluon"},
    {url: "SM_Higgs.svg", name: "smHiggs"},
    {url: "SM_muon.svg", name: "smMuon"},
    {url: "SM_muon_neutrino.svg", name: "smMuonNeutrino"},
    {url: "SM_Nope.svg", name: "smNope"},
    {url: "SM_photon.svg", name: "smPhoton"},
    {url: "SM_strange.svg", name: "smStrange"},
    {url: "SM_tauon.svg", name: "smTauon"},
    {url: "SM_tauon_neutrino.svg", name: "smTauonNeutrino"},
    {url: "SM_top.svg", name: "smTop"},
    {url: "SM_up.svg", name: "smUp"},
    {url: "SM_W.svg", name: "smW"},
    {url: "SM_Z.svg", name: "smZ"},
    {url: "SMIcon.svg", name: "sm"},
    {url: "SpeechBubble.svg", name: "speechBubble"},
    {url: "SquiggleIcon.svg", name: "squiggle"},
    ];

  global.assets = {};
  function recurse_on_assets(global, assets_to_load) {
    //pop an asset of the list, removing it
    var asset = global.assets_to_load.pop();

    if(asset === undefined) {
      console.log("got to the base case, calling afterAssetsLoaded");
      //now all the assets are loaded we can call the main function
      function_to_run_after_assets_are_loaded(global);
    }
    //if there are still assets left to load
    else {
      fabric.loadSVGFromURL("assets/" + asset.url, function(objs, opt) {
        console.log("loaded asset " + asset.name);
        var object = fabric.util.groupSVGElements(objs, opt);
        
        //make a new field on assets for this asset
        global.assets[asset.name] = object;

        //this is the recursive part
        recurse_on_assets(global, assets_to_load);
      });}  
  }
  recurse_on_assets(global, global.assets_to_load);
}

//this just makes the global variables and then calls loadAssets
function main() {
  //ALL GLOBAL STATE SHOULD BE HERE!
  //make a canvas object bound to the html canvas tag with id = "canvas"
  console.log("Entered main");
  var global = {};
  global.canvas = new fabric.Canvas('canvas');
  global.canvas.setWidth(window.innerWidth);
  global.canvas.setHeight(window.innerHeight);
  global.assets = {};
  global.pages = {};

  //this might disable the annoying touch scrolling on a phone, dunno
  //canvas.allowTouchScrolling = false;

  //make a background image?
  //canvas.backgroundImage = ...

  //make it better for ios?
  //canvas.enableRetinaScaling = true;

  //this loads assets and then calls the arguments
  loadAssets(global, afterAssetsLoaded);
}

//this is the entry point to all the code, ever.
window.onload=main;


