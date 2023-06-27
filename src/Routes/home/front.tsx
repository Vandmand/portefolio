import Typography from '@mui/material/Typography'
import Background from './background'

// Unused code
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
    <div className="front-page">
<div className="background">
    <Background />
    </div>
    
    <Typography variant="h1" color="primary">Hi i'm ellie</Typography>
    </div>
    
    
  )
};

export default FrontPage;
