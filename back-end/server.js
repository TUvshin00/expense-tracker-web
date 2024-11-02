import express, { request, response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

const port = 8000;
const server = express();
server.use(bodyParser.json());
server.use(cors());

const sql = neon(`${process.env.BACKEND_URL}`);

server.post("/category", async (request, response) => {
  const { name, category_icon, icon_color } = request.body;
  try {
    const category =
      await sql`INSERT INTO category (name, category_icon, icon_color) 
      VALUES (${name},  ${category_icon}, ${icon_color})
      RETURNING *
 `;

    response
      .status(201)
      .json({ message: "category orlooo ", category: category[0] });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "category nemegdej chadsangui " });
  }
});
server.get("/category", async (request, response) => {
  try {
    const category = await sql`SELECT * FROM category ORDER BY createdat DESC`;

    response.status(201).json(category);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "category nemegdej chadsangui " });
  }
});
server.post("/record", async (request, response) => {
  const { name, amount, transaction_type, creadet_at, category_id } =
    request.body;
  try {
    const record =
      await sql`INSERT INTO record (name,amount,transaction_type ,creadet_at,category_id) VALUES (${name}, ${amount}, ${transaction_type}, ${creadet_at}, ${category_id}) RETURONG *`;
    response.status(201).json({ message: "record message orj chadlaa" });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "record message orj chadsngu" });
  }
});
server.get("/record", async (request, response) => {
  try {
    const record = await sql`SELECT * FROM record ORDER BY created_at DESC`;

    response.status(201).json(record);
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "record nemegdej chadsangui " });
  }
});

server.listen(port, () => {
  console.log(`Server ajillaj bn http://localhost:${port}`);
});
