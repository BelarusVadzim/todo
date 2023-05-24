import render  from 'react-test-renderer';
import Title from './Title';

jest.mock('./Title.module.scss', () => ({ title: 'titleStyle' }));

describe('<Title />', () => {
  it('should render properly', () => {
    const component = render
      .create(<Title>Title text</Title>);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
