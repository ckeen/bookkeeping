function(doc, req) {
  // !json templates.edit
  // !code vendor/couchapp/path.js
  // !code vendor/couchapp/template.js

  return template(templates.edit, {
    doc : doc,
    docid : toJSON((doc && doc._id) || null),
    assets : assetPath(),
    index : listPath('index','recent-posts',{descending:true,limit:8}),
    req : req
  });
}
