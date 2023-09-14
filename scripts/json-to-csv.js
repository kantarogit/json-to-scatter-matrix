//function to return a csv file from a test report json file

import fs from 'fs';
import path from 'path';

const jsonToCsv = (jsonFile) => {
    const json = JSON.parse(fs.readFileSync(jsonFile, 'utf8'));
    const csvFile = jsonFile.replace('.json', '.csv');
    const csv = fs.createWriteStream(csvFile);
    const passes = json.passes;
    const failures = json.failures;
    const headers = Object.keys(passes[0]).filter(key => key !== 'err' && key !== 'speed');

    headers.push('status');


    csv.write(headers.join(','));
    csv.write('\n');
    tests.forEach(test => {
        const values = Object.values(test);
        csv.write(values.join(','));
        csv.write('\n');
    });
    csv.end();
    console.log(`CSV file created: ${csvFile}`);
};

const jsonFile = process.argv[2];
if (!jsonFile) {
    console.log('Please provide a json file');
    process.exit(1);
}
if (!fs.existsSync(jsonFile)) {
    console.log(`File not found: ${jsonFile}`);
    process.exit(1);
}
if (path.extname(jsonFile) !== '.json') {
    console.log('Please provide a json file');
    process.exit(1);
}
jsonToCsv(jsonFile);


