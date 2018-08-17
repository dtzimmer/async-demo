console.log('Before');
getUser(1, getRepositories);
console.log('After');

function getRepositories(user) {
  getRepositories(user.githubUsername, getCommits);
}

function getCommits(repos) {
  getCommits(repo, displayCommits);
}

function displayCommits(commits) {
  console.log(commits);
}

function getUser(id, callback) {
  setTimeout(() => {
    console.log('Getting a user from the database...')
    callback({ id: id, githubusername: 'mosh' })
  }, 2000)
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log('Calling Github API...')
    callback(['repo 1', 'repo 2', 'repo 3'])
  }, 2000)
}

