import express from "express";

const app = express();

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      body: 'Now I have to say "Leroy can you please paint the fence?"',
      id: "5tz52q",
      score: 1,
      title: "I hate how you cant even say black paint anymore",
    },
    {
      body: "Pizza doesn't scream when you put it in the oven .\n\nI'm so sorry.",
      id: "5tz4dd",
      score: 0,
      title: "What's the difference between a Jew in Nazi Germany and pizza ?",
    },
    {
      body: '...and being there really helped me learn about American culture. So I visited a shop and as I was leaving, the Shopkeeper said "Have a nice day!" But I didn\'t so I sued him.',
      id: "5tz319",
      score: 0,
      title: "I recently went to America....",
    },
    {
      body: "A Sunday school teacher is concerned that his students might be a little confused about Jesus, so he asks his class, \u201cWhere is Jesus today?\u201d\nBrian raises his hand and says, \u201cHe\u2019s in Heaven.\u201d\n\nSusan answers, \u201cHe\u2019s in my heart.\u201d\n\nLittle Johnny waves his hand furiously and blurts out, \u201cHe\u2019s in our bathroom!\u201d\n\nThe teacher is surprised by this answer and asks Little Johnny how he knows this.\n\n\u201cWell,\u201d Little Johnny says, \u201cevery morning, my Dad gets up, bangs on the bathroom door and yells \u2018Jesus Christ, are you still in there?'\u201d",
      id: "5tz2wj",
      score: 1,
      title: "Brian raises his hand and says, \u201cHe\u2019s in Heaven.\u201d",
    },
    {
      body: "He got caught trying to sell the two books to a freshman.",
      id: "5tz1pc",
      score: 0,
      title:
        "You hear about the University book store worker who was charged for stealing $20,000 worth of books?",
    },
    {
      body: "Because the p is silent.",
      id: "5tz1o1",
      score: 0,
      title:
        "Why is it unknown on how pterodactyls urinate especially during flight?",
    },
    {
      body: "To avoid leaving tracks like a snail while walking.",
      id: "5tz0ef",
      score: 0,
      title: "Why women need legs?",
    },
    {
      body: 'Apparently "Whatever\'s low in cholesterol" was not the right answer.',
      id: "5tz04j",
      score: 1,
      title:
        "I walked into a PETA adoption center and the receptionist asked me what kind of dog I wanted",
    },
  ];
  res.send(jokes);
});
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
