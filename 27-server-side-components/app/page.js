import RSCDemo from "@/components/RSCDemo";
import ClientDemo from "@/components/ClientDemo";
import DataFetchingDemo from "@/components/DataFetchingDemo";
import ServerActionsDemo from "@/components/ServerActionsDemo";

export default function Home() {
  return (
    <main>
      <ClientDemo>
        <RSCDemo />
      </ClientDemo>
      <DataFetchingDemo />
      <ServerActionsDemo />
    </main>
  );
}
