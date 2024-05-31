import './App.css'
import Form from './components/Form';
import ColorList from './components/ColorList'
import Values from 'values.js'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Footer from './components/Footer';

function App() {
  const [colors, setColors] = useState(new Values('#168efe').all(10));
  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors)
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <>
      <main>
        <Form addColor={addColor} />
        <ColorList colors={colors} />
        <ToastContainer />
      </main>
      <Footer />
    </>
  );
}

export default App
