function getFormvalue() {
  // Preventing the form from actually submitting (useful if this code is tested in a real environment where the form causes page reload)
  event.preventDefault();

  // Accessing the form values
  var firstName = document.forms["form1"]["first_name"].value;
  var lastName = document.forms["form1"]["last_name"].value;

  // Displaying the collected values
  alert(firstName + " " + lastName);
}
