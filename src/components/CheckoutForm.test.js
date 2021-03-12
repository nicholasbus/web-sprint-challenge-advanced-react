import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

// Test that the checkout form renders without errors
test("Checkout form renders", () => {
    render(<CheckoutForm />);
})

test("form header renders", () => {
    render(<CheckoutForm />);
    const formHeader = screen.queryByText(/checkout form/i);
    expect(formHeader).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);
    const firstNameInput = screen.getByLabelText('First Name:');
    const lastNameInput = screen.getByLabelText('Last Name:');
    const addressInput = screen.getByLabelText('Address:');
    const cityInput = screen.getByLabelText('City:');
    const stateInput = screen.getByLabelText('State:');
    const zipInput = screen.getByLabelText('Zip:');
    const checkoutButton = screen.getByRole('button');

    userEvent.type(firstNameInput, 'Firstname');
    userEvent.type(lastNameInput, 'Lastname');
    userEvent.type(addressInput, '12345 Fake Street');
    userEvent.type(cityInput, 'Denver');
    userEvent.type(stateInput, 'Colorado');
    userEvent.type(zipInput, '12345');
    userEvent.click(checkoutButton);

    const successMessage = screen.getByTestId('successMessage')
    expect(successMessage).toBeInTheDocument();
    
});
