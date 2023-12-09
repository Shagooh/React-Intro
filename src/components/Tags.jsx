import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

const Tags = ({ text, backColor }) => {
  return (
    <>
      <h2>
        <Button variant={backColor}>
          {text}
          <Badge bg="secondary"></Badge>
        </Button>
      </h2>
    </>
  );
};

export default Tags;
