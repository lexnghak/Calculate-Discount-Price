const originalPrice = document.getElementById("originalPrice");
const percentage = document.getElementById("percentage");
const result = document.getElementById("result");
const reset = document.getElementById("Reset");
const displayCard = document.getElementById("displayCard");
const discountPrice = document.getElementById("discountPrice");

function calculateThat() {
  if (originalPrice.value == "" || percentage.value == "") {
    displayCard.style.display = "none";
    return;
  }
  let disPrice = (originalPrice.value * percentage.value) / 100;
  let payPrice = originalPrice.value - disPrice;

  discountPrice.textContent = `Price Discount: ${disPrice} Currency`;
  result.textContent = `Price You Will Pay: ${payPrice} Currency`;

  displayCard.style.display = "block";
}
reset.onclick = function () {
  originalPrice.value = "";
  percentage.value = "";
  displayCard.style.display = "none";
  originalPrice.focus();
};
