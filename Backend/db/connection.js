import { MongoClient } from "mongodb";

// const uri = process.env.ATLAS_URI || "";
const client = new MongoClient(process.env.ATLAS_URI);
const DATABASE_NAME = "portfolio_db";

try {
  await client.connect();
  await client.db("admin").command({ ping: 1 });
  console.log("You're successfully connected to MongoDB!");
} catch (error) {
  console.error(error);
}

let db = client.db(DATABASE_NAME);

export default db;
