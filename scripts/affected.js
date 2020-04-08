const fs = require("fs");
const execSync = require("child_process").execSync;

const action = process.argv[2];

console.log(action);

const options = ["lint", "test"];

if (!options.includes(action)) {
  console.error("Usage: 'yarn affected test' or 'yarn affected lint'");
  return;
}

console.log("Cataloging src dependencies in dep-graph.json");
execSync("yarn dep:write").toString();

console.log("Cataloging __tests__ dependencies in dep-graph-test.json");
execSync("yarn dep:write-test").toString();

console.log("Collecting changed src files.");
const changedSrcFiles = execSync("git diff --name-only") // <starting SHA> HEAD
  .toString()
  .split("\n")
  .filter((line) => line.slice(0, 4) === "src/");
console.log(changedSrcFiles);

const srcDepGraph = JSON.parse(fs.readFileSync("./dep-graph.json"));
const affectedModules = srcDepGraph.modules.filter((m) => {
  const moduleDeps = changedSrcFiles.dependencies.map((d) => d.resolve);
});
