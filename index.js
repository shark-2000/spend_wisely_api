import express from 'express';
import bodyParser from 'body-parser';
import expenditureRoutes from "./routes/expenditures.js"
const app = express();
const PORT = process.env.PORT || 9090;
app.use(bodyParser.json())
app.use('/expenditures',expenditureRoutes)
app.listen(PORT, () => { console.log(' Server running on port http://localhost:${PORT}') })
app.get('/',(req,res)=>{
    res.send("hello  from home")
})