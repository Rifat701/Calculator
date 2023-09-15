function DeleteAc() {
  document.getElementsByName("display")[0].value = "";
}

function DeleteDe() {
  var dlt = document.getElementsByName("display")[0];

  if (dlt.value.length > 0) {
    dlt.value = dlt.value.slice(0, -1);
  }
}

// function DeleteDe() {
//   let num = document.getElementsByName("display")[0].value;
//   let De = (num / 10) | 0;
//   document.getElementsByName("display")[0].value = De;
// }

function Calculate(output) {
  document.getElementsByName("display")[0].value += output;
}

function Result() {
  var a = document.getElementsByName("display")[0].value;
  var b = eval(a);
  document.getElementsByName("display")[0].value = b;
}
