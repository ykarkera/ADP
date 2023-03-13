import "./styles.css";
import { Rectangle } from "draw-shape-reactjs";

console.log("Heya");

function App() {
  return (
    <div className="App">
      <div
        style={{
          left: "50px",
          height: "100vh",
          width: "50vw",
          position: "fixed"
        }}
      >
        <Rectangle corner={[0, 0]} height={500} width={500} color="gray" />
        <Rectangle corner={[20, 20]} height={80} width={460} color="gray" />
        <Rectangle corner={[20, 110]} height={80} width={460} color="gray" />
        <Rectangle corner={[20, 200]} height={80} width={460} color="gray" />
        <Rectangle corner={[20, 290]} height={185} width={460} color="gray" />
        <Rectangle corner={[50, 345]} height={80} width={400} color="gray" />
      </div>
    </div>
  );
}

export default App;
