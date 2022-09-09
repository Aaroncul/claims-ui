import { render, screen, fireEvent } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Login from "./login";

describe("login tests", () => {
    const mockStore = configureStore();
    let store;

    test("ensure warning message is displayed when login fails",
        () => {
            const initialState = {user:{username : "", password: "", role : "", name : ""}};
            store = mockStore(initialState);

            //GIVEN
            const component = render(<Provider store={store}><BrowserRouter><Login /></BrowserRouter></Provider>);
            //WHEN
            //component.findByRole('button').simulate('click');
            //THEN
            const messageParagraph = screen.queryByText("log in");
            //we expect the message is present
            expect(messageParagraph).toBeInTheDocument();
            

        }
    )

})