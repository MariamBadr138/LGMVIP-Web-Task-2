// JavaScript source code
const getUser = document.getElementById('getUsers');
const userG = document.getElementById('user');
const info = document.getElementById('id');

getUser.addEventListener('click', () => {
    getUsers();
});

async function getUsers() {
    try {
        info.style.display = 'block';
        const response = await fetch('https://reqres.in/api/users?page=1');
        const data = await response.json();
        displayUsers(data.data);
        info.style.display = 'none';
    } catch (error) {
        console.error('Error fetching user data:', error);
        info.style.display = 'none';
    }
}

function displayUsers(users) {
    userG.innerHTML = '';
    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';
        userCard.innerHTML = `
      <img src="${user.avatar}" alt="${user.first_name}" />
      <h3>${user.first_name} ${user.last_name}</h3>
      <p>Email: ${user.email}</p>
    `;
        userG.appendChild(userCard);
    });
}