import RSCDemo from "@/components/RSCDemo";
import ClientDemo from "@/components/ClientDemo";

export default function Home() {
  return (
    <main>
      <RSCDemo />
      <ClientDemo>
        <RSCDemo />
      </ClientDemo>
    </main>
  );
}
