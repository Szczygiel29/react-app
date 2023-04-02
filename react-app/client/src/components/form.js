import React, { useState } from "react";
import "./form.css"

function SausageForm() {
  const [sausageName, setSausageName] = useState("");
  const [sausagePhoto, setSausagePhoto] = useState("");
  const [sausageDescription, setSausageDescription] = useState("");
  const [sausageWeight, setSausageWeight] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {};

    formData.name = sausageName;
    formData.photo = sausagePhoto.name;
    formData.description = sausageDescription;
    formData.weight = sausageWeight;
    formData.owner_first_name = firstName;
    formData.owner_last_name = lastName;
    formData.owner_phone = phoneNumber;
    formData.owner_city = city;

    console.log(formData)

    fetch("http://localhost:8080/sausages", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className="sausage-name">Sausage Name:</label>
      <input
        type="text"
        value={sausageName}
        onChange={(event) => setSausageName(event.target.value)}
      />

      <label className="sausage-photo">Upload Photo:</label>
      <input
        type="file"
        onChange={(event) => setSausagePhoto(event.target.files[0])}
      />

      <label className="sausage-description">Description:</label>
      <textarea
        rows="4"
        cols="50"
        value={sausageDescription}
        onChange={(event) => setSausageDescription(event.target.value)}
      ></textarea>

      <label className="sausage-weight">Weight in grams:</label>
      <input
        type="number"
        value={sausageWeight}
        onChange={(event) => setSausageWeight(event.target.value)}
      />

      <label className="first-name">First Name:</label>
      <input
        type="text"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />

      <label className="last-name">Last Name:</label>
      <input
        type="text"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />

      <label className="phone-number">Phone Number:</label>
      <input
        type="tel"
        id="phone-number"
        name="phone-number"
        value={phoneNumber}
        onChange={(event) => setPhoneNumber(event.target.value)}
      />

      <label className="city">City:</label>
      <input
        type="text"
        id="city"
        name="city"
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />

      <input type="submit" value="Submit" />
    </form>
  );
}

export default SausageForm;
