import type { FC } from 'react';

export const AuthenticationProvider: FC = () => {
  const user = 'john doe';

  /*
    If there are any type of external links like deep links or anything of the like:
    This is the place to add redirect after any type of authentication required auth lookups etc. 
  */

  return user ? <div>{user}</div> : <div>No user!!!</div>;
};
