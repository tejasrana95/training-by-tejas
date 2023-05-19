console.log('Hello!');

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
