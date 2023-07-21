import { createRoot } from "react-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    Check out the tests! You can run them right here in codesandbox!
  </div>
);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
