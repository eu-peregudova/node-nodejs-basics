import { createGzip } from "zlib"
import fs from "fs"

const compress = async () => {
  const path = './files/fileToCompress.txt'
  const gzip = createGzip()
  const readStream = fs.createReadStream(path)
  const writeStream = fs.createWriteStream('./files/archive.gz')

  readStream.pipe(gzip).pipe(writeStream)
};

await compress();
