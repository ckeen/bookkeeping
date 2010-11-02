function(doc, req) {
    if ( doc._id.match('_design/(.*)') || ( doc.type && doc.type == "config")){
        return false;
    }
    return true;
}