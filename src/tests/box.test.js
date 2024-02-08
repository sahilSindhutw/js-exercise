import { createChildBoxes, addContainerClickListener, handleCountBoxChange } from '../scripts/index';
import { BoxClasses, TotalBoxCount } from '../scripts/constants/Box';
import { createElement } from '../scripts/utils/createElements';

describe('DOMContentLoaded setup simulation', () => {
  let container;
  let inputField;

  beforeEach(() => {
    document.body.innerHTML = `<div id="container"></div>`;
    container = document.getElementById('container');
    jest.spyOn(console, 'log').mockImplementation(() => {});

    inputField = createElement({element: 'input', className: 'text-input'});

    createChildBoxes({container, count: TotalBoxCount, className: BoxClasses.default});
    addContainerClickListener(container);

    inputField.value = TotalBoxCount;
    container.before(inputField);

    inputField.addEventListener('change', (e) => handleCountBoxChange(e.target.value));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('initial setup and input field change', () => {
    expect(container.children.length).toBe(TotalBoxCount);
    expect(inputField.value).toBe(String(TotalBoxCount));
  });
  test('box click toggles active class', () => {
    const firstBox = container.querySelector('div');
    
    firstBox.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(firstBox.classList.contains(BoxClasses.active)).toBe(true);

    firstBox.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(firstBox.classList.contains(BoxClasses.active)).toBe(false);
  });
  test('changing input value changes box count', () => {
    const newBoxCount = 5;
    inputField.value = newBoxCount;

    const event = new Event('change');
    inputField.dispatchEvent(event);

    const currentBoxCount = container.querySelectorAll('.' + BoxClasses.default).length;
    expect(currentBoxCount).toBe(newBoxCount);
  });
  test('clicking a box logs the correct console message', () => {
    const box = container.querySelectorAll('div')[5];


    box.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    const expectedMessage = `Turning ON 6`;

    expect(console.log).toHaveBeenCalledWith(expectedMessage);

    box.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    const expectedMessageOnToggle = `Turning OFF 6`;

    expect(console.log).toHaveBeenCalledWith(expectedMessageOnToggle);
  });
});
