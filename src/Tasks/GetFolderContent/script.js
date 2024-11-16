const tl = require("azure-pipelines-task-lib/task");
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

try {
  const parentFolder = tl.getInput("ParentFolder", true);

  const files = fs.readdirSync(path.join(parentFolder));

  console.log(chalk.blue("Content of " + parentFolder + ":"));
  for (const file of files) {
    console.log(chalk.green("- " + file));
  }
} catch (error) {
  tl.setResult(tl.TaskResult.Failed, error);
}
