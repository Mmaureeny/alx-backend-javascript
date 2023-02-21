const fs = require('fs');

//Counts the students in a CSV data file.

 
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }
    
    const lines = data.trim().split('\n');
    const fields = lines[0].split(',');
    const students = lines.slice(1)
        .filter(line => line.trim() !== '') // Remove empty lines
        .map(line => line.split(','));
      
      const counts = {};
      students.forEach(student => {
        fields.forEach((field, i) => {
          if (!counts[field]) counts[field] = {};
          const value = student[i].trim();
          if (value !== '') {
            if (!counts[field][value]) counts[field][value] = [];
            counts[field][value].push(student[0]); // Add firstname to list
          }
        });
      });

      const totalCount = students.length;
      console.log(`Number of students: ${totalCount}`);
      fields.forEach(field => {
        if (counts[field]) {
          const values = Object.keys(counts[field]);
          values.forEach(value => {
            const count = counts[field][value].length;
            const list = counts[field][value].join(', ');
            console.log(`Number of students in ${field}: ${count}. List: ${list}`);
          });
        } else {
          console.log(`Number of students in ${field}: 0. List: none`);
        }
      });
      
      resolve(totalCount);
    });
  });
    
module.exports = countStudents;
