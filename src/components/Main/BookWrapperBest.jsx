import CarouselBest from "../carousel/CarouselBest";
import { Book, BookInfos, Img, TitleText } from "../../styles/Main/BookStyle";

export default function BookWrapperBest() {
  return (
    <Book style={{margin: '5rem 0'}}>
      <TitleText>
        <Img src="public\images\책_아이콘-removebg-preview.png" />
        독자들이 좋아하는 책
      </TitleText>
      <BookInfos>
        <CarouselBest />
      </BookInfos>
    </Book>
  );
}
