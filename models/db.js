const mongoose = require('mongoose')

const options = {
 connectTimeoutMS: 5000,
 useNewUrlParser: true,
 useUnifiedTopology : true
}
mongoose.connect(process.env.MONGO_URL, // changer ce lien
   options,        
   function(err) {
			err ? console.log(err) : console.log('Connection réussie !');
   }
);