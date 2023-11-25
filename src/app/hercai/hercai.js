const express = require("express");

const app = express.Router();

const { Hercai } = require("hercai");

const herc = new Hercai();

app.get("/", async (req, res) => {
  const query = req.query.q;
  herc.question({ model: "v2", content: query }).then((response) => {
    console.log(response.reply);
    res.json({ response });
  });
});

app.get("/traduzir", async (req, res) => {
  const query = req.query.q;
  const from_lang = req.query.from;
  const to_lang = req.query.to;
  herc
    .question({
      model: "v2",
      content: `Me retorne apenas o resultado que estou pedindo. Preciso que voce traduza esse texto: ${query} para ${to_lang}. Me retorne apenas o texto traduzido.`,
    })
    .then((response) => {
      console.log(response.reply);
      res.json({ response });
    });
});

app.get("/key-words", async (req, res) => {
  const query = req.query.q;
  const keys = req.query.key;
  herc
    .question({
      model: "v2",
      content: `Me retorne ${keys} palavras chaves desse texto: ${query}`,
    })
    .then((response) => {
      console.log(response.reply);
      res.json({ response });
    });
});

app.get("/resumo", async (req, res) => {
  const query = req.query.q;
  herc
    .question({
      model: "v2",
      content: `Resume esse texto: ${query}`,
    })
    .then((response) => {
      console.log(response.reply);
      res.json({ response });
    });
});

module.exports = app;
