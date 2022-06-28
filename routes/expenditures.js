import express from "express";
const router = express.Router()
let ts = Date.now();
let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let secs = date_ob.getSeconds();


const expenses= [
    {
        amount: 200,
        expenditure: true
    },
]

// prints date & time in YYYY-MM-DD format
console.log(expenses);
router.get("/", (req, res) => {
    res.send(expenses)

});
router.post('/', (req, res) => {
    const expensive = req.body;
    expenses.push({ ...expensive, date:date+"-"+month+"-"+year+"-"+hours+"-"+minutes+"-"+secs})
})
export default router;