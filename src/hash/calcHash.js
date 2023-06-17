import fs from "fs";
const { createHash } = await import('node:crypto');

const calculateHash = async () => {
  let fileData;
  const hash = createHash('sha256')

  try {
    fileData = await fs.promises.readFile('./files/fileToCalculateHashFor.txt')
  } catch (error) {
    throw new Error(error)
  }

  hash.update(fileData)

  console.log(`${hash.digest('hex')}`)
};

await calculateHash();
