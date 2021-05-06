var express = require("express");
var bodyParser = require('body-parser');
var fs = require('fs')
var app = express();


//set engine
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Routing  
var public = __dirname + "/public/";

app.use("/", express.static(public));

app.get('/gilired-task',(request, response) => {
    var urutan;
    fs.readFile('./urutan.txt', function(err, contents) {
        // console.log(contents.toString());
        if (contents.toString() === "Reyhan") {
            urutan = {
            patamo : "Reyhan",
            kaduo : "Rendy",
            katigo : "Dea",
            kaampek : "Ajeng",
            kalimo : "Nasywa",
            kaanam : "Ari",
            katujuah : "Thariq",
            }
            response.render('main', {patamo:urutan.patamo, kaduo:urutan.kaduo, katigo:urutan.katigo, kaampek:urutan.kaampek, kalimo:urutan.kalimo, kaanam:urutan.kaanam, katujuah:urutan.katujuah});
        }
        else if (contents.toString() === "Rendy") {
            urutan = {
            patamo : "Rendy",
            kaduo : "Dea",
            katigo : "Ajeng",
            kaampek : "Nasywa",
            kalimo : "Ari",
            kaanam : "Thariq",
            katujuah : "Reyhan",
            }
            response.render('main', {patamo:urutan.patamo, kaduo:urutan.kaduo, katigo:urutan.katigo, kaampek:urutan.kaampek, kalimo:urutan.kalimo, kaanam:urutan.kaanam, katujuah:urutan.katujuah});
        }
        else if (contents.toString() === "Dea") {
            urutan = {
            patamo : "Dea",
            kaduo : "Ajeng",
            katigo : "Nasywa",
            kaampek : "Ari",
            kalimo : "Thariq",
            kaanam : "Reyhan",
            katujuah : "Rendy",
            }
            response.render('main', {patamo:urutan.patamo, kaduo:urutan.kaduo, katigo:urutan.katigo, kaampek:urutan.kaampek, kalimo:urutan.kalimo, kaanam:urutan.kaanam, katujuah:urutan.katujuah});
        }
        else if (contents.toString() === "Ajeng") {
            urutan = {
                patamo : "Ajeng",
                kaduo : "Nasywa",
                katigo : "Ari",
                kaampek : "Thariq",
                kalimo : "Reyhan",
                kaanam : "Rendy",
                katujuah : "Dea",
            }
            response.render('main', {patamo:urutan.patamo, kaduo:urutan.kaduo, katigo:urutan.katigo, kaampek:urutan.kaampek, kalimo:urutan.kalimo, kaanam:urutan.kaanam, katujuah:urutan.katujuah});
        }
        else if (contents.toString() === "Nasywa") {
            urutan = {
                patamo : "Nasywa",
                kaduo : "Ari",
                katigo : "Thariq",
                kaampek : "Reyhan",
                kalimo : "Rendy",
                kaanam : "Dea",
                katujuah : "Ajeng",
            }
            response.render('main', {patamo:urutan.patamo, kaduo:urutan.kaduo, katigo:urutan.katigo, kaampek:urutan.kaampek, kalimo:urutan.kalimo, kaanam:urutan.kaanam, katujuah:urutan.katujuah});
        }
        else if (contents.toString() === "Ari") {
            urutan = {
                patamo : "Ari",
                kaduo : "Thariq",
                katigo : "Reyhan",
                kaampek : "Rendy",
                kalimo : "Dea",
                kaanam : "Ajeng",
                katujuah : "Nasywa",
            }
            response.render('main', {patamo:urutan.patamo, kaduo:urutan.kaduo, katigo:urutan.katigo, kaampek:urutan.kaampek, kalimo:urutan.kalimo, kaanam:urutan.kaanam, katujuah:urutan.katujuah});
        }
        else if (contents.toString() === "Thariq") {
            urutan = {
                patamo : "Thariq",
                kaduo : "Reyhan",
                katigo : "Rendy",
                kaampek : "Dea",
                kalimo : "Ajeng",
                kaanam : "Nasywa",
                katujuah : "Ari",
            }
            response.render('main', {patamo:urutan.patamo, kaduo:urutan.kaduo, katigo:urutan.katigo, kaampek:urutan.kaampek, kalimo:urutan.kalimo, kaanam:urutan.kaanam, katujuah:urutan.katujuah});
        }
        else {
            urutan = {
                patamo : "Err",
                kaduo : "Err",
                katigo : "Err",
                kaampek : "Err",
                kalimo : "Err",
                kaanam : "Err",
                katujuah : "Err",
            }
            response.render('main', {patamo:urutan.patamo, kaduo:urutan.kaduo, katigo:urutan.katigo, kaampek:urutan.kaampek, kalimo:urutan.kalimo, kaanam:urutan.kaanam, katujuah:urutan.katujuah});
        }
    });   
});

app.post('/gilired-task/api/kelar',(request, response) => {
    var giliran = request.body.giliran;
    fs.writeFile('urutan.txt', giliran, function (err) {
        if (err) throw err;
        console.log('Diganti dengan ' + giliran);
    });
});

app.get('*', function(req, res) {
    res.redirect('/gilired-task');
});

app.all('/public/*', (req,res, next) => {
    res.redirect('/gilired-task');
});




// server
app.listen(8080, () => {
    console.log('Server is running at port 8080');
  });