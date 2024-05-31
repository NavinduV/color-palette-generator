import { toast } from "react-toastify";

const SingleColor = ({index, color}) => {
  const {hex, weight} = color;
  const saveToClipboard = async() => {
    if(navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`)
        toast.success('Color copied to clipboard.')
      } catch (error) {
        toast.error('Unable to copy the color.')
      }
    } else {
      toast.error('Clipboard Access unavailable!')
    }
  }
  return (
    
    <article onClick={saveToClipboard} className={index > 10 ? 'color color-white' : 'color text-black'} style={{ background: `#${hex}` }}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
}

export default SingleColor