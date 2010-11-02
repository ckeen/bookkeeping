function(newDoc, oldDoc, userCtx){

  function date2string( date ) {
    var s = [];
    var tmp = "";
    for (i=0;i<date.length;i++){
      if (date[i] < 10){
        tmp = "0" + date[i];
      } else {
        tmp = date[i];
      }
      s.push(tmp);
    }
    return s.join("-");
  }

  function require() {
    for (var i=0; i < arguments.length; i++) {
      var field = arguments[i];
      message = "Ein '"+field+"' Eintrag wird benoetigt.";
      if (!newDoc[field]) throw({ forbidden : message});
    };
  };


  function assert(property, message){
    if (! property) {throw({ forbidden : message}); }
  }

  if (newDoc.type && newDoc.type == 'ausgabe'){
    require("date");
    require("betrag");
    require("kommentar");
    require("kategorie");
  } else if (newDoc.type && newDoc.type == 'einnahme'){
    require("date");
    require("kommentar");
    require("betrag");
    require("kommentar");
  }
}
