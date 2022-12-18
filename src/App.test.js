import { render, screen, cleanup } from "@testing-library/react"

import CineApp from "./popHub"

afterEach(cleanup);

describe("Main Page",()=>{
<<<<<<< HEAD
  it('has a logo',() => {
=======
  it('has a logo with the correct image and alt text',() => {
>>>>>>> 2c8241dfb8e30e6b809707829cd5051aff96d05f
    render(<CineApp/>);
    const image = screen.getByAltText('logo');
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', 'https://res.cloudinary.com/dkcpu9uv8/image/upload/v1671371147/popcorn_yann2i.png')
  });

  describe('Side Bar of main page', () => {
    it("has filter options for genre",()=>{
      render(<Sidebar/>)
      const div = screen.getByTestId("genrefilters")
      expect(div).toBeInTheDocument()
    })
      describe("Genre Filters",()=>{
        it("has action genre",()=>{
          render(<Sidebar/>)
          const a = screen.getByTestId("action")
          expect(a).toBeInTheDocument()
        })

        it("has horror genre",()=>{
          render(<Sidebar/>)
          const a = screen.getByTestId("horror")
          expect(a).toBeInTheDocument()
        })

        it("has adventure genre",()=>{
          render(<Sidebar/>)
          const a = screen.getByTestId("adventure")
          expect(a).toBeInTheDocument()
        })

        it("has drama genre",()=>{
          render(<Sidebar/>)
          const a = screen.getByTestId("drama")
          expect(a).toBeInTheDocument()
        })

        it("has sci-fi genre",()=>{
          render(<Sidebar/>)
          const a = screen.getByTestId("scifi")
          expect(a).toBeInTheDocument()
        })
      })

    it("has filter options for language",()=>{
      render(<Sidebar/>)
      const div = screen.getByTestId("languagefilters")
      expect(div).toBeInTheDocument()
    })
      describe("Language Filters",()=>{
        it("has english language",()=>{
          render(<Sidebar/>)
          const a = screen.getByTestId("english")
          expect(a).toBeInTheDocument()
        })

        it("has filipino language",()=>{
          render(<Sidebar/>)
          const a = screen.getByTestId("filipino")
          expect(a).toBeInTheDocument()
        })

        it("has korean language",()=>{
          render(<Sidebar/>)
          const a = screen.getByTestId("korean")
          expect(a).toBeInTheDocument()
        })

        it("has japanese language",()=>{
          render(<Sidebar/>)
          const a = screen.getByTestId("japanese")
          expect(a).toBeInTheDocument()
        })

        it("has french language",()=>{
          render(<Sidebar/>)
          const a = screen.getByTestId("french")
          expect(a).toBeInTheDocument()
        })

        it("has hindi language",()=>{
          render(<Sidebar/>)
          const a = screen.getByTestId("hindi")
          expect(a).toBeInTheDocument()
        })
      })
  })

	it("has a search field",()=>{
		render(<Navbar/>)
		const input = screen.getByTestId("Searchbar")
		expect(input).toBeInTheDocument()
		expect(input).toHaveAttribute("type", "text")
	})

  it("has a list of Trending Movies",()=>{
    render(<MovieList/>)
    const div = screen.getByTestId("trending")
    expect(div).toBeInTheDocument()
  })

  it("has a list of Watch Again Movies",()=>{
    render(<MovieList/>)
    const div = screen.getByTestId("watchagain")
    expect(div).toBeInTheDocument()
  })

  // it("has a buy button",()=>{
	// 	render(<MovieList/>)
	// 	const btn = screen.getByTestId("");
	// 	expect(btn).toBeInTheDocument();
	// });

  // it("has a rent button",()=>{
	// 	render(<MovieList/>)
	// 	const btn = screen.getByTestId("");
	// 	expect(btn).toBeInTheDocument();
	// });
})