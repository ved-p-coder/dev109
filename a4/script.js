function validateForm() {
  let valid = true;

  const firstname = document.getElementById("firstname").value.trim();
  const lastname = document.getElementById("lastname").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const address = document.getElementById("address").value.trim();
  const city = document.getElementById("city").value.trim();
  const state = document.getElementById("state").value;
  const country = document.getElementById("country").value;
  const zipcode = document.getElementById("zipcode").value.trim();

  const fields = ["firstname", "lastname", "email", "phone", "username", "password", "address", "city", "state", "country", "zipcode"];
  fields.forEach(f => document.getElementById(f + "Error").innerText = "");

  if (!/^[A-Za-z]{1,20}$/.test(firstname)) {
    document.getElementById("firstnameError").innerText = "First name must be 1–20 letters.";
    valid = false;
  }

  if (!/^[A-Za-z]{1,20}$/.test(lastname)) {
    document.getElementById("lastnameError").innerText = "Last name must be 1–20 letters.";
    valid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").innerText = "Invalid email address.";
    valid = false;
  }

  if (!/^\d{10,15}$/.test(phone)) {
    document.getElementById("phoneError").innerText = "Phone must be 10–15 digits.";
    valid = false;
  }

  if (username === "" || username.length > 12) {
    document.getElementById("usernameError").innerText = "Max 12 characters.";
    valid = false;
  }

  const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{1,7}$/;
  if (!passRegex.test(password)) {
    document.getElementById("passwordError").innerText = "Max 7 chars: 1 upper, lower, digit & special.";
    valid = false;
  }

  if (address === "") {
    document.getElementById("addressError").innerText = "Address required.";
    valid = false;
  }

  if (city === "") {
    document.getElementById("cityError").innerText = "City required.";
    valid = false;
  }

  if (state === "") {
    document.getElementById("stateError").innerText = "Select a state.";
    valid = false;
  }

  if (country === "") {
    document.getElementById("countryError").innerText = "Select a country.";
    valid = false;
  }

  if (country === "USA") {
    if (!/^\d{5}$/.test(zipcode)) {
      document.getElementById("zipcodeError").innerText = "5-digit ZIP required.";
      valid = false;
    }
  }

  return valid;
}
