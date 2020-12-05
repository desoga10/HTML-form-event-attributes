function myFunction() {
  let values = document.getElementById("myInput").value;
  document.getElementById("demo").textContent = `You wrote: ${values}, which contains ${event.target.value.length} character(s) `;
}