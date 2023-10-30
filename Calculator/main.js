function insert(num) {
  document.getElementById('result').value =
    document.getElementById('result').value + num;
}
function solution() {
  var val = document.getElementById('result').value;
  var result = eval(val);
  document.getElementById('result').value = result;
}
function clearText() {
  document.getElementById('result').value = '';
}
