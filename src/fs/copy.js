import fs from "fs";

const copy = async () => {
  const dirPath = './files'
  const newDirPath = './files_copy'

  try {
    await fs.promises.access(dirPath)
    await fs.promises.mkdir(newDirPath)
  } catch (error) {
    throw new Error('FS operation failed')
  }

    await fs.promises.cp(dirPath, newDirPath, {recursive: true})
};

await copy();
