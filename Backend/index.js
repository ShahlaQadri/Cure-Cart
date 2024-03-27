const  express =require('express') 
const connectDb = require("./database");


const app = express();
connectDb();
app.use(express.json());
// using routes
app.use("/api/v1/users", require("./routes/User"));
app.get("/",(req,res)=>{
    res.send('hello mai salman hu')
})



app.listen(3000);