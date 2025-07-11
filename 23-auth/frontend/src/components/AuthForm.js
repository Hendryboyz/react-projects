import {Form, Link, useActionData, useNavigation, useSearchParams} from 'react-router-dom';

import classes from './AuthForm.module.css';

function AuthForm() {
  const actionData = useActionData();
  const navigation = useNavigation();

  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode');
  const isLogin = mode === 'signin';

  const isSubmitting = navigation.state === 'submitting';

  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
        {actionData && actionData.errors && (
          <ul>
            {Object.values(actionData.errors).map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
        {actionData && actionData.message && (
          <p>{actionData.message}</p>
        )}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          {isLogin && (
            <p>
              Don't have account? <Link to={`?mode=signup`} type="button">sign-up</Link> here
            </p>
          )}
          {!isLogin && (
            <p>
              Already have account? <Link to={`?mode=signin`} type="button">login</Link> here
            </p>
          )}
        <button disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Save'}</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
