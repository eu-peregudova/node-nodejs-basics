import fs from "fs";

const read = async () => {
  const path = './files/fileToRead.txt'
  let result

  try {
    result = await fs.promises.readFile(path, {encoding: "utf8"})
  } catch (e) {
    throw new Error('FS operation failed')
  }

  console.log(result)
};

await read();
