import render  from 'react-test-renderer';
import Label from './Label';

jest.mock('./Label.module.scss', () => ({ labelLineThrough: 'labelLineThroughstyle', label: 'labelStyle' }));

describe('<Label />', () => {
  it('should render properly', () => {
    const tree = render
      .create(<Label>LabelChild</Label>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('when draggable lineThrough className specified should render properly', () => {
    const tree = render
      .create(<Label draggable lineThrough className='testClass'>LabelChild</Label>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
