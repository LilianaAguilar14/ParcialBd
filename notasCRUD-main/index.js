const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const periodoRoute = require("./routes/periodo");
const docenteRoute = require("./routes/docente");
const alumnosRoute = require("./routes/alumno");
const materiaRoute = require("./routes/materia");
const cicloRoute = require("./routes/ciclo");
const LoginRoute = require("./routes/login");
const Login2Route = require("./routes/login2");
const app = express();

app.use(cors({
    origin: '*'
  }));
app.use(express.json());
//-----------------------settings

app.set("appName", "proyectoBD");

//--------------------------------
/* app.use("/api/login",require('./routes/login'))

app.use('/api/refreshToken',require('./routes/refreshToken'))

app.use('/api/logout', require('./routes/signOut')); */

/* app.use("/api/login", require("./routes/login"));
app.use("/api/signout", require("./routes/signOut"));
app.use("/api/refreshtoken", require("./routes/refreshToken"));
app.use("/api/sign-up", require("./routes/signUp"));
 */
//solo tienen get y get/id--------------
app.use(LoginRoute); //http://localhost:3000/api/login
app.use(Login2Route); //http://localhost:3000/api/login2
app.use(docenteRoute); //http://localhost:3000/api/docentes/
app.use(materiaRoute); //http://localhost:3000/api/materias/                    --datos materia incluido docente encargado

app.use(alumnosRoute); //http://localhost:3000/api/alumnos/                     --envia datos de los alumnos mas los datos de notas de cada periodo
////http://localhost:3000/api/alumnos/id_alumno/id_ciclo   --datos de alumno del ciclo actual que se encuentra cursando
///api/alumnos/:id_alumno               --datos solo del alumno
//---------------------------------------
app.use(cicloRoute);
/*endpoints ciclos
//   /api/ciclos/:id_alumno             ver ciclos por alumno  
    /api/ciclos/:id_alumno/:id_ciclo/  ciclo actual del alumno 
    /api/ciclos/:id_alumno              --POST  EJE{"id":1}  despues se pueden agregar los periodos opcionales
    /api/ciclos/:id_ciclo               --PUT    
    /api/ciclos/:id_ciclo               --DELETE

*/
app.use(periodoRoute);
/*
endpoints de notas
http://localhost:3000/api/periodos/            GET
http://localhost:3000/api/periodos/:id_nota    GET ID
http://localhost:3000/api/periodos/:id_nota/?login=docente    PUT    sino es agregado acceso no autorizado 
http://localhost:3000/api/periodos/:id_nota/?login=docente    DELETE
*/

app.listen(3000);
console.log(`server ${app.get("appName")} on port ${3000}`);
