import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const LinkButton = (props: {to: string, children?: any}) => {
  return (
    <Link to={props.to} tabIndex={-1}>
      <Button variant="outlined">{props.children}</Button>
    </Link>
  );
};

export default LinkButton
