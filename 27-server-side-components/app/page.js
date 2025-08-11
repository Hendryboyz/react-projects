import RSCDemo from "@/components/RSCDemo";
import ClientDemo from "@/components/ClientDemo";
import DataFetchingDemo from "@/components/DataFetchingDemo";
import ServerActionsDemo from "@/components/ServerActionsDemo";
import UsePromiseDemo from "@/components/UsePromisesDemo";
import {Suspense} from "react";
import {fetchDummyUserData} from "@/actions";
import ErrorBoundary from "@/components/ErrorBoundary";

export default async function Home() {
  const fetchUserPromise = new Promise((resolve, reject) => setTimeout(async () => {
    try {
      const users = await fetchDummyUserData();
      resolve(users);
    } catch (e) {
      reject(new Error('Something went wrong!!'));
    }
  }, 2000));
  return (
    <main>
      <ErrorBoundary>
        <Suspense fallback={<p>Loading users...</p>}>
          <UsePromiseDemo userPromise={fetchUserPromise}/>
        </Suspense>
      </ErrorBoundary>
      <ClientDemo>
        <RSCDemo />
      </ClientDemo>
      <DataFetchingDemo />
      <ServerActionsDemo />
    </main>
  );
}
