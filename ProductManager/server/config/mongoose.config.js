const mongoose = require('mongoose');

const db_name="productmanager"

mongoose.connect(process.env.SECRET_KEY, {
//mongoose.connect(`mongodb://localhost/${db_name}`, {  if  mongodb  on  local  machine 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    writeConcern: {
        w: 'majority',
        j: true,
        wtimeout: 1000
    }
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));