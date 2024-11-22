let deposit = document.getElementById("btn-deposit")
let withdraw = document.getElementById("btn-withdraw")
let tdepo = 0;
let twith = 0;
let total = 0;

deposit.addEventListener("click" , function()
{
    let depo_value = document.getElementById("deposit-field").value
    let depo = document.getElementById("deposit-total")
    let total_bal = document.getElementById("balance-total")

    tdepo += Number(depo_value);
    total += Number(depo_value);

    depo.innerHTML = `${tdepo}`;
    total_bal.innerHTML = `${total}`;

    document.getElementById("deposit-field").value = "";
})

withdraw.addEventListener("click" , function()
{
    let with_value = document.getElementById("withdraw-field").value
    let draw = document.getElementById("withdraw-total")
    let total_bal = document.getElementById("balance-total")

    if(with_value > total) alert("Balance is low for your withdraw!!");
    else total -= Number(with_value), twith += Number(with_value)

    draw.innerHTML = `${twith}`;
    total_bal.innerHTML = `${total}`;

    document.getElementById("withdraw-field").value = "";
})