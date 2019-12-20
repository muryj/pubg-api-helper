import { APIHelper, Platform } from '../index';

jest.mock('../api/base.ts');

it('constructor called', () => {
  const api = new APIHelper('test', Platform.STEAM);
  expect(api).toHaveBeenCalledTimes(1);
});
