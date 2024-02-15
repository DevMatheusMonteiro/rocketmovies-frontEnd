import { Container } from "./styles";

import { FaRegStar, FaStar } from "react-icons/fa";

export function Stars({ rate = 0 }) {
  const rate0 = (
    <Container>
      <FaRegStar />
      <FaRegStar />
      <FaRegStar />
      <FaRegStar />
      <FaRegStar />
    </Container>
  );
  const rate1 = (
    <Container>
      <FaStar />
      <FaRegStar />
      <FaRegStar />
      <FaRegStar />
      <FaRegStar />
    </Container>
  );
  const rate2 = (
    <Container>
      <FaStar />
      <FaStar />
      <FaRegStar />
      <FaRegStar />
      <FaRegStar />
    </Container>
  );
  const rate3 = (
    <Container>
      <FaStar />
      <FaStar />
      <FaStar />
      <FaRegStar />
      <FaRegStar />
    </Container>
  );
  const rate4 = (
    <Container>
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaRegStar />
    </Container>
  );
  const rate5 = (
    <Container>
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
    </Container>
  );

  return (
    <>
      {rate === 0
        ? rate0
        : rate === 1
        ? rate1
        : rate === 2
        ? rate2
        : rate === 3
        ? rate3
        : rate === 4
        ? rate4
        : rate5}
    </>
  );
}
