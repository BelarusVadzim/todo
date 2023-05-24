import render  from 'react-test-renderer';
import Button from './Button';

jest.mock('./Button.module.scss', () => ({ button: 'buttonStyle' }));

describe('<Button />', () => {
  it('should render properly', () => {
    const tree = render
      .create(<Button value='buttonValue' />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when glyph className specified should render properly', () => {
    const tree = render
      .create(<Button glyph={true} value='buttonValue' className='className' />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
