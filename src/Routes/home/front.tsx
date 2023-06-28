import { useSpring, animated } from "@react-spring/web";
import Typography from "@mui/material/Typography";

const Title = (props: { text: string; i: number; style: any }) => {
  const animation = useSpring({ from: { y: 0 }, to: { y: props.i**2.2 } });

  return (
    <animated.div
      style={{
        position: "absolute",
        zIndex: -props.i,
        ...props.style,
        ...animation,
      }}
    >
      <Typography variant="h1" color={"primary"}>
        {props.text}
      </Typography>
    </animated.div>
  );
};

const generateTitle = (inputText: string, n: number) => {
  const elements: JSX.Element[] = [<Title text={inputText} i={0} style={{}} key={0}></Title>];
  for (let i = 1; i < n; i++) {
    elements.push(<Title text={inputText} i={i} style={{
      textStrokeColor: "black",
      textStrokeWidth: 2,
      color: "black" 
    }} key={i}></Title>);
  }
  return elements;
};

const FrontPage = () => {
  return (
    <div className="front-page">
      {/* <div className="background">
        <Background />
      </div> */}

      <animated.div className={"title"}>
        {generateTitle("Hi I'm Ellie", 10)}
      </animated.div>
    </div>
  );
};

export default FrontPage;
