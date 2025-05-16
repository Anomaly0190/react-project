// 📦 Import Mongoose
import mongoose from "mongoose";

// 🔗 Connecting to MongoDB
mongoose.connect("your_mongo_url");

// ✅ Define Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
}, {
  timestamps: true
});

// ✅ Create Model from Schema
const User = mongoose.model("User", userSchema);

// 🔹 INSERT DATA

// Add one user
await User.create({ name: "Sujal", email: "sujal@email.com" });

// Add multiple users at once
await User.insertMany([
  { name: "Sujal" },
  { name: "Ram" },
  { name: "Hari", email: "hari@email.com" }
]);

// 🔍 READ DATA

// Get all documents
const allUsers = await User.find();

// Get documents matching a condition
const sujalUsers = await User.find({ name: "Sujal" });

// Get only one document (first match)
const oneUser = await User.findOne({ name: "Ram" });

// Get document by ID
const userById = await User.findById("your_object_id_here");

// 🔄 UPDATE DATA

// Update one document
await User.updateOne(
  { name: "Ram" },                    // condition
  { $set: { email: "ram@email.com" } }  // update
);

// Update many documents
await User.updateMany(
  { name: "Sujal" },
  { $set: { name: "Sujal Subedi" } }
);

// Find one and update, then return updated document
const updatedUser = await User.findOneAndUpdate(
  { name: "Hari" },
  { $set: { email: "hari_new@email.com" } },
  { new: true } // return updated data
);

// 🔥 DELETE DATA

// Delete one document
await User.deleteOne({ name: "Ram" });

// Delete multiple documents
await User.deleteMany({ name: "Sujal Subedi" });

// Delete by ID
await User.findByIdAndDelete("your_object_id_here");

// 🔢 COUNT DATA

// Count number of users named 'Sujal'
const count = await User.countDocuments({ name: "Sujal" });

// 🔎 SORT, LIMIT, SKIP

// Get 5 most recent users
const recentUsers = await User.find().sort({ createdAt: -1 }).limit(5);

// Skip first 2 and get next 3
const paginatedUsers = await User.find().skip(2).limit(3);

// 🔍 REGEX SEARCH (case-insensitive search)
const searchUsers = await User.find({
  name: { $regex: "su", $options: "i" }
});

// 🔧 AGGREGATE Example (advanced)
const groupedData = await User.aggregate([
  { $match: {} },
  { $group: { _id: "$name", count: { $sum: 1 } } }
]);

// 🧪 DEBUGGING CONNECTION
mongoose.connection.on("connected", () => {
  console.log("✅ MongoDB connected");
});
mongoose.connection.on("error", (err) => {
  console.error("❌ MongoDB connection error:", err);
});
