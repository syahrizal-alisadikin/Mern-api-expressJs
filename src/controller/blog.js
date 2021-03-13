const { validationResult } = require("express-validator");

exports.blog = (req, res, next) => {
  const title = req.body.title;
  const image = req.body.image;
  const desc = req.body.desc;

  const error = validationResult(req);

  if (!error.isEmpty()) {
    const err = new Error("Value Failed");
    err.status = 400;
    err.data = error.array();
    throw err;
  }
  const result = {
    message: "Data Berhasil disimpan",
    data: {
      id: 1,
      title,
      image,
      desc,
    },
  };

  res.status(200).json(result);
};
