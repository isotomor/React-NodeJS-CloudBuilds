const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    default: mongoose.Types.ObjectId,
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  registrationDate: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;




//Insertar un usuario ejemplo del formato que debe seguir:

/*{
  "_id": "a123456f",
  "name": "Jauna López",
  "email": "jaunalopez@example.com",
  "registrationDate": "2023-06-28T12:00:00Z" (en este caso fecha de registro es automática al dar de alta al usuario,
  así que para hacer un post solo considerar id, name y el email)
}

  */