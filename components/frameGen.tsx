import React, { useState } from 'react';

const FrameGeneratorComponent = () => {
  const [txHash, setTxHash] = useState('');
  const [accountAddress, setAccountAddress] = useState('');

  const handleTxSubmit = () => {
    const frameUrl = `/trx/${txHash}`;
    navigator.clipboard.writeText(frameUrl);
    alert('Transaction frame URL copied to clipboard! Paste it in Warpcast to render the frame.');
  };

  const handleAccountSubmit = () => {
    const frameUrl = `/account/${accountAddress}`;
    navigator.clipboard.writeText(frameUrl);
    alert('Account frame URL copied to clipboard! Paste it in Warpcast to render the frame.');
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter TX Hash"
          value={txHash}
          onChange={(e) => setTxHash(e.target.value)}
        />
        <button onClick={handleTxSubmit}>Copy TX Frame URL</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter Account Address"
          value={accountAddress}
          onChange={(e) => setAccountAddress(e.target.value)}
        />
        <button onClick={handleAccountSubmit}>Copy Account Frame URL</button>
      </div>
    </div>
  );
};

export default FrameGeneratorComponent;
