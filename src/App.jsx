
import './App.css'
import Banner from './Components/Banner/Banner'
import Coffee_Cards from './Components/Coffe_Cards/Coffee_Cards'
import Footer from './Components/Footer/Footer'
import My_cart from './Components/My_cart/My_cart'
import Navbar from './Components/Navbar/Navbar'

function App() {
 

  return (
    <>
     
      {/* <h1>Vite + React</h1> */}

      <div className='max-w-7xl mx-auto'>
    
    <Navbar></Navbar>

    <Banner></Banner>


    <h1 
     
     className='text-center text-4xl font-bold text-amber-700 mb-5 
      underline underline-offset-8 ...
     '
    
    >  Our Recipes </h1>

    <p className='w-2/3 text-center font-semibold
    ml-20 
    mb-5
    md:ml-60 mb-5 lg:ml-60 mb-8'>Our coffee menu offers a variety of delicious options, from the strong and bold Espresso to the creamy and smooth Latte.Enjoy the rich flavors and perfect blends crafted just for you.</p>


    <div className='md:flex max-w-7xl mx-auto gap-2 '>

    <Coffee_Cards className='w-2/3'></Coffee_Cards>

   <My_cart className='w-1/3 ml-5 pl-5 '></My_cart>

    </div>
    
    <Footer className='mt-4' ></Footer>

      </div>
     
    </>
  )
}

export default App
