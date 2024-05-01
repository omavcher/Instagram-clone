// *******************************************************************************************Log in***************************************************************************
document.addEventListener('DOMContentLoaded', function() {
    // Load userdata from localStorage if available, otherwise use default data
    let userdata = JSON.parse(localStorage.getItem('userdata')) || [
        {
            user: "omawchar07",
            pass: "openinsta123",
            number_of_login: 0 ,
            mobileno:"9890712303",
            fullname:"Om Avcher"
        }
    ];
    let usernameInput = document.getElementById('username');
    let passwordInput = document.getElementById('password');
    let submitButton = document.getElementById('submit');
    let errorDiv = document.getElementById('error');
    function saveUserData() {
        localStorage.setItem('userdata', JSON.stringify(userdata));
    }
    usernameInput.addEventListener('input', function() {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        const minUsernameLength = 4; 
        if (username.length >= minUsernameLength && password.length >= 8) {
            submitButton.style.backgroundColor = '#0095f6'; 
        } else {
            submitButton.style.backgroundColor = ''; 
        }
    });
    passwordInput.addEventListener('input', function() {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        const minUsernameLength = 4; 
        const minPasswordLength = 8; 
        if (username.length >= minUsernameLength && password.length >= minPasswordLength) {
            submitButton.style.backgroundColor = '#0095f6'; 
        } else {
            submitButton.style.backgroundColor = '';
        }
    });
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        let username = usernameInput.value.trim();
        let password = passwordInput.value.trim();
        for (let i = 0; i < userdata.length; i++) {
            if (userdata[i].user === username && userdata[i].pass === password) {
                userdata[i].number_of_login += 1;
                saveUserData(); 
                console.log(userdata[i].username);  
                               window.location.href = 'feed.html';
                return true;
            }
        }
        errorDiv.style.display = 'block'; // Show error message if user not found
        return false;
    });
});
// *******************************************************************************************Signup***************************************************************************
document.addEventListener('DOMContentLoaded', function() {
    let signinbtn = document.getElementById('submitsigin');
    signinbtn.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        let signupmobile = document.getElementById('signupmobile').value.trim();
        let signupFullname = document.getElementById('signupFullname').value.trim();
        let signupusername = document.getElementById('signupusername').value.trim();
        let signuppass = document.getElementById('signuppass').value.trim();
        const username = signupusername;
        const password = signuppass;
        const mobilen = signupmobile;
        const fullname = signupFullname;
if(username.length > 0 && password.length > 0 && mobilen.length > 0 && fullname > 0){
    let userdata = JSON.parse(localStorage.getItem('userdata')) || [];
        userdata.push({
            user: username,
            pass: password,
            number_of_login: 0,
            mobileno: mobilen,
            fullname: fullname
        });
        localStorage.setItem('userdata', JSON.stringify(userdata));
       }  
    });
});
document.getElementById('submitsigin').addEventListener("click", function(){
    let signupmobile = document.getElementById('signupmobile').value.trim();
    let signupFullname = document.getElementById('signupFullname').value.trim();
    let signupusername = document.getElementById('signupusername').value.trim();
    let signuppass = document.getElementById('signuppass').value.trim();
    const username = signupusername;
    const password = signuppass;
    const mobilen = signupmobile;
    const fullname = signupFullname;
    if (username.length > 1 && password.length > 1 && mobilen.length > 1 && fullname.length > 1) {
        window.location.href = 'login.html';
    }
})
// *******************************************************************************************Feed***************************************************************************
document.addEventListener('DOMContentLoaded', function() {
    let profiledata = JSON.parse(localStorage.getItem('profiledata')) || [
        {
            user: "omawchar07",
            fullname:"Om Avcher",
            bio:"",
            dp:"/Assets/dp's/elvish yadav.jpg",
            story:""
        }
    ];
    document.addEventListener('DOMContentLoaded', function() {
        // Your other code here...
    });
        var clutter = "";
    profiledata.forEach(function(elem,idx){
        console.log(elem.dp);
        // clutter += `<div class="story">
        //     <img id="${idx}" src="${elem.dp}" alt="img-${idx}">
        // </div>`;
    });
    // Now you can do something with the generated HTML in the "clutter" variable, like appending it to a container in your document.
    // For example:
    // document.getElementById('container').innerHTML = clutter;
});
