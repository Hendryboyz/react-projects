import {useRouter} from "next/router";
import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetailsPage() {
  const router = useRouter();
  const {meetupId} = router.query;
  const dummyMeetup = {
    id: 'm1',
    title: 'the first meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Lenin_at_Tampere.JPG',
    address: 'Some address 5, 12345 Some City',
    description: 'This is the first meetup!',
  }
  return (
    <MeetupDetail {...dummyMeetup} />
  );
}