import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
  function handleAddMeetup(meetupData) {
    console.log(meetupData);
  }

  return (
    <NewMeetupForm onAddMeetup={handleAddMeetup} />
  );
}