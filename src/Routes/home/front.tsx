import Typography from '@mui/material/Typography'
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
    <Typography variant="h1" color="primary">Hi i'm ellie</Typography>
  )
};

export default FrontPage;
