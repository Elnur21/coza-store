const mongoose = require("mongoose")

const CategorySchema = new mongoose.Schema({
  name: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Category = mongoose.model("Category", CategorySchema);

export default Category;