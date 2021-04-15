const usersList = document.querySelectorAll("#user-list > li")

const fetchGithubByValue = (value) => {
    fetch(`https://api.github.com/search/users?q=${value}`, {
        headers: {
            "Accept": "application/vnd.github.v3+json" 
        }
    })
    .then(res => res.json())
    .then(userList.innerHTML = '')
    .then(json => json.items.forEach((user) => {
        // appendLi(createLi(user))
        createLi(user)
    }))
}
const userList = document.getElementById('user-list')
const createLi = (user) => {
    const li = document.createElement('li')
    li.innerHTML = `<img alt=${user.login}_avatar src='${user.avatar_url}' width="100"><a href='${user.html_url}'>${user.login}</a>`
    // return userLi
    userList.append(li)
}

// const appendLi = (li) => {
//     userList.append(li)
// }


const submitBtn = document.getElementById('submit-button')
const searchBox = document.getElementById('search')
submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    fetchGithubByValue(searchBox.value)
})

// const fetchRepo = (username) => {
//     fetch(`https://api.github.com/users/${username}/repos`, {
//         headers: {
//             "Accept": "application/vnd.github.v3+json"
//         }
//     })
//     .then(res => res.json())
//     .then(json => json.forEach((repos) => {
//         console.log(repos)
//     }))
// }