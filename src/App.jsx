import { Navbar, Welcome, Dock } from "@components"
import gsap from "gsap";
import { Draggable } from "gsap/Draggable"
import Terminal from "./windows/Terminal";
import Safari from "./windows/Safari";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>
      <Terminal/>
      <Safari/>
    </main>
  )
}
export default App