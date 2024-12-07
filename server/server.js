import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import cookieParser from 'cookie-parser';

const app = express();
const port = process.env.PORT || 4000

app.use(express.json());
app.use(cookieParser());

app.use(cors({credentials:true}))

app.get('/',(req,res)=>res.send('API WORKING '))
app.listen(port,()=>console.log(`server started on PORT:${port}`));