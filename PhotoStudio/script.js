const button = document.getElementById("signin2");
button.addEventListener("click", handle_input);
function handle_input()
{
    const email = document.getElementById("email").value;
    const create_pwd = document.getElementById("create_pwd").value;
    const confirm_pwd = document.getElementById("confirm_pwd").value;
    alert(email + " " + create_pwd + " " + confirm_pwd);
}