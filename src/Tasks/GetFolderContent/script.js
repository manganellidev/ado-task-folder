const tl = require("azure-pipelines-task-lib/task");
const fs = require("fs");
const path = require("path");
const dayjs = require("dayjs");
const seedex = require("@mangadev-npm/seedex");

try {
  const parentFolder = tl.getInput("ParentFolder", true);

  const files = fs.readdirSync(path.join(parentFolder));
  const currentDate = dayjs().format("YYYY-MM-DD HH:mm:ss");

  console.log(seedex.generateRandomFirstName());
  console.log(seedex.generateRandomLastName());
  console.log(seedex.generateRandomEmailDomain());

  console.log("HERE I AM!");

  console.log(`Listing files in "${parentFolder}" as of ${currentDate}:`);
  for (const file of files) {
    console.log(`- ${file}`);
  }
} catch (error) {
  tl.setResult(tl.TaskResult.Failed, error);
}
