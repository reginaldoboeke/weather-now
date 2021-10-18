import { render } from '@testing-library/react';
import { Home } from '.';

describe('Home page', () => {
  it('should renders correct', () => {
    render(<Home />);
    
    const section = document.querySelector('section');
    const cardsLength = section?.querySelectorAll('.card').length;

    expect(section).not.toBeEmptyDOMElement();
    expect(cardsLength).toEqual(3);
  });
});

