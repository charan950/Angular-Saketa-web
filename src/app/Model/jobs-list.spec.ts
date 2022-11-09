import { JobsList } from './jobs-list';

describe('JobsList', () => {
  it('should create an instance', () => {
    expect(new JobsList(1, 'IT')).toBeTruthy();
  });
});
