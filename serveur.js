const express = require("express")
const cors = require("cors")
require("dotenv").config()
const { Configuration, OpenAIApi } = require("openai");
const connectdb=require('./configuration/config')
const userRooter=require('./router/user_router');
const offerRooter = require("./router/offer_router");
const app = express()
const port = 3333
const configuration = new Configuration({
    apiKey: process.env.Api_key
});

const openai = new OpenAIApi(configuration);

app.use(express.json())
app.use(cors())
connectdb()
app.use('/user',userRooter)
app.use('/offer',offerRooter)

app.post("/question",async (req, res) => {
    
    let { value } = req.body;

    //👇🏻 the ChatGPT prompt
    const prompt = `i have an interview for \n ${value} and i need your help give me a random question that can be asked in the interview, Please, I need only the question, I don't need any explanations.`;
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
    });
    res.json({
        message: "Successful",
        response: completion.data.choices[0].message.content,
    });
});
app.post("/answer",async (req, res) => {
    //👇🏻 Destructure the JSON object
    let { value1 } = req.body;
    let {output}=req.body;
    //👇🏻 the ChatGPT prompt
    const prompt1=`the question is ${output} and here is my answer for it: ${value1} \n check it please and tell me if it's good,meduim or bad answer and give me the correct answer if exist `
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt1 }],
    });
    res.json({
        message: "Successful",
        response: completion.data.choices[0].message.content,
    });
});
app.listen(port,console.log(`server is connected at http://localhost:${port}`) )