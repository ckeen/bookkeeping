function(doc){
  var factor = 0;
  if (doc.type && (doc.type == "ausgabe") && doc.date && doc.kategorie && doc.betrag){
    factor = -1.0;
    emit ([doc.date, doc.kategorie], doc.betrag * factor);
  }else if (doc.type && (doc.type == "einnahme") && doc.date && doc.betrag && doc.kategorie){
    factor = 1.0;
    emit ([doc.date, doc.kategorie], doc.betrag * factor);
  }
}
