const newNameInput = document.getElementById('newUser');
const passInput = document.getElementById('newPassword');
const newEmail = document.getElementById('email');
//Edit profile options

function runEdit() {
    const userName = localStorage.getItem('currentUser');
    const userData = localStorage.getItem(userName); 
    if (userData) {
        const parsedUserData = JSON.parse(userData);
        newNameInput.value = parsedUserData.user
        passInput.value = parsedUserData.password
    }}

function editProfile() {
    const userName = localStorage.getItem('currentUser');
    const userData = localStorage.getItem(userName)
    const newName = newNameInput.value;  // Get updated values from inputs
    const newPass = passInput.value;
    if (userData) {
        const parsedUserData = JSON.parse(userData);
        if(newName === '' || newPass === '') {
            alert("Llene los campos");
        } else {
            if (newName !== userName) {
                parsedUserData.user = newName;
                parsedUserData.email = newEmail.value
                parsedUserData.password = newPass
                localStorage.setItem(newName, JSON.stringify(parsedUserData)); 
                localStorage.removeItem(userName);
                localStorage.setItem('currentUser', newName); 
            } else {
                parsedUserData.password = newPass;
                parsedUserData.email = newEmail.value
                localStorage.setItem(userName, JSON.stringify(parsedUserData)); 
            }
            alert("Perfil actualizado con éxito!");
        }
    }

    

}

let form = document.getElementById('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault()
    editProfile()
})