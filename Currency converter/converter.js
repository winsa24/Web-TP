function convert(){
    const money = document.getElementById("money");
    const money_value = money.value;
    const rate = document.getElementById("rate");
    const rate_value = rate.value;
    const result = document.getElementById("result");
    result.value = money_value * rate_value;
}