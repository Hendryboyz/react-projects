import {useRouter} from "next/router";
import MeetupDetail from "../../components/meetups/MeetupDetail";

export async function getStaticPaths() {
  // fetch the support meetupId from backend API
  return {
    paths: [
      { params: { meetupId: 'm1' } },
      { params: { meetupId: 'm2' } },
    ],
    /**
     * fallback `false` means the paths includes all the meetupIds, if users
     * visit the page with the meetupId not in the paths array
     *
     * the 404 error will return to the user
     */
    fallback: false,
    /**
     * allow to pre-generate some of the pages, the missing meetupId will generate the page dynamically
     */
    // fallback: true,
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetup: {
        id: meetupId,
        title: 'the first meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/03/Lenin_at_Tampere.JPG',
        address: 'Some address 5, 12345 Some City',
        description: 'This is the first meetup!',
      },
    },
  };
}

export default function MeetupDetailsPage(props) {
  // const router = useRouter();
  // const {meetupId} = router.query;
  return (
    <MeetupDetail {...props.meetup} />
  );
}