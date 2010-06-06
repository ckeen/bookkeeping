function(doc) {
    if (doc.type && (doc.type == "einnahme")
	&& doc.date && doc.kategorie){
	emit([doc.date, doc.kategorie, doc._id], {betrag: doc.betrag, kommentar: doc.kommentar});
    }
}

