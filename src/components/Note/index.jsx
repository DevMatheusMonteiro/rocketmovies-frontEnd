import { Container } from "./styles";

import { Stars } from "../Stars";
import { Tag } from "../Tag";

export function Note({ data }) {
  return (
    <Container to={`/details/${data.id}`}>
      <div className="title-rant">
        <h3>{data.title}</h3>
        <Stars rate={data.rating} />
      </div>
      <p>{data.description}</p>
      <div className="container-tags">
        {data.movieTags &&
          data.movieTags.map((tag) => {
            return <Tag key={tag.id} title={tag.name} />;
          })}
      </div>
    </Container>
  );
}
