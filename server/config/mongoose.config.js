const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/product_manager_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Target Hit!"))
    .catch(err => console.log("Misfire, Misfire, Misfire!", err));