const parseEnv = () => {
    const environment = process.env
    let answer = ''

    for (let i of Object.keys(environment)) {
        if (i.startsWith('RSS_')) {
            answer += `${i}=${environment[i]}; `
        }
    }

    console.log(answer)
};

parseEnv();
