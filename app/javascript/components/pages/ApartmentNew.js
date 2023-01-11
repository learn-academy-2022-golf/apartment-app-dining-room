import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const ApartmentNew = ({ createApartment, user }) => {
  const navigate = useNavigate();
  const [newApartment, setNewApartment] = useState({
    street: "",
    city: "",
    state: "",
    manager: "",
    email: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    pets: "",
    image: "",
    user_id: user.id,
  });

  const handleChange = (e) => {
    setNewApartment({ ...newApartment, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    createApartment(newApartment);
    navigate("/apartmentindex");
  };

  return (
    <div>
      <h1>Create a new apartment</h1>
      <Form>
        <FormGroup>
          <Label for="street">Street</Label>
          <Input
            name="street"
            onChange={handleChange}
            placeholder="What is your street?"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="city">City</Label>
          <Input
            name="city"
            onChange={handleChange}
            placeholder="What is your city?"
            type="text"
            />
        </FormGroup>
        <FormGroup>
          <Label for="state">State</Label>
          <Input
            name="state"
            onChange={handleChange}
            placeholder="What is your state?"
            type="text"
            />
        </FormGroup>
        <FormGroup>
          <Label for="manager">Manager</Label>
          <Input
            name="manager"
            onChange={handleChange}
            placeholder="Who is your manager?"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            name="email"
            onChange={handleChange}
            placeholder="What is your email?"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="price">Price</Label>
          <Input
            name="price"
            onChange={handleChange}
            placeholder="What is your ideal price?"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="bedrooms">Bedrooms</Label>
          <Input
            name="bedrooms"
            onChange={handleChange}
            placeholder="How many bedrooms?"
            type="number"
          />
        </FormGroup>
        <FormGroup>
          <Label for="bathrooms">Bathrooms</Label>
          <Input
            name="bathrooms"
            onChange={handleChange}
            placeholder="How many bathrooms?"
            type="number"
          />
        </FormGroup>
        <FormGroup>
          <Label for="pets">Pets</Label>
          <Input
            name="pets"
            onChange={handleChange}
            placeholder="Do you allow pets?"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image</Label>
          <Input
            name="image"
            onChange={handleChange}
            placeholder="Please share your image."
            type="url"
          />
        </FormGroup>
        <Button onClick={handleSubmit}>Submit Apartment</Button>
      </Form>
    </div>
  );
};

export default ApartmentNew;
