import { Button } from "./components/ui/button";
import Header from "./components/header";
function App() {
  return (
    <>
      <div className="">
        <Header />
        <div>
          <h1>Hello, World!</h1>
          <p>This is a simple React application.</p>
          <Button variant={"destructive"}>hi</Button>
        </div>
      </div>
    </>
  );
}

export default App;
