controller folder is like context for the backend 

$set is a mongodb method, check some more out

const salt = bcrypt.genSaltSync(10)
const hash = bcrypt.hashSync(req.body.password, salt) // ANOTHER METHOD FOR HASH

// async slow backend
sync fast frontend

countDocuments is a mongoDB feature

client side 
onChange -- passed in variable name 

handleChange -- 
...prev, [name]: operation === 'i' ? options[name] + 1 : options[name] - 1, 
finding the name of the object and then check ops if increase find property value same as decrease