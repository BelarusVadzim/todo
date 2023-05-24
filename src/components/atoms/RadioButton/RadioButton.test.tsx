import render  from 'react-test-renderer';
import RadioButton from './RadioButton';

jest.mock('./RadioButton.module.scss', () => ({ labelLineThrough: 'labelLineThroughstyle', label: 'labelStyle' }));
const groupName = 'groupName';
const value = 'value';


describe('<Label />', () => {
  it('should render properly', () => {
    const component = render
      .create(<RadioButton className='className' groupName={groupName} value={value}>
        LabelChild
      </RadioButton>)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('when onChange raised and onChange handler specified should call expected functions with expected values', () => {
    const onChangeHandler = jest.fn();
    const component = render
      .create(<RadioButton 
        onChange={onChangeHandler}
        groupName={groupName} 
        value={value}>radioButtonText</RadioButton>);

    const expectedValue = value;
    const changeEventArg = { target: { value: expectedValue } };

    component.root.findByType('input').props.onChange(changeEventArg);

    expect(onChangeHandler).toBeCalledTimes(1);
    expect(onChangeHandler).toBeCalledWith(expectedValue);
  });
});
