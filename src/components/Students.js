const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgresql://postgres:YOUR_PASSWORD@db.ojdgnxdlbohujvulpuao.supabase.co:5432/postgres',
  ssl: { rejectUnauthorized: false } // Supabase requires SSL
});

client.connect()
  .then(() => console.log('Connected to Supabase DB'))
  .catch(err => console.error('Connection error', err.stack));

// Example query
client.query('SELECT * FROM students', (err, res) => {
  if (err) throw err;
  console.log(res.rows);
  client.end();
});
