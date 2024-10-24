function validate() {
      
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
    alert("First name must be filled out!");
    return false;
    }

    let i = document.forms["myForm"]["lname"].value;
    if (i == "") {
    alert("Last name must be filled out!");
    return false;
    }

    let b = document.forms["myForm"]["email"].value;
  if (b == "") {
    alert("Email must be filled out!");
    return false;
  }

  let j = document.forms["myForm"]["enquiry"].value;
  if (j == "") {
    alert("Message must be filled out!");
    return false;
  }

  let g = document.forms["myForm"]["telnumber"].value;
  if (g == "") {
    alert("Telephone number must be filled out!");
    return false;
  }
}