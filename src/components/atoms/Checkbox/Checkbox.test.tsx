import render  from 'react-test-renderer';
import Checkbox from './Checkbox';

jest.mock('./Checkbox.module.scss', () => ({ checkboxChecked: 'checkboxCheckedStyle', checkboxUnchecked: 'checkboxUncheckedStyle' }));

describe('<Checkbox />', () => {
  it('should render properly', () => {
    const tree = render
      .create(<Checkbox />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when checked and classname specified should render properly ', () => {
    const tree = render
      .create(<Checkbox checked className='extClassName' />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
