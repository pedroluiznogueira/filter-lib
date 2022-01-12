module.exports = (repoUrl) => {
    const newRepo = {
        name: '',
        owner: '',
        url: ''
    }

    let counter = 0;
    for (let i = 0; i < repoUrl.length; i++) {

        if (repoUrl[i] == '/') counter++;
        if (counter == 3) {

            let subRepoUrl = repoUrl.slice(i + 1, repoUrl.length);
            for (let j = 0; j < subRepoUrl.length; j++) {
                    
                if (subRepoUrl[j] == '/') {
                    newRepo.name = subRepoUrl.slice(j + 1, subRepoUrl.length);
                    newRepo.owner = subRepoUrl.slice(0, j);
                    newRepo.url = repoUrl;

                    return newRepo;
                }
            }
            counter = 0;
        }
    }
}