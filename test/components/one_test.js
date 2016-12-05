
import { renderComponent , expect } from '../test_helper';
import One from '../../app/components/one';

describe('One' , () => {

  let component;

  beforeEach(() => {
    component = renderComponent(One);
  });

  it('shows a comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  });

  it('shows a comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  });

});
