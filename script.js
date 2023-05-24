console.log('Hello!');

function validateForm() {
  const form = document.querySelectorAll('.input');
  form.forEach((data) => {
    if (data.className.includes('required')) {
      if (data.value.trim() === '') {
        document.querySelectorAll('.error.' + data.name)[0].style.display =
          'block';
      } else {
        document.querySelectorAll('.error.' + data.name)[0].style.display =
          'none';
      }
    }
    if (data.className.includes('min6Char')) {
      if (data.value.length <= 6) {
        document.querySelectorAll(
          '.error.' + data.name + '.min6Char'
        )[0].style.display = 'block';
      } else {
        document.querySelectorAll(
          '.error.' + data.name + '.min6Char'
        )[0].style.display = 'none';
      }
    }
  });
}

function callApi(filter) {
  fetch('https://mocki.io/v1/40d0bc00-7c09-41b9-8ee2-a028ef749cee')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.length > 0) {
        let tableTd = '';
        console.log(data);
        data.forEach(tableData => {
            if(typeof filter !== null && filter === true){
                if(!tableData.isActive) {return};
            }
           
            tableTd = tableTd+'<tr><td>'+tableData.id+'</td><td>'+tableData.name+'</td><td>'+tableData.gender+'</td><td>'+tableData.email+'</td><td>'+tableData.age+'</td><td>'+tableData.phone+'</td><td><img src="'+tableData.picture+'" /></td><td>'+tableData.friends.length+'</td></tr>'
        });
        document.querySelector('#tableData').innerHTML = tableTd;
      }
     
    });
}
callApi(null);


function updateRecords(e){
    console.log(e);
    const checked = e.target.checked;
    callApi(checked);
}