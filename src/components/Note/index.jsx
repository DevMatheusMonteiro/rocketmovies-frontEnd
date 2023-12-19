import { Container } from "./styles";

import { Stars } from "../Stars";
import { Tag } from "../Tag";

export function Note({ title, description, rate, tags }) {
  return (
    <Container to="/details/1">
      <div className="title-rant">
        <h3>{title}</h3>
        <Stars rate={rate} />
      </div>
      <p>{description}</p>
      <div className="container-tags">
        {tags &&
          tags.map((tag) => {
            return <Tag key={tag.id} title={tag.name} />;
          })}
      </div>
    </Container>
  );
}
