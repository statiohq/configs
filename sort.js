const filesToSort = ["imgproxy_mime_types.txt", "imgproxy_whitelist.txt"];

const fs = require("fs");

filesToSort.forEach((file) => {
    const lines = fs
        .readFileSync(file, "utf8")
        .split("\n")
        .sort()
        .filter((line) => line.length > 0);
    fs.writeFileSync(file, lines.join("\n"));
});
