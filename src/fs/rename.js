import fs from "fs";

async function fileCheck(path) {
  try {
    await fs.promises.access(path)
    return true
  } catch(e) {
    return false
  }
}

const rename = async () => {
  const oldPath = './files/wrongFilename.txt'
  const newPath = './files/wrongFilename.txt'

  if (!(await fileCheck(oldPath)) || await fileCheck(newPath)) {
    throw new Error('FS operation failed')
  }

  await fs.promises.rename(oldPath, newPath)
};

await rename();
