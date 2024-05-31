import { useState } from "react"

const Form = ({addColor}) => {
    const [color, setColor] = useState('#168efe');
    const handleSubmit = (e) => {
        e.preventDefault();
        addColor(color)
    }
    return (
      <section className="header">
        <h4 className="container">Color Palette Generator</h4>
        <form className="color-form" onSubmit={handleSubmit}>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#168efe"
            style={{ border: `1px solid ${color}` }}
          />
          <button className="btn" type="submit" style={{ background: color }}>
            Generate
          </button>
        </form>
      </section>
    );
}

export default Form