/** @jsxImportSource frog/jsx */

import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/next'
import { serveStatic } from 'frog/serve-static'

const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
})

// Uncomment to use Edge Runtime
// export const runtime = 'edge'

app.frame('/', (c) => {
  const { buttonValue, inputText, status } = c
  const fruit = inputText || buttonValue
  return c.res({
    image: (
      <div
        style={{
          alignItems: 'center',
          background:
            status === 'response'
              ? 'linear-gradient(to right, #432889, #17101F)'
              : 'black',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <div
          style={{
            color: 'white',
            fontSize: 60,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          {status === 'response'
            ? `Nice choice.${fruit ? ` ${fruit.toUpperCase()}!!` : ''}`
            : 'Welcome!'}
        </div>
      </div>
    ),
    intents: [
      <TextInput placeholder="Enter custom fruit..." />,
      <Button value="apples">Apples</Button>,
      <Button value="oranges">Oranges</Button>,
      <Button value="bananas">Bananas</Button>,
      status === 'response' && <Button.Reset>Reset</Button.Reset>,
    ],
  })
})
app.frame('/trx/:hash', async (c) => {
  const { hash } = c.req.param();

  // Fetch transaction details using the provided hash
  const response = await fetch(`https://sepolia.explorer.mode.network/api/v2/transactions/${hash}`);
  if (!response.ok) {
    // Return an error message or image
    return c.res({
      image: 'https://img.freepik.com/free-psd/3d-rendering-ui-icon_23-2149182289.jpg?w=1380&t=st=1712820858~exp=1712821458~hmac=a40ebfce8a9435e8d31e1e5c4d75c2209ec87c53f7deadd8c42e84b0a8c17c96',
    });
  }
  const transaction = await response.json();

  
  return c.res({
    image: (
      <div style={{ color: 'white', display: 'flex', flexDirection: 'column', fontSize: '20px', padding: '20px', justifyContent: 'center', alignItems: 'center' }}>
        <div>Transaction Hash: {transaction.hash}</div>
        <div>Status: {transaction.status}</div>
        <div>Gas Used: {transaction.gas_used}</div>
  
      </div>
    ),
   
   
  });
});
devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)

// NOTE: That if you are using the devtools and enable Edge Runtime, you will need to copy the devtools
// static assets to the public folder. You can do this by adding a script to your package.json:
// ```json
// {
//   scripts: {
//     "copy-static": "cp -r ./node_modules/frog/_lib/ui/.frog ./public/.frog"
//   }
// }
// ```
// Next, you'll want to set up the devtools to use the correct assets path:
// ```ts
// devtools(app, { assetsPath: '/.frog' })
// ```
