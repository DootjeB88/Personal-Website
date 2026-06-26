import { useState, useRef } from 'react';
import './App.css';

const BORDER_COLORS = ['#f97316', '#ef4444', '#3b82f6', '#22c55e', '#a855f7', '#000000'];

function App() {
  const [petName, setPetName] = useState('Smoothie');
  const [warning, setWarning] = useState('I jump up and will knock you over!');
  const [subtext, setSubtext] = useState('Please ring the bell instead of knocking.');
  const [borderColor, setBorderColor] = useState('#f97316');
  const [image, setImage] = useState(null);
  const fileRef = useRef();

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setImage(ev.target.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="app">
      <h1 className="title">🐾 Pet Warning Designer</h1>
      <div className="layout">

        {/* LEFT: Controls */}
        <div className="controls">
          <label>Pet Name</label>
          <input value={petName} onChange={e => setPetName(e.target.value)} placeholder="e.g. Smoothie" />

          <label>Warning Message</label>
          <textarea rows="3" value={warning} onChange={e => setWarning(e.target.value)} placeholder="e.g. I jump up!" />

          <label>Subtext</label>
          <input value={subtext} onChange={e => setSubtext(e.target.value)} placeholder="e.g. Please ring the bell" />

          <label>Border Color</label>
          <div className="color-picker">
            {BORDER_COLORS.map(color => (
              <div
                key={color}
                className={`color-dot ${borderColor === color ? 'selected' : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => setBorderColor(color)}
              />
            ))}
          </div>

          <label>Pet Photo</label>
          <button className="upload-btn" onClick={() => fileRef.current.click()}>
            📷 Upload Photo
          </button>
          <input type="file" accept="image/*" ref={fileRef} onChange={handleImage} style={{ display: 'none' }} />
        </div>

        {/* RIGHT: Preview */}
        <div className="preview-wrapper">
          <p className="preview-label">Live Preview</p>
          <div className="sign" style={{ borderColor }}>
            <div className="sign-header" style={{ backgroundColor: borderColor }}>
              ⚠️ WARNING ⚠️
            </div>
            {image ? (
              <img src={image} alt="pet" className="pet-photo" />
            ) : (
              <div className="pet-placeholder">🐶</div>
            )}
            <h2 className="pet-name">{petName || 'Your Pet'}</h2>
            <p className="warning-text">{warning || 'Warning message here'}</p>
            <p className="subtext">{subtext}</p>
            <div className="sign-footer" style={{ backgroundColor: borderColor }}>
              🐾 Beware of Pet 🐾
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;