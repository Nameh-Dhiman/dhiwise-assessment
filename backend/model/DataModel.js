const { Schema, model, SchemaTypes } = require("mongoose");

const DataSchema = new Schema(
  {
    data: String,
    level2: [{ data: String, level3: [{ data: String, level4:[{data: String}] }] }],
  },
  { timestamps: true }
);

const DataModel = new model("LevelData", DataSchema);
module.exports = DataModel;
