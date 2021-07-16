import mongoose from "mongoose";
mongoose.connect("mongodb://localhost/shopdb", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex:true
})
    .then(db => console.log('Connected'))
    .catch(error => console.log(error))