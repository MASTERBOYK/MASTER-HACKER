function generate() {
  let link = document.getElementById('target').value;
  if(link) {
    document.getElementById('result').innerText = "Generated link: " + link;
  } else {
    document.getElementById('result').innerText = "Please enter a link first.";
  }
}
