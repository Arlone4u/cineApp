import { render, screen, cleanup } from "@testing-library/react";

import axios from "axios";
import CineApp from "./popHub";
import Movies from "./components/Movies";
import Footer from "./Footer";
import Cart from "./components/Cart";
import LoginForm from "./components/Login";

afterEach(cleanup);
jest.mock("axios");

const mockToken = "QpwL5tke4Pnpja7X4";

const validUser = {
  'email': 'eve.holt@reqres.in',
  'password': 'cityslicka'
}

describe("Main Page",()=>{
  it('has a logo with the correct image and alt text',() => {
    render(<CineApp/>);
    const image = screen.getByAltText('logo');
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', 'logo.png')
  });
  it("has a list of movies and shows", () => {
    render(<CineApp/>)
    const list = screen.getByTestId("productslist")
    expect(list).toBeInTheDocument()
  })

  it("has a drop down field to sort movies", () => {
    render(<Movies/>)
    const sort = screen.getByTestId("sort")
    expect(sort).toBeInTheDocument()
   })

   it("has a button to bring up the movie cart",() => {
    render(<Cart/>)
    const showCart = screen.getByTestId('navcart')
    expect(showCart).toBeInTheDocument()
   })
})

describe("Footer", () => {
  it("has clickable texts", () => {
		render(<Footer />); 
		const items = screen.getAllByRole('listitem');
		expect(items.length).toEqual(18);
	});
})

describe("Movie Cart", () => {
  it("list of orders", () => {
    render(<Cart/>)
    const list = screen.getByTestId("cart")
    expect(list).toBeInTheDocument()
	});

  it("shows current total price", () => {
    render(<Cart/>)
    const price = screen.getByTestId('checkout');
    expect(price).toBeInTheDocument();
	});

  it("has a checkout button", async () => {
    render(<Cart/>)
    const btn = screen.getByTestId("checkoutbtn")
    expect(btn).toBeInTheDocument()
	});
})

describe("Login Page", () => {
  it("has an input for email",()=>{
		render(<LoginForm/>);
		const input = screen.getByTestId("email");
		expect(input).toBeInTheDocument();
		expect(input).toHaveAttribute("type", "email");
	});

    it("has an input for password",()=>{
		render(<LoginForm/>);
		const input = screen.getByTestId("password");
		expect(input).toBeInTheDocument();
		expect(input).toHaveAttribute("type", "password");
	});

    it("has a Login button",()=>{
		render(<LoginForm/>)
		const btn = screen.getByTestId("loginbtn");
		expect(btn).toBeInTheDocument();
    expect(btn).toHaveAttribute("type", "submit");
	});
})

describe("Check if valid user", () => {
  it("should return a token", async () => {
    axios.post.mockResolvedValue(mockToken);
  });

  it("user is valid", async () => {
    axios.post.mockResolvedValueOnce(validUser);
  });	
});