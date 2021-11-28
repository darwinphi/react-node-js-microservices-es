const express = require("express");
const app = express();
const axios = require("axios");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/events", async (req, res) => {
  const { type, data } = req.body;

  if (type === "CommentCreated") {
    const status = data.content.includes("fuck") ? "rejected" : "approved";

    await axios.post("http://localhost:4005/events", {
      type: "CommentModerated",
      data: {
        id: data.id,
        postId: data.postId,
        status,
        content: data.content,
      },
    });

    console.log(status);
  }



  res.send({});
});

app.listen(4003, () => {
  console.log("Listening on port 4003");
});
