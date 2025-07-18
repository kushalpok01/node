const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

const PORT = 3000;

// routes
const taskRoutes= require('./modules/task/task.route');
app.use('/task',taskRoutes);
const userRoutes= require('./modules/user/user.route');
app.use('/user', userRoutes);

  
// app.get('/',(req,res)=>{
//     return res.send("<h1> App is running </h1>"
//     )
// });

app.get("/", (req, res) => {
  res.send(`
    <html>
      <body>
        <h1>App is running</h1>
        <button onclick="window.location.href='/task'">Go to Task</button>
        <button onclick="window.location.href='/user'">Go to User</button>
      </body>
    </html>
  `);
});





app.listen(PORT, ()=>{
    console.log('App is runnning in port ' + PORT);
});

app.use((req, res) => {
  res.status(404).send('Route not found');
});