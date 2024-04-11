"use client"
import { useState } from 'react';

export default function Home() {
  const [txHash, setTxHash] = useState('');
  const [accountAddress, setAccountAddress] = useState('');
  const [generatedUrl, setGeneratedUrl] = useState('');

  const handleTxSubmit = () => {
    const frameUrl = `https://mode-frame.vercel.app/api/trx/${txHash}`;
    setGeneratedUrl(frameUrl);
    navigator.clipboard.writeText(frameUrl);
  };

  const handleAccountSubmit = () => {
    const frameUrl = `https://mode-frame.vercel.app/api/account/${accountAddress}`;
    setGeneratedUrl(frameUrl);
    navigator.clipboard.writeText(frameUrl);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#FFF9C4',color:"black" }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center' }}>
        Mode Frames Generator (Mainnet)
      </h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '100%', maxWidth: '800px', padding: '1rem' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '10px', padding: '1.5rem', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>TX Details</h2>
          <input
            type="text"
            placeholder="Enter TX Hash"
            style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc' ,backgroundColor:"white",color:"black" }}
            value={txHash}
            onChange={(e) => setTxHash(e.target.value)}
          />
          <button
            style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}
            onClick={handleTxSubmit}
          >
            Generate Frame URL
          </button>
        </div>

        <div style={{ backgroundColor: 'white', borderRadius: '10px', padding: '1.5rem', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Account Details</h2>
          <input
            type="text"
            placeholder="Enter Account Address"
            style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem', borderRadius: '5px', border: '1px solid #ccc',backgroundColor:"white",color:"black" }}
            value={accountAddress}
            onChange={(e) => setAccountAddress(e.target.value)}
          />
          <button
            style={{ width: '100%', padding: '0.5rem', borderRadius: '5px', backgroundColor: '#4CAF50', color: 'white', border: 'none', cursor: 'pointer' }}
            onClick={handleAccountSubmit}
          >
            Generate Frame URL
          </button>
        </div>
        {generatedUrl && (
            <>
  <div style={{ 
    display: 'flex', 
    alignItems: 'center', 
    backgroundColor: 'white', 
    borderRadius: '10px', 
    padding: '1rem', 
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', 
    gap: '10px', 
    maxWidth: '100%', 
    overflow: 'hidden' ,
    height: "100px"

  }}>
     <img 
  src="https://uxwing.com/wp-content/themes/uxwing/download/file-and-folder-type/copy-icon.png" 
  alt="Copy" 
  style={{ 
    width: '24px', 
    height: '24px', 
    cursor: 'pointer' 
  }} 
  onClick={() => navigator.clipboard.writeText(generatedUrl)} 
/>
    <p style={{ 
      margin: '0', 
      whiteSpace: 'normal', 
      overflowWrap: 'normal'
      
    }}>
      {generatedUrl}
    </p>
    
  </div>
 
</>
)}


      </div>
    </div>
  );
}
