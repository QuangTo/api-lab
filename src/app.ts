import express from 'express'
import  userRouter from './services/routers/user.router'


const app = express();
const port =3000;

app.use("/users", userRouter);

app.listen(port, ()=>{
console.log('start listen');

})

export default app