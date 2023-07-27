import { render, cleanup} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import { Provider } from 'react-redux';
import {createStore} from "redux";
import Searchbar from './components/Searchbar';
import setCurrency from './Reducer/setCurrency';



// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


const renderWithRedux = (
	component,
	{  store = createStore(setCurrency) } = {},
) => {
	return {
		...render(<Provider store={store}>{component}</Provider>),
		store,
	};
};

afterEach(cleanup);

it("checks initial state", () => {
	const { getByTestId } = renderWithRedux(<Searchbar/>);
	expect(getByTestId("convert_currency")).toHaveValue("usd");
});


