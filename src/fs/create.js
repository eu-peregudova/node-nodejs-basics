// create.js - implement function that creates new file fresh.txt with content
// "I am fresh and young" inside of the "files" folder (if file already exists
// "Error" with message "FS operation failed" must be thrown)

import * as fs from "fs";

const create = async () => {
  const filePath = './files/fresh.txt';
  const fileContent = 'I am fresh and young';
  let fileExists = false

  try {
    await fs.promises.stat(filePath);
    fileExists = true
  } catch (error) {
    await fs.promises.writeFile(filePath, fileContent);
  }

  if (fileExists) {
    throw new Error('FS operation failed');
  }

};

await create();
