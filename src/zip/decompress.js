import fs from "fs";
import zlib from "zlib";

const decompress = async () => {
  const path = './files/archive.gz'
  const readStream = fs.createReadStream(path)
  const writeStream = fs.createWriteStream('./files/fileToCompress.txt')
  const unzip = zlib.createUnzip()

  readStream.pipe(unzip).pipe(writeStream)
};

await decompress();
