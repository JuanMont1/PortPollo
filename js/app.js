window.addEventListener('load', () => {
    let button = document.getElementById('form');
    let usuario = document.getElementById('usuario');
    let password = document.getElementById('password');

    console.log(usuario);

    function data() {
        let datos = new FormData();
        datos.append("usuario", usuario.value);
        datos.append("password", password.value);

        fetch('validalogin.php', {
            method: 'POST',
            body: datos
        })
        .then(response => response.json())
        .then(({ success }) => {
            if (success === 1) {
                location.href = 'home.php';
            } else {
                showAlert();
            }
        });
    }

    function showAlert() {
        let alertDiv = document.createElement('div');
        alertDiv.className = 'alert alert-danger alert-dismissible fade show';
        alertDiv.innerHTML = 'Your error message here'; 

        
        document.getElementById('alert-container').appendChild(alertDiv);
    }

    button.addEventListener('submit', (e) => {
        e.preventDefault();
        data();
    });
});
