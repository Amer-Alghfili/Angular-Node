const mongoose = require("mongoose");
const app = require("./index");

mongoose
  .connect(
    "mongodb+srv://Amer:nLlCxBtr2UicP7rI@cluster0.svter.mongodb.net/Angular?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }
  )
  .then(c => {
    console.log("Yeah");
  });

app.listen(3000);
