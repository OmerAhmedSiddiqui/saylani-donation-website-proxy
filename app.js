var donorName = document.querySelector("#donor-name");
var dnNumber = document.querySelector("#dn-number");
var amount = document.querySelector("#donation-amount");
var allDonations = [];
var totalAmount = 0;
var donorNumber =Math.ceil(Math.random()*1000)
function Donations(name, donationNumber, amount) {
    this.donorName = name;
    this.dnNumber = donationNumber;
    this.amount = amount;
}


function donate() {
    totalAmount = totalAmount + Number(amount.value);
    var newDonation = new Donations(donorName.value, donorNumber, Number(amount.value));

    allDonations.push(newDonation);

    donorName.value = "";
    dnNumber.value = "";
    amount.value = "";
    console.log(allDonations, totalAmount);

    saveInLocalStorage();
}

function saveInLocalStorage(){
    localStorage.setItem("totalAmount",totalAmount)
    localStorage.setItem("Donations",JSON.stringify(allDonations ))

}
function rnNumber(){
    dnNumber.value = donorNumber;

}