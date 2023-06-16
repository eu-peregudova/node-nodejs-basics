const parseArgs = () => {
    const cliArgs = process.argv.slice(2)
    let answer = ''

    for (let i = 0; i < cliArgs.length; i++) {
        if (cliArgs[i].startsWith('--')) {
            answer += `${cliArgs[i].slice(2)} is ${cliArgs[i + 1]}, `
        }
    }

    console.log(answer.slice(0, answer.length - 2))
};

parseArgs();
