function(doc, req) {
    if (doc.type && ( doc.type == "einnahme" || doc.type == "ausgabe" || doc.type == "config")){
        return true;
    } else {
        return false;
    }
}