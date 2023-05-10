import React from 'react';
import './App.css';
import Button from "../../frontend-react-handbags-inleveren/src/components/Button.js";
import Product from "../../frontend-react-handbags-inleveren/src/components/Product";
import Tile from "../../frontend-react-handbags-inleveren/src/components/Tile";
import bag1 from "./assets/bag_1.png";
import bag2 from "./assets/bag_2.png";
import bag3 from "./assets/bag_3.png";
import bag4 from "./assets/bag_4.png";
import brand from "./assets/brand.png";
import story from "./assets/our_story.png";

function App() {
  return (
      <>
        <h1>Handbags & Purses</h1>
        <nav>
          <Button
              buttonType="button"
              isDisabled={false}
              clickHandler={() => console.log("To the collection")}
          >
            To the collection.
          </Button>
          <Button
              buttonType="button"
              isDisabled={false}
              clickHandler={() => console.log("Shop all bags")}
          >
            Shop all bags.
          </Button>
          <Button
              buttonType="button"
              isDisabled={true}
              clickHandler={() => console.log("Pre-orders")}
          >
            Pre-orders.
          </Button>
        </nav>
        <main>
          <Product
              label="Best seller"
              img={bag1}
              title="The handy bag."
              price="400"
          ></Product>
          <Product
              label="Best seller"
              img={bag2}
              title="The stylish bag."
              price="250"
          ></Product>
          <Product
              label="Best seller"
              img={bag3}
              title="The simple bag."
              price="300"
          ></Product>
          <Product
              label="Best seller"
              img={bag4}
              title="The trendy bag."
              price="150"
          ></Product>
        </main>
        <footer>
          <Tile
              title="The Brand"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, incidunt.
          </Tile>
          <Tile
              img={brand}
              imgDescription="The Brand">
          </Tile>
          <Tile
              img={story}
              imgDescription="Our Story">
          </Tile>
          <Tile
              title="Our Story"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, incidunt.
          </Tile>
        </footer>
      </>
  );
}

export default App;



