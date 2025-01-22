import Pocket from "./components/pocket/pocket";
import Highlights from "./components/spin/highlights";

export default function Home() {
  return (
    <div>
      <h2>Spin</h2>
      <Highlights></Highlights>
      <h2>Pocket</h2>
      <Pocket></Pocket>
    </div>
  );
}
