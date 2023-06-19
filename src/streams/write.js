import fs from "fs";

const write = async () => {
  const writeStream = fs.createWriteStream('./files/fileToWrite.txt')

  process.stdin.pipe(writeStream)
};

await write();
