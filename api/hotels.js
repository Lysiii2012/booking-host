import data from '../db.json';

export default function handler(req, res) {
  const { hotels } = data;
  res.status(200).json(hotels);
}