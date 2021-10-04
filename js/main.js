function include(file) {
  
    var script  = document.createElement('script');
    script.src  = file;
    script.type = 'text/javascript';
    script.defer = true;
    
    document.getElementsByTagName('head').item(0).appendChild(script);
    
  }

include("./js/load.js");
include("./js/typewriter.js");
include("./js/blinker.js");
include("./js/hover.js");
include("./js/scrollReveal.js");
