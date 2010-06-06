function(doc){
   if (doc.type && doc.type == "ausgabe"){
      emit([ doc.date[0], doc.date[1], doc.kategorie],  doc.betrag);
   }
}

