import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import ListarCategoria from './components/categoria/listCategoria/ListarCategoria'
import DeleteCategoria from './components/categoria/deleteCategoria/DeleteCategoria'
import FormCategoria from './components/categoria/formCategoria/FormCategoria'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
    <>

      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <div className='min-h-[84vh]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categorias" element={<ListarCategoria />} />
            <Route path="/cadastrarCategoria" element={<FormCategoria />} />
            <Route path="/atualizarCategoria/:id" element={<FormCategoria />} />
            <Route path="/deleteCategoria/:id" element={<DeleteCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
