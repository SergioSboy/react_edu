import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
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
          category: 'decorative accents',
          price: '29.99'
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
          category: 'decorative accents',
          price: '79.99'
        },

        {
          id: 8,
          title: 'Antique mirror',
          img: 'mirror-antique.jpg',
          desc: 'Make a statement with this beautiful antique mirror.',
          category: 'rugs',
          price: '129.99'
        },

        {
          id: 9,
          title: 'Rattan basket',
          img: 'basket-rattan.jpg',
          desc: 'Stay organized in style with this chic rattan basket.',
          category: 'decorative accents',
          price: '19.99'
        },

        {
          id: 10,
          title: 'Geometric wall art',
          img: 'art-geometric.jpg',
          desc: 'Add a modern touch to your walls with this eye-catching geometric wall art.',
          category: 'decorative accents',
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
    this.state.currentItems =this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }
  render(){
  return (
    <div className="wrapper">
      <Header orders = {this.state.orders} onDelete = {this.deleteOrder}/>
      <Categories chooseCategory={this.chooseCategory}/>
      <Items items = {this.state.currentItems} onAdd = {this.addToOrder}/>
      <Footer/>
    </div>
  );
  }
  chooseCategory(category){
    if (category==='all'){
      this.setState({currentItems: this.state.items})
      return

    }
    this.setState({
      currentItems: this.state.items.filter(el=> el.category === category)
    })
  }
  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }
  addToOrder(item){
    let isInArr = false
    this.state.orders.forEach( el => {
      if(el.id === item.id)
        isInArr = true
    })
    if (!isInArr)
      this.setState({ orders: [...this.state.orders, item]})
  }
}

export default App;
