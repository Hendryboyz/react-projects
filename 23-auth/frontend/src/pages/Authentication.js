import AuthForm from '../components/AuthForm';
import {BACKEND_URL} from "../utils";
import {redirect} from "react-router-dom";

function AuthenticationPage() {
  return <AuthForm />;
}

const getRequestUrl = (pageMode) => {
  if (pageMode === 'signup') {
    return `${BACKEND_URL}/signup`
  } else {
    return `${BACKEND_URL}/login`
  }
};

export async function action({request}) {
  const queries = new URL(request.url).searchParams;
  const pageMode = queries.get('mode');
  if (pageMode !== 'signup' && pageMode !== 'signin') {
    throw Response.json({message: 'unsupported mode'}, {status: 422});
  }
  const data = await request.formData();
  const authData = {
    email: data.get('email'),
    password: data.get('password'),
  }

  const resourceUrl = getRequestUrl(pageMode);

  const resp = await fetch(resourceUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(authData),
  })

  if (resp.status === 422 || resp.status === 401) {
    return resp;
  }

  if (!resp.ok) {
    throw Response.json({message: 'could not authenticate user'}, {status: 500});
  } else {
    return redirect('/');
  }
}

export default AuthenticationPage;