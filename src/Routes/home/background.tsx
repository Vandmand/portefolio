import { Stage, Layer, Circle, Rect } from "react-konva";

const Background = () => {
  return (
    <Stage width={100} height={100}>
      <Layer>
        <Rect width={window.innerWidth} height={window.innerHeight} fill="white"/>
        <Circle width={10} height={10} x={50} y={50} fill="FFF" />
      </Layer>
    </Stage>
  );
};

export default Background;
