function(doc){
    if (doc.type && (doc.type == "ausgabe")
	&& doc.kategorie && doc.betrag){
      emit(doc.kategorie, doc.betrag);
   }
}

