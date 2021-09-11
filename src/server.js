const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const morgan = require('morgan');
const cors = require('cors');
const fileUpload = require('express-fileupload');

// Declare app
const app = express();
const port = 5000;

// middlewares
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());
app.use(fileUpload());

// default route for server
app.get('/', (req, res) => res.status(200).send({
    message: "Server is running..."
}));

const WriteTextToFileAsyncProduct = async (contentToWriteProduct) => {
    fs.writeFile('./src/data/product.json', contentToWriteProduct, (err) => {
        console.log(contentToWriteProduct);
        if (err) {
            console.log(err);
        } else {
            console.log('Done writing to product file...');
        }
    })
}

// post product
app.post('/products', async (req, res, next) => {
    // take the body from incoming request by using req.body and convert it into string
    const requestContent = JSON.stringify(req.body, null, 2);
    await WriteTextToFileAsyncProduct(requestContent)
});
/////

const WriteTextToFileAsync = async (contentToWrite) => {
    fs.writeFile('./src/data/data.json', contentToWrite, (err) => {
        console.log(contentToWrite);
        if (err) {
            console.log(err);
        } else {
            console.log('Done writing to recipe file...');
        }
    })
}

// Declare post / write route to accept incoming request with data
app.post('/write', async (req, res, next) => {
    // take the body from incoming request by using req.body and convert it into string
    const requestContent = JSON.stringify(req.body, null, 2);
    await WriteTextToFileAsync(requestContent)
});

// Upload Endpoint
app.post('/upload', (req, res, next) => {
    if (req.files === null) {
        return res.status(400).json({ msg: 'No file uploaded' });
    }

    const file = req.files.file;

    //file.mv(`${__dirname}/images/${file.name}`, err => {
    file.mv(`./public/images/${file.name}`, err => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        }

        res.json({ fileName: file.name, filePath: `/images/${file.name}` });
    });
});

// Video Upload Endpoint
app.post('/uploadvideo', (req, res, next) => {
    if (req.files === null) {
        return res.status(400).json({ msg: 'No video uploaded' });
    }

    const file = req.files.file;

    //file.mv(`${__dirname}/images/${file.name}`, err => {
    file.mv(`./public/videos/${file.name}`, err => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        }

        res.json({ fileName: file.name, filePath: `/videos/${file.name}` });
    });
});

// 404 route for server
app.use((req, res, next) => res.status(404).send({
    message: "Could not find specified route that was requested...!"
}));

// Run server
app.listen(port, () => {
    console.log(
        `
      !!! server is running
      !!! Listening for incoming requests on port ${port}
      !!! http://localhost:5000
      `
    )
});
