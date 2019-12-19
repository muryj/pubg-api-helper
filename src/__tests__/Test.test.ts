import { Hello } from '../index';

test('Say Hello', () => {
  expect(Hello('Jekanator')).toBe('Hello Jekanator');
});
