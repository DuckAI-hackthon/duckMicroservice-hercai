import express from "express";
import { Hercai } from "hercai";

const app = express.Router();
const herc = new Hercai();

app.get("/", async (req, res) => {
  const query: any = req.query.q;
  herc.question({ model: "v2", content: query }).then((response: any) => {
    console.log(response.reply);
    res.json({ response: response.reply });
  });
});

app.get("/translate", async (req, res) => {
  const query = req.query.q;
  const from_lang = req.query.from;
  const to_lang = req.query.to;
  herc.question({
      model: "v2",
      content: `Me retorne apenas o resultado que estou pedindo. Preciso que voce traduza esse texto: ${query} para ${to_lang}. Me retorne apenas o texto traduzido.`,
    })
    .then((response: any) => {
      console.log(response.reply);
      res.json({ response: response.reply });
    });
});

app.get("/keys", async (req, res) => {
  const query = req.query.q;
  const keys = req.query.key;
  herc.question({
      model: "v2",
      content: `Me retorne ${keys} palavras chaves desse texto: ${query}`,
    })
    .then((response: any) => {
      console.log(response.reply);
      res.json({ response: response.reply });
    });
});

app.get("/sumup", async (req, res) => {
  const query = req.query.q;
  herc.question({
      model: "v2",
      content: `Resume esse texto: ${query}`,
    })
    .then((response: any) => {
      console.log(response.reply);
      res.json({ response: response.reply });
    });
});

export = app;
