import MeetupList from "../components/meetups/MeetupList";
import {useEffect, useState} from "react";
import {listMeetup} from "./api/meetups";

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

export async function getStaticProps() {
  const meetupDocuments = await listMeetup();
  return {
    props: {
      meetups: meetupDocuments.map(doc => ({
        id: doc._id.toString(),
        title: doc.title,
        address: doc.address,
        image: doc.image,
        description: doc.description,
      })),
    },
    revalidate: 10,
  };
}

// export function getServerSideProps(context) {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }


export default function Home(props) {
  return (
    <MeetupList meetups={props.meetups} />
  );
}