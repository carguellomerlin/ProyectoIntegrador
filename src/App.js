import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuNav from './components/MenuNav'
import ListaGridItems from './components/ListaGridItems'
import ListaListItem from './components/ListaListItem'
import Detalle from './components/Detalle'
import Contenido from './components/Contenidos'

const peliculas  = [
  {
    title: "Thor: Ragnarok 1",
    date: 'October 25, 2017',
    descripcion: "1- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis consequuntur corporis distinctio doloremque, eum expedita id in ipsam minus modi molestias optio perferendis quam quas repudiandae sint. Suscipit, veritatis!",
    imgSrc:"https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg"
  },
  {
    title: "Thor: Ragnarok 2",
    date: 'October 25, 2017',
    descripcion: "2- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis consequuntur corporis distinctio doloremque, eum expedita id in ipsam minus modi molestias optio perferendis quam quas repudiandae sint. Suscipit, veritatis!",
    imgSrc:"https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg"
  },
  {
    title: "Thor: Ragnarok 3",
    date: 'October 25, 2017',
    descripcion: "3- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis consequuntur corporis distinctio doloremque, eum expedita id in ipsam minus modi molestias optio perferendis quam quas repudiandae sint. Suscipit, veritatis!",
    imgSrc:"https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg"
  },
  {
    title: "Thor: Ragnarok 4",
    date: 'October 25, 2017',
    descripcion: "4- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis consequuntur corporis distinctio doloremque, eum expedita id in ipsam minus modi molestias optio perferendis quam quas repudiandae sint. Suscipit, veritatis!",
    imgSrc:"https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg"
  },
  {
    title: "Thor: Ragnarok 5",
    date: 'October 25, 2017',
    descripcion: "5- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis consequuntur corporis distinctio doloremque, eum expedita id in ipsam minus modi molestias optio perferendis quam quas repudiandae sint. Suscipit, veritatis!",
    imgSrc:"https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg"
  },
  {
    title: "Thor: Ragnarok 6",
    date: 'October 25, 2017',
    descripcion: "6- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam blanditiis consequuntur corporis distinctio doloremque, eum expedita id in ipsam minus modi molestias optio perferendis quam quas repudiandae sint. Suscipit, veritatis!",
    imgSrc:"https://image.tmdb.org/t/p/w370_and_h556_bestv2/oSLd5GYGsiGgzDPKTwQh7wamO8t.jpg"
  },

]



class App extends Component {


  constructor(props) {
    super(props)
    this.state = {
      misPeliculas: peliculas
    }
  }

  handleOnClickRemove = gridItem => event => {}

  handleOnClickView = gridItem => event => {}

  render() {
    return (
      <div className="App">

        <MenuNav/>
        <Contenido/>


        <div className="py-5 bg-light">
          <div className="container">

            <section className="items-section">
              <h5 className="items-section-title">Mi Lista <a href="">Ver todas</a></h5>
              <div className="items-section-body">
                <div className="row">
                  <ListaGridItems items={this.state.misPeliculas}
                  onClickRemove={this.handleOnClickRemove}   onClickView={this.handleOnClickView}
                  />
                </div>
              </div>
            </section>

            <section className="items-section">
                 <div className="items-section-body">
                     <div className="row">
                         <ListaListItem items={this.state.misPeliculas}
                         onClickRemove={this.handleOnClickRemove}   onClickView={this.handleOnClickView}
                         />
                     </div>
                   </div>
           </section>

           <section class="detail-section">
               <div class="row">
                  <Detalle />
               </div>
           </section>

           </div>
         </div>

      </div>
    );
  }
}

export default App;
