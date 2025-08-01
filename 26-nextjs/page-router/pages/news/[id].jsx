import {useRouter} from 'next/router';

export default function NewsDetailPage() {
  const router = useRouter();
  const newsId = router.query.id;
  return (
    <h1>this news {newsId} page</h1>
  );
}