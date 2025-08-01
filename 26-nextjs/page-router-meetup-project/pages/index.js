import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'the first meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Lenin_at_Tampere.JPG',
    address: 'Some address 5, 12345 Some City',
    description: 'This is the first meetup!',
  },
  {
    id: 'm2',
    title: 'the second meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Lenin_at_Tampere.JPG',
    address: 'Some address 2, 54321 Some City',
    description: 'This is the second meetup!',
  },
];

export default function Home() {
  return (
    <MeetupList meetups={DUMMY_MEETUPS} />
  );
}