import {User} from 'src/app/models/classes/user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User("testID", "test@test.de")).toBeTruthy();
  });
});
