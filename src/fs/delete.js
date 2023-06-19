import fs from "fs";

const remove = async () => {
  const path = './files/fileToRemove.txt'

  try {
    await fs.promises.rm(path)
  } catch (e) {
    throw new Error('FS operation failed')
  }
};

await remove();
