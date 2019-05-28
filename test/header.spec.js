import { shallowMount } from '@vue/test-utils';
import Header from '../src/components/header/Header.vue';

describe('Header.vue', () => {
  it('Testing Header main title', () => {
    const wrapper = shallowMount(Header);
    const message = wrapper.find('h1').text();
    expect(message).toBe('Welcome to the Pokedéx Search Database!');
  });
});