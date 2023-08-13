import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <div className="App" style={{}}>
      <Header />
      <main
        style={{
          paddingTop: "80px",
          backgroundColor: "#282626",
          minHeight: "100vh",
        }}
      >
        <img
          src="/detail.png"
          width="100%"
          alt="detail"
          style={{ paddingBottom: "100px", backgroundColor: "white" }}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
