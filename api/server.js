const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const puppeteer = require('puppeteer');
const pdfTemplate = require('./documents');
const cors = require('cors')

const app = express();
const PORT = 5000;

app.use(cors())

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist')));  // Going one level up from 'api' to 'client'

// For any other route, send the index.html from the build folder
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

// Endpoint to generate the PDF
app.post('/create-pdf', async (req, res) => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const htmlContent = pdfTemplate(req.body);
        await page.setContent(htmlContent, { waitUntil: 'domcontentloaded' });
        const pdfPath = path.join(__dirname, 'Resume.pdf');
        await page.pdf({ path: pdfPath, format: 'A4' });
        await browser.close();

        console.log('PDF created successfully');
        res.status(200).send('PDF created successfully');
    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).send('Error generating PDF');
    }
});

// Endpoint to serve the generated PDF
app.get('/fetch-pdf', (req, res) => {
    const filePath = path.join(__dirname, 'Resume.pdf');

    if (!fs.existsSync(filePath)) {
        return res.status(404).send({ message: 'PDF not found' });
    }

    res.setHeader('Content-Disposition', 'attachment; filename=Resume.pdf');
    res.setHeader('Content-Type', 'application/pdf');
    fs.createReadStream(filePath).pipe(res);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
