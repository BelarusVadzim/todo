import render  from 'react-test-renderer';
import Textbox from './Textbox';

const textValue = 'textValue';
jest.mock('./Textbox.module.scss', () => ({ textbox: 'textboxStyle' }));
let mockSetText: jest.Mock;
jest.mock('react', () => {
  mockSetText = jest.fn();
  const actual = jest.requireActual('react');
  return {
    ...actual,
    useState: jest.fn().mockReturnValue([textValue, mockSetText]),
  };
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('<Textbox />', () => {
  it('should render properly', () => {
    const component = render
      .create(<Textbox />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('when onKeyDown raised witn not Enter key should call expected functions with expected values', () => {
    const onReturnHandler = jest.fn();
    const value = 'textbox value';
    const key = 'notEnter';
    const component = render
      .create(<Textbox 
        onReturn={onReturnHandler} />);

    const keyboardEventArg = { key, currentTarget: { value } };

    component.root.findByType('input').props.onKeyDown(keyboardEventArg);

    expect(onReturnHandler).toBeCalledTimes(0);
    expect(mockSetText).toBeCalledTimes(0);
  });

  it('when onKeyDown raised witn Enter key should call expected functions with expected values', () => {
    const onReturnHandler = jest.fn();
    const value = 'textbox value';
    const key = 'Enter';
    const component = render
      .create(<Textbox 
        onReturn={onReturnHandler} />);

    const expectedValue = value;
    const keyboardEventArg = { key, currentTarget: { value } };

    component.root.findByType('input').props.onKeyDown(keyboardEventArg);

    expect(onReturnHandler).toBeCalledTimes(1);
    expect(onReturnHandler).toBeCalledWith(expectedValue);
    expect(mockSetText).toBeCalledTimes(1);
    expect(mockSetText).toBeCalledWith('');
    
  });

  it('when onChange raised should call expected functions with expected values', () => {
    const value = 'textbox value';
    const component = render
      .create(<Textbox />);

    const expectedValue = value;
    const changeEventArg = { target: { value } };

    component.root.findByType('input').props.onChange(changeEventArg);

    expect(mockSetText).toBeCalledTimes(1);
    expect(mockSetText).toBeCalledWith(expectedValue);
    
  });
});
