function(doc) {
  if (doc.type && (doc.type == "ausgabe")){
     if (doc.date && doc.kategorie && doc.betrag && doc.kommentar){
       emit( [doc.date, doc.kategorie, doc._id], {betrag : doc.betrag, kommentar : doc.kommentar} );
     }
  }
}

