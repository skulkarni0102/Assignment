function setError(message) {
  document.getElementById('error-message').textContent = message;
  document.getElementById('error-modal').style.display = 'block';
  document.querySelector('.close').style.display = 'block';
}
function displayData(data) {
  document.getElementById('error-message').textContent = '';
  const dataList = document.getElementById('data-list');
  dataList.innerHTML = '';
  for (const key in data) {
    console.log(`${key}: ${data[key]}`);
    var listItem = document.createElement('li');
    listItem.textContent = `${key}: ${data[key]}`;
    dataList.appendChild(listItem);
  }
  document.getElementById('error-modal').style.display = 'block';
  document.querySelector('.close').style.display = 'block';
}
function closeModal() {
  document.getElementById('error-modal').style.display = 'none';
  document.getElementById('message-modal').style.display = 'none';
  document.querySelector('.close').style.display = 'none';
}

function validate() {
  var valid = false;
  var name = document.forms['survey-form']['first-name'].value;
  var Lname = document.forms['survey-form']['last-name'].value;
  var date = document.forms['survey-form']['date-of-birth'].value;
  var selectElement = document.getElementById('country');
  var country =
    document.forms['survey-form']['country'].options[
      selectElement.selectedIndex
    ].text;
  var genderRadios = document.forms['survey-form']['gender'].value;
  var profession = document.forms['survey-form']['profession'].value;
  var email = document.forms['survey-form']['email'].value;
  var mobile = document.forms['survey-form']['mobile-number'].value;
  const nameRegex = /^[A-Za-z]+$/;
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const mobileRegex = /^\d{10}$/;
  if (name.trim() === '') {
    setError('Please enter your first name.');
    valid = false;
  } else if (!nameRegex.test(name)) {
    setError(
      'Name should only contain letters and no numbers or special characters.'
    );
    valid = false;
  } else if (Lname.trim() === '') {
    setError('Please enter your last name.');
    valid = false;
  } else if (!nameRegex.test(name)) {
    setError(
      'Name should only contain letters and no numbers or special characters.'
    );
    valid = false;
  } else if (!dateRegex.test(date)) {
    setError('Please enter valid Date of birth');
    valid = false;
  } else if (!genderRadios) {
    setError('Please select Gender');
    valid = false;
  } else if (!profession) {
    setError('Please enter profession');
    valid = false;
  } else if (!emailRegex.test(email) || email.trim() === '') {
    setError('Please enter valid email');
    valid = false;
  } else if (!mobileRegex.test(mobile)) {
    setError('Please enter valid phone number');
    valid = false;
  } else {
    validate = true;
    const obj = {
      First_Name: name,
      Last_Name: Lname,
      Date_Of_Birth: date,
      Country: country,
      Gender: genderRadios,
      Profession: profession,
      Email: email,
      Phone_Number: mobile,
    };
    displayData(obj);
    resetForm();
  }

  return valid;
}

function resetForm() {
  document.getElementById('survey-form').reset();
}
