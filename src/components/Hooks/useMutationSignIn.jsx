import { useMutation  } from "@apollo/client";
import { SIGN_IN } from '../../graphql/queries';

export const useMutationSignIn = () => {
  const [signInUser, { data, loading, error, reset }] = useMutation(SIGN_IN);

  return { signInUser, data, loading, error, reset };
}