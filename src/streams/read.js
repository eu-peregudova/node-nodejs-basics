import fs from "fs";

const read = async () => {
  const readStream  = fs.createReadStream('./files/fileToRead.txt', {encoding: "utf8"});

  readStream.on('data', (v) => {
    process.stdout.write(v)
  })
};

await read();
