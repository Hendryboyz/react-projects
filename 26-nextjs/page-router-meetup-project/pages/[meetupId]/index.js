import {useRouter} from "next/router";
import Head from "next/head";
import {Fragment} from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import {getMeetup, getMeetupIds} from "../api/meetups";

export async function getStaticPaths() {
  // fetch the support meetupId from backend API
  const meetupIds = await getMeetupIds();
  return {
    paths: meetupIds.map(id => ({
      params: { meetupId: id }
    })),
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
  const meetup = await getMeetup(meetupId)
  return {
    props: {
      meetup: {
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
      },
    },
  };
}

export default function MeetupDetailsPage(props) {
  // const router = useRouter();
  // const {meetupId} = router.query;
  return (
    <Fragment>
      <Head>
        <title>{props.meetup.title}</title>
        <meta
          name="description"
          content={props.meetup.description}
        />
      </Head>
      <MeetupDetail {...props.meetup} />
    </Fragment>
  );
}