import Async from "./Async";
import {render, screen} from "@testing-library/react";

describe('Async component', () => {
  test('renders posts if request succeeds', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => { return [{ id: 'p1', title: 'First Post' }] },
    })

    render(<Async />);

    // const listItemElements = screen.getAllByRole('listitem');
    // find return a promise instead the elements itself
    const listItemElements = await screen.findAllByRole('listitem');
    expect(listItemElements).not.toHaveLength(0);
  })
})