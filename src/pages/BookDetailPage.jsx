import BookDetailAi from "../components/BookDetail/BookDetailAi";
import BookDetailCommu from "../components/BookDetail/BookDetailCommu";
import BookDetailContent from "../components/BookDetail/BookDetailContent";
import BookDetailinfo from "../components/BookDetail/BookDetailInfo";
import { Body, Page } from "../styles/PageLayout";

export default function BookDetailPage() {
  return (
    <Page style={{backgroundColor: '#ffffff'}}>
      <Body>
        <BookDetailinfo />
        <BookDetailContent />
        <BookDetailAi />
        <BookDetailCommu />
      </Body>
    </Page>
  )
}
