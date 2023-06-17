import fs from "fs";

const list = async () => {
  const path = './files'
  const result = await fs.promises.readdir(path)

  console.log(result.join('; '))
};

await list();
