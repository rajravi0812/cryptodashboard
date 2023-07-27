import { render, cleanup} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import { Provider } from 'react-redux';
import {legacy_createStore as createStore} from "redux";
import Graphbar from './components/Graphbar';
import changeCrypto from './Reducer/switchcointab';





const renderWithReduxcoin = (
	component,
	{ initialState, store = createStore(changeCrypto,initialState) } = {},
) => {
	return {
		...render(<Provider store={store}>{component}</Provider>),
		store,
	};
};

afterEach(cleanup);

it("checks initial state", () => {
	const { getByTestId } = renderWithReduxcoin(<Graphbar/>);
	expect(getByTestId("default_coin")).toHaveValue("bitcoin");
});


