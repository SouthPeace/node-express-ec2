import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('A Monk in Cloud');
  res.end();
});

const PORT = 3000; // Use a higher port number
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});