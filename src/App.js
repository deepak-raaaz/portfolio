import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <RootLayout>
      <AnimatedCursor
       innerSize={8}
       outerSize={35}
       innerScale={1}
       outerScale={2}
       outerAlpha={0}
       hasBlendMode={true}
       innerStyle={{
         backgroundColor: '#fff'
       }}
       outerStyle={{
         border: '3px solid #fff',
         boxShadow: '0 0 10px #fff',
       }}
       />
      <Home/>
    </RootLayout>
  );
}

export default App;
