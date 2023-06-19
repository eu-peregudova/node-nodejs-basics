import * as fs from "fs";

const create = async () => {
  const filePath = './files/fresh.txt';
  const fileContent = 'I am fresh and young';
  let fileExists = false

  try {
    await fs.promises.access(filePath);
    fileExists = true
  } catch (error) {
    await fs.promises.writeFile(filePath, fileContent);
  }

  if (fileExists) {
    throw new Error('FS operation failed');
  }

};

await create();
