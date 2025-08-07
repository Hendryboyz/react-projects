import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import {useRouter} from "next/router";

export default function NewMeetupPage() {
  const router = useRouter();
  async function handleAddMeetup(meetupData) {
    console.log(meetupData);

    const response = await fetch("/api/meetups", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(meetupData),
    });
    const data = await response.json();
    console.log(data);
    await router.push("/");
  }

  return (
    <>
      <title>Add a New Meetup</title>
      <meta
        name="description"
        content="Add your own meetups and create amazing networking oppurtunities."
      />
      <NewMeetupForm onAddMeetup={handleAddMeetup}/>
    </>
  );
}