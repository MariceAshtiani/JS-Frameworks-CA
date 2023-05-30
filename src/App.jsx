import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";

export default function App() {
  return (
    <div>
      <Header>
        <h1>eCom logo</h1>
      </Header>

      <main>
        <h2>Site Content</h2>
      </main>

      <Footer>
        Copyright {(new Date()).getFullYear()}
      </Footer>
    </div>
  )
}

