import {Canvas} from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Loader } from "@react-three/drei";
import { UI } from "./components/UI";
import { Leva } from "leva";

function App() {
  return (
    <>
    <Loader />
    <Leva hidden />
    <UI />
    <Canvas shadows camera={{ position: [0, 0, 1], fov: 30 }}>
      <Experience />
    </Canvas>
    </>
  )
}

export default App;
