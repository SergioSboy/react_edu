import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Sculptural wall sconce',
          img: 'sconce-sculptural.jpg',
          desc: 'Illuminate your space with style using this elegant sculptural wall sconce.',
          category: 'lighting',
          price: '89.99'

        },
        {
          id: 2,
          title: 'Golden chandelier',
          img: 'chandelier-golden.jpg',
          desc: 'Add a touch of elegance to any room with this stunning chandelier.',
          category: 'lighting',
          price: '299.99'
        },

        {
          id: 3,
          title: 'Vintage rug',
          img: 'rug-vintage.jpg',
          desc: 'Bring a pop of color and pattern to your floors with this beautiful vintage rug.',
          category: 'rugs',
          price: '149.99'
        },

        {
          id: 4,
          title: 'Marble table',
          img: 'table-marble.jpg',
          desc: 'Create a luxurious dining experience with this sleek marble table.',
          category: 'tables',
          price: '799.99'
        },

        {
          id: 5,
          title: 'Floral wallpaper',
          img: 'wallpaper-floral.jpg',
          desc: 'Transform any room with this stunning floral wallpaper.',
          category: 'wall decor',
          price: '29.99 per roll'
        },

        {
          id: 6,
          title: 'Copper vase',
          img: 'vase-copper.jpg',
          desc: 'Add a touch of warmth and sophistication with this copper vase.',
          category: 'decorative accents',
          price: '39.99'
        },

        {
          id: 7,
          title: 'Velvet curtains',
          img: 'curtains-velvet.jpg',
          desc: 'Elevate your windows with these luxurious velvet curtains.',
          category: 'window treatments',
          price: '79.99'
        },

        {
          id: 8,
          title: 'Antique mirror',
          img: 'mirror-antique.jpg',
          desc: 'Make a statement with this beautiful antique mirror.',
          category: 'mirrors',
          price: '129.99'
        },

        {
          id: 9,
          title: 'Rattan basket',
          img: 'basket-rattan.jpg',
          desc: 'Stay organized in style with this chic rattan basket.',
          category: 'storage',
          price: '19.99'
        },

        {
          id: 10,
          title: 'Geometric wall art',
          img: 'art-geometric.jpg',
          desc: 'Add a modern touch to your walls with this eye-catching geometric wall art.',
          category: 'artwork',
          price: '59.99'
        },
        {
          id: 11,
          title: 'Bohemian throw pillow',
          img: 'pillow-bohemian.jpg',
          desc: 'Add a boho vibe to your living space with this colorful and textured throw pillow.',
          category: 'decorative accents',
          price: '24.99'
        },
        {
          id: 12,
          title: 'Industrial coffee table',
          img: 'table-industrial.jpg',
          desc: 'Bring a touch of urban chic to your living room with this industrial-style coffee table.',
          category: 'tables',
          price: '199.99'
        }


      ]
    }
  }
  render(){
  return (
    <div className="wrapper">
      <Header/>
      <Items items = {this.state.items}/>
      <Footer/>
    </div>
  );
  }
}

export default App;
