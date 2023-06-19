import { Transform } from "stream";

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      const text = chunk.toString().split('').reverse().join('')
      this.push(text)
      callback()
    }
  })

  process.stdin.pipe(transformStream).pipe(process.stdout)
};

await transform();
