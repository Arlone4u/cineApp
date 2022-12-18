import { render, screen, cleanup } from "@testing-library/react"

import CineApp from "./popHub"
import SearchBox from "./components/SearchBox";
import Movies from "./components/Movies";

afterEach(cleanup);

describe("Main Page",()=>{
  it('has a logo with the correct image and alt text',() => {
    render(<CineApp/>);
    const image = screen.getByAltText('logo');
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', 'https://res.cloudinary.com/dkcpu9uv8/image/upload/v1671371147/popcorn_yann2i.png')
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
})

  // it("has a buy button",()=>{
	// 	render(<MovieList/>)
	// 	const btn = screen.getByTestId("");
	// 	expect(btn).toBeInTheDocument();
	// });
