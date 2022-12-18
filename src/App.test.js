import { render, screen, cleanup } from "@testing-library/react"

import CineApp from "./popHub"
import SearchBox from "./components/SearchBox";
import Movies from "./components/Movies";
import Footer from "./Footer";
import Cart from "./components/Cart";
import { useEffect } from "react";

afterEach(cleanup);

describe("Main Page",()=>{
  it('has a logo with the correct image and alt text',() => {
    render(<CineApp/>);
    const image = screen.getByAltText('logo');
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', 'logo.png')
  });

  it("has a search field",()=>{
		render(<SearchBox/>)
		const input = screen.getByPlaceholderText("Type to search...")
		expect(input).toBeInTheDocument()
	})

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
	});

  it("shows current total price", () => {
	});

  it("has a checkout button", async () => {
    render(<Cart/>)
    const btn = screen.getByTestId("checkoutbtn")
    expect(btn).toBeInTheDocument()
	});
})