import data from '../db.json';

export default function handler(req, res) {
  const { destination } = data;
  res.status(200).json(destination);
}