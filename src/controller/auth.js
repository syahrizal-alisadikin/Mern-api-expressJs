exports.register = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  const result = {
    message: "Register Berhasil ",
    data: {
      name,
      email,
    },
  };

  res.status(201).json(result);
};
