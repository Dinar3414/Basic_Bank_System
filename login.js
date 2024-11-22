let submit = document.getElementById("btn-submit")

    submit.addEventListener("click" , function()
    {
        let email = document.getElementById("user-mail").value;
        let pass = document.getElementById("user-password").value;

        if(email === "dinariiuc@gmail.com" && pass === "C223414")
        {
            window.location.href = "bank.html";
        }
        else alert("Something is wrong!! Please try again");
    });