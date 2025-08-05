function health() {
  return {
    alive: true,
  }
}

function handler(req, res) {
  if (req.method === 'GET') {
    const result = health();
    res.status(200).json(result)
  }
}

export default handler;