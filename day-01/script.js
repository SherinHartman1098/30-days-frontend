let count = 0;
console.log(count);
function incrementCounter() {
  count++;
  document.getElementById("count").textContent = count;
}
function decrementCounter() {
  count--;
  if (count < 0) {
    count = 0;
    document.getElementById("count").textContent = count;
  }
  document.getElementById("count").textContent = count;
}
function resetCounter() {
  count = 0;
  document.getElementById("count").textContent = count;
}
