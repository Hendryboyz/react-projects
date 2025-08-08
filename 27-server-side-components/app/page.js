import RSCDemo from "@/components/RSCDemo";
import ClientDemo from "@/components/ClientDemo";
import DataFetchingDemo from "@/components/DataFetchingDemo";
import ServerActionsDemo from "@/components/ServerActionsDemo";
import UsePromiseDemo from "@/components/UsePromisesDemo";
import {Suspense} from "react";
import {fetchDummyUserData} from "@/actions";

export default async function Home() {
  const fetchUserPromise = new Promise(resolve => setTimeout(async () => {
    const users = await fetchDummyUserData();
    resolve(users);
  }, 2000));
  return (
    <main>
      <Suspense fallback={<p>Loading users...</p>}>
        <UsePromiseDemo userPromise={fetchUserPromise}/>
      </Suspense>
      <ClientDemo>
        <RSCDemo />
      </ClientDemo>
      <DataFetchingDemo />
      <ServerActionsDemo />
    </main>
  );
}
