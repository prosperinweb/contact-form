import { Footer, Header, Main } from "./containers";

function App() {
  return (
    <div className="flex flex-col justify-between h-screen ">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
