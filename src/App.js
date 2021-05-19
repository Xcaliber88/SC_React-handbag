import React from 'react';
import './App.css';
import Button from "./Button";
import bag_1 from "./assets/bag_1.png";
import bag_2 from "./assets/bag_2.png";
import bag_3 from "./assets/bag_3.png";
import bag_4 from "./assets/bag_4.png";
import brand from "./assets/brand.png";
import our_story from "./assets/our_story.png";
import Product from "./Product";
import Tile from "./Tile";

function App() {
  return (
      <>
        <h1>Handbags & Purses</h1>
        <nav>
          <Button text="to the collection"/>
          <Button text="shop all bags"/>
          <Button text="pre-order" mode="true"/>
        </nav>

        <main>

          {/*bag01*/}

          <Product
              label=" Best seller "
              image={bag_1}
              productName=" The handy bag "
              price="€400,-"
          />

          {/*bag02*/}

          <Product
              label=" Best seller "
              image={bag_2}
              productName=" The stylish bag "
              price="€250,-"
          />

          {/*bag03*/}

          <Product
              label=" New collection "
              image={bag_3}
              productName=" The simple bag "
              price="€300,-"
          />

          {/*bag04*/}

          <Product
              label=" New collection "
              image={bag_4}
              productName=" The trendy bag "
              price="€150,-"
          />

        </main>

        <footer>

          {/*Tile 01 - Upper left tile*/}

          <Tile
              title="The brand"
          >
            <p> "Lorem ipsum dolor sit amet, consectetur adipisicing elit. omnis pe tempora voluptatibus.
              Facilis,
              iusto tenetur? Ullam?
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. "</p>

            <p> "Lorem ipsum dolor sit amet, consectetur adipisicing elit. omnis pe tempora voluptatibus.
              Facilis, iusto tenetur? Ullam?
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. "</p>

          </Tile>


          {/*Tile 01 - upper right tile*/}

          <Tile
              image={brand}
          />

          {/*Tile 03 - lower left tile*/}

          <Tile
              image={our_story}
          />

          {/*Tile 04 - Lower right tile*/}

          <Tile
              title="Our story"
          >
            <p> description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cumque debitis
              deleniti eligendi, excepturi numquam omnis possimus praesentium quae quidem, quod ratione rem
              saepe tempora voluptatibus. Facilis, iusto tenetur? Ullam? "
            </p>

          </Tile>

        </footer>
      </>
  )
      ;
}

export default App;





