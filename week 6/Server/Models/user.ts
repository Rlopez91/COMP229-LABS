//import mongoose
import mongoose from 'mongoose';
const Schema = mongoose.Schema; //alias for mongoose.schema

//create a schema that matches the data
const UserSchema = new Schema({
    DisplayName: String,
    username: String,
    EmailAddress: String,
    Created:{
        type: Date,
        default: Date.now()
    },
    Updated:{
        type: Date,
        default: Date.now()
    }
},
{
    collection: "users"
});

//create model using the schema
const Model = mongoose.model("User", UserSchema);

//export the model, this makes the file a module
export default Model;