const fs = require('fs');

// Options
const enhanceName = "Enhance";
const outFile = "./src/components/tags.enhanced.tsx";


// String prototype
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}


// Generating
console.log("Generating...");
const file = fs.readFileSync("./assets/html5.list.txt").toString();
const lines = file.split("\r\n");

const generatedLines = lines.map(line => {
    line = line.substring(1, line.length - 1);
    return `export const ${line.capitalize()} = ${enhanceName}('${line}');`;
});

const generatedFile = generatedLines.join('\r\n');

fs.writeFileSync(outFile, generatedFile);