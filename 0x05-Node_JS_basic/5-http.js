const http = require('http');
const fs = require('fs');

// Function to read the students from the CSV file asynchronously
function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const students = data.split('\n').filter((line) => line.trim() !== '');
        const fieldCounts = {};
        const studentList = [];

        students.slice(1).forEach((student) => {
          const [firstname, lastname, age, field] = student.split(',');

          if (field) {
            if (!fieldCounts[field]) {
              fieldCounts[field] = [];
            }
            fieldCounts[field].push(firstname);
          }
        });

        let responseText = `Number of students: ${students.length - 1}\n`;
        for (const [field, names] of Object.entries(fieldCounts)) {
          responseText += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
        }

        resolve(responseText.trim());
      }
    });
  });
}

// Create an HTTP server
const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');
    // Read the database and respond with student data
    const filePath = process.argv[2];
    readDatabase(filePath)
      .then((studentData) => {
        res.end(studentData);
      })
      .catch((error) => {
        res.statusCode = 500;
        res.end(error.message);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Make the server listen on port 1245
app.listen(1245, () => {
  console.log('Server running on port 1245');
});

module.exports = app;
