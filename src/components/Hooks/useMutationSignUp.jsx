import { useMutation  } from "@apollo/client";
import { SIGN_UP } from '../../graphql/queries';

export const useMutationSignUp = () => {
  // let input;
  const [sigupUser, { data, loading, error, reset }] = useMutation(SIGN_UP);
  // console.log('dede useMutationSignUp data', data);
  // console.log('dede useMutationSignUp loading', loading);
  // console.log('dede useMutationSignUp error', error);
  // if (loading) return 'Submitting...';
  // if (error) return `Submission error! ${error.message}`;

  // addTodo({ variables: { type: input.value } });

  return { sigupUser, data, loading, error, reset };
}