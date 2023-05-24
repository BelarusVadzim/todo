import render  from 'react-test-renderer';
import Label from './Label';

jest.mock('./Label.module.scss', () => () => jest.fn());

describe('<Label />', () => {
  it('Label should render properly', () => {
    const tree = render
      .create(<Label>LabelChild</Label>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Label when className specified should render properly', () => {
    const tree = render
      .create(<Label lineThrough>LabelChild</Label>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});