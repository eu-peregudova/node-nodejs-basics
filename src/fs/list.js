import fs from "fs";

const list = async () => {
  const path = './files'
  let result;

  try {
    result = await fs.promises.readdir(path)
  } catch (e) {
    throw new Error('FS operation failed')
  }

  console.log(result.join('; '))
};

await list();
