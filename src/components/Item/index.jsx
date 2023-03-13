import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Item({ product }) {
  return (
    <Card style={{ width: "15em" }} fluid>
      <Card.Img
        src={product.image}
        style={{ minHeight: "10em", maxHeight: "10em", overflow: "hidden" }}
      />
      <Card.Title><b>{product.name}</b></Card.Title>
      <Card.Title>{product.description}</Card.Title>
      <Card.Title>${product.price}</Card.Title>
      <Button className="m-3" variant="success">
        Comprar{" "}
      </Button>
    </Card>
  );
}

export default Item;