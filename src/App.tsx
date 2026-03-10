import Main from "./components/Main"
import Home from "./components/Home";
import { useChat } from "./hooks/useChat";

export default function App() {

  const {state} = useChat();

  return (
    <div>
      {state.consent && state.is18OrOlder ? <Main /> : <Home /> } 

    </div>
  )
}
