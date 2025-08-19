import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from './Greeting';

describe('Greeting component test suite', () => {
  test('render Hello world as header', () => {
    // arrange: set up the test data, test conditions and test env

    // action: run logic that should be tested
    render(<Greeting />);

    // assert: compare execution result with expected results
    // const greetingElement = screen.getByText(/hello world/i);
    const headerElement = screen.getByText('Hello World', {exact: false});
    expect(headerElement).toBeInTheDocument();
  })

  test('render good to see you if button was NOT clicked', () => {
    // arrange: set up the test data, test conditions and test env
    render(<Greeting />);

    // action: run logic that should be tested

    // assert: compare execution result with expected results
    const greetingElement = screen.getByText("It's good to see you", {exact: false});
    expect(greetingElement).toBeInTheDocument();
  })

  test('render Changed while button click', () => {
    // arrange: set up the test data, test conditions and test env
    render(<Greeting />);

    // action: run logic that should be tested
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement)

    // assert: compare execution result with expected results
    const changedElement = screen.getByText(/change!/i);
    expect(changedElement).toBeInTheDocument();
  })

  test('should not render good to see you while button click', () => {
    // arrange: set up the test data, test conditions and test env
    render(<Greeting />);

    // action: run logic that should be tested
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement)

    // assert: compare execution result with expected results
    const greetingElement = screen.queryByText("good to see you", {exact: false});
    expect(greetingElement).toBeNull();
  })
});