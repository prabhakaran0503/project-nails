
import './App.css';
import Home from './main/Home/Home';
import Header from './main/Header/Header'


const data=[
  {
    img:"https://nailsnbeyond.in/wp-content/uploads/2024/04/Glitter-Inbuilt.png",
    name: "Cartoon Comic" ,
  },
  {
    img:"https://nailsnbeyond.in/wp-content/uploads/2024/04/Line-Art.png",
    name: "Line Art" ,
  },
  {
    img:"https://nailsnbeyond.in/wp-content/uploads/2024/04/Burberry-Plaid.png",
    name: "Burberry Pliad" ,
  },
  {
    img:"https://nailsnbeyond.in/wp-content/uploads/2024/04/Holographic-Art.png",
    name: "Holographic" ,
  },
  {
    img:"https://nailsnbeyond.in/wp-content/uploads/2024/04/Summer-Inspired.png",
    name: "Summer Inspired" ,
  },
  {
    img:"https://nailsnbeyond.in/wp-content/uploads/2024/04/Teal-blue.png",
    name: "Teal blue" ,
  },
  {
    img:"https://nailsnbeyond.in/wp-content/uploads/2024/04/Vanilla-White.png",
    name: "Vanilla White" ,
  },
  {
    img:"https://nailsnbeyond.in/wp-content/uploads/2024/03/Sunset-Orange.png",
    name: "Sunset Orange" ,
  },
  {
    img:"https://nailsnbeyond.in/wp-content/uploads/2024/04/Glitter-Inbuilt.png",
    name: "Glitter Inbuilt" ,
  },
]

function App() {
  return (
    <div>
      
        <Header />
        <Home  trendingData={data}/>
        
    </div>
  );
}

export default App;

