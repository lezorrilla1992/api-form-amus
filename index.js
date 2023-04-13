import express from 'express'
import  indexRoutes  from "./src/routes/index.routes.js";
const port = 3000;

import formRoutes from "./src/routes/form.routes.js";

const app = express();



app.use(indexRoutes)
app.use(formRoutes)

app.listen(port,() =>{
    console.log(`Servidor corriendo en http://localhost:${port}`);
});