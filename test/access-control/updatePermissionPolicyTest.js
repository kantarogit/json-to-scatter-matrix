import assert from "assert";
import { randomWait } from "../util.js";

describe("Update Permission Policy tests", function () {
  for (let i = 0; i < 20; i++) {
    let testname = `test id ${i}`;
    it(testname, async function () {
      this.timeout(30000);
      //wait random time between 1 and 20 seconds
      randomWait();
      assert.equal(true, (Math.floor(Math.random() * 20) + 1) / 2 < 10);
    });
  }
});
