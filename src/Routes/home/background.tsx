import {useState} from 'react';
import { Stage, Layer, Circle, Rect } from "react-konva";


const createRandomShapes = () => {
  
}

const Background = () => {

  const [size, setSize] = useState({w:1000, h:1000});

  return (  
    <Stage width={size.w} height={size.h}>
      <Layer>
        <Rect width={window.innerWidth} height={window.innerHeight} fill="white"/>
        <Circle width={10} height={10} x={50} y={50} fill="FFF" />
      </Layer>
    </Stage>
  );
};

export default Background;
