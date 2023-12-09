import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import MyCard from "./components/MyCard";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Header title="ADOPTA UN PERRITO"></Header>
      <div className="hero">
        <MyCard
          image="https://cdn.pixabay.com/photo/2016/05/09/10/42/weimaraner-1381186_1280.jpg"
          title="Nala"
          description="Le encanta jugar y pasear por los parques"
          text="Weimaran"
          backColor="primary"
        ></MyCard>
        <MyCard
          image="https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_640.jpg"
          title="Simba"
          description="El rey de la selva y de las croquetas"
          text="Labrador"
          backColor='danger'
        ></MyCard>
        <MyCard
          image="https://cdn.pixabay.com/photo/2015/11/17/13/13/puppy-1047521_1280.jpg"
          title="Flor"
          description="Muy regalona y siempre lista para hacer travesuras"
          text="Bull Dog"
          backColor="success"
        ></MyCard>
        <MyCard
          image="https://cdn.pixabay.com/photo/2019/08/07/14/11/dog-4390885_1280.jpg"
          title="Rex"
          description="Tranquilo y siempre atento a su entorno"
          text="Golden"
          backColor='info'
        ></MyCard>
        <MyCard
          image="https://cdn.pixabay.com/photo/2015/11/03/12/58/dalmatian-1020790_1280.jpg"
          title="Loki"
          description="Revoltoso y curioso, esta en todos lados"
          text="Dalmata"
          backColor="dark"
        ></MyCard>

      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
