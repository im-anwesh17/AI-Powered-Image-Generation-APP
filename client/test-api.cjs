const fetch = require('node-fetch');

async function test() {
  try {
    const res = await fetch('https://ai-powered-image-generation-app.onrender.com/api/v1/dalle', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: 'a blue cat with eagle wings' })
    });
    const text = await res.text();
    console.log('STATUS:', res.status);
    console.log('BODY:', text);
  } catch(e) {
    console.error(e);
  }
}
test();
