controller folder is like context for the backend 

$set is a mongodb method, check some more out

const salt = bcrypt.genSaltSync(10)
const hash = bcrypt.hashSync(req.body.password, salt) // ANOTHER METHOD FOR HASH

// async slow backend
sync fast frontend

countDocuments is a mongoDB feature