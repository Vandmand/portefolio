const generateStrokeEffect = (inputText: string, n: number) => {
  const strokes : JSX.Element[] = []
  for (let i = 0; i < n; i++) {
    strokes.push(
      <h1 className="display stroke"></h1>
     )
    
  }
}

const FrontPage = () => {

  return (
    <div className="title">
      <h1 className="display">Ellie</h1>
    </div>
  );
};

export default FrontPage;
