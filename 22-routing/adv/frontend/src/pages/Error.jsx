import PageContent from "../components/PageContent";
import {useRouteError} from 'react-router-dom';
import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  // can receive the error throw from any loader
  const error = useRouteError();
  const {status} = error;
  let title = 'An error occurred!';
  let errorMessage = 'something went wrong';

  if (status === 500) {
    // const errorData = JSON.parse(error.data);
    const errorData = error.data;
    errorMessage = errorData.message;
  }
  if (status === 404) {
    title = 'Not Found';
    errorMessage = 'could not find resource or page';
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{errorMessage}</p>
      </PageContent>
    </>
  );
}

export default ErrorPage;