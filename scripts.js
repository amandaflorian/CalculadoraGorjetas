function calculateTip(event) {
    event.preventDefaut();
    let bill = documet.getElementById('bill').value;
    let serviceQual = documet.getElementById('serviceQual').value;
    let numOfPeople = documet.getElementById('people').value;

    if (bill == '' | serviceQual == 0) {
        alert("Por favor, preencha os valores")
        return;
    }

    if (numOfPeople == '' | numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById('each').style.display = "none"
    }
    else {
        document.getElementById('each').style.display = "block"
    }
    let lotal = (bill * serviceQual) / numOfPeople;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block";

}


document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip);