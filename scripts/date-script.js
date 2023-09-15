import moment from 'moment';
import { execSync } from 'child_process';
import fs from 'fs';

const dateTime = moment().format('MM-DD-YYYY-HH-mm-ss');
//location to test directory

try {
    execSync(`mocha --recursive test/**/*.* --reporter json > ./reports/test-report-${dateTime}.json`);

} catch (error) {
    //wait for the report file to be created
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 5000);
    });

    //look for the report file to see if the error is valid or not with nodejs fs module
    const reportFile = `test-report-${dateTime}.json`;
    if (fs.existsSync(reportFile)) {
        console.log('Test report file created');
    } else {
        console.log('Test report file not created');
        process.exit(1);
    }
}
