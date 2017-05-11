var Array = [document.forms["formNumbers"]["t1"].value, document.forms["formNumbers"]["t2"].value, document.forms["formNumbers"]["t3"].value]

function getEq() {
  Array = [document.forms["formNumbers"]["t1"].value, document.forms["formNumbers"]["t2"].value, document.forms["formNumbers"]["t3"].value]
  if (Array[2] - Array[1] == Array[1] - Array[0]) {
    var d = Array[2] - Array[1];
  } else {
    d = ':)'
  }
  if (Array[2] / Array[1] == Array[1] / Array[0]) {
    var r = Array[2] / Array[1]
  } else {
    r = ':)'
  }
  console.log(d, r)
  if (d !== ':)') {
    console.log('t(n) = ',
      Array[0],
      ' + ',
      d, '(n-1)')
    console.log(
      't(n) = t(n-1) + ', d)
    document.getElementById('exp').innerHTML = 't(n) = ' +
      Array[0] +
      ' + ' +
      d + '(n-1)';
    document.getElementById('rec').innerHTML = 't(n) = t(n-1) + ' + d
  } else if (r !== ':)') {
    console.log('t(n) = ',
      Array[0], '*',
      r, '^(n-1)')
    console.log('t(n) = t(n-1)*', r)
    document.getElementById('exp').innerHTML = 't(n) = ' +
      Array[0] + '*' +
      r + '^(n-1)';
    document.getElementById('rec').innerHTML = 't(n) = t(n-1)*' + r
  } else {
    document.getElementById('exp').innerHTML = 'don do dis';
    document.getElementById('rec').innerHTML = 'pleas'
  }
}
