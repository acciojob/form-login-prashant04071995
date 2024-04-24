function getFormvalue() {
  event.preventDefault(); // Prevent the form from submitting traditionally

  var firstName = document.forms["form1"]["fname"].value; // Updated to 'fname'
  var lastName = document.forms["form1"]["lname"].value; // Updated to 'lname'

  alert(firstName + " " + lastName);
}
