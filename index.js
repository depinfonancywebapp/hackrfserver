const express = require('express')
const cors = require('cors')
const {execSync} = require("child_process");
const app = express();

app.use(express.json())
app.use(cors());
  
app.get('/guirlande/enregistrer', (req,res) => {
    const output = execSync("python3 scripts_guirlande/go.py", { encoding: "utf-8" });
    console.log(output);
    res.status(200).json({"message": "Signal enregistré"});
})

app.get('/guirlande/repeat', (req,res) => {
    const output = execSync("python3 scripts_guirlande/repeater.py", { encoding: "utf-8" });
    res.status(200).json({"message": "Signal repété"});
})

app.post('/GPS/calculate', (req,res) => {
    console.log(req.body);
    const output = execSync("./scripts_gps/calcul.sh "+req.body.lat+","+req.body.long, { encoding: "utf-8" });
    res.status(200).json({"message": "Position calculée"});
})

app.get('/GPS/emit', (req,res) => {
    execSync("./scripts_gps/emission.sh", { encoding: "utf-8" });
    res.status(200).json({"message": "Fin de l'émission"});
})