export default function handler(req, res) {
  const body = req.body;
  res.status(200).json({
    data: [{
      name: `${body.name}`,
      email: `${body.email}`,
      address: `${body.email}`,
      phone: `${body.phone}`,
  }] })
}
