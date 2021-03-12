exports.GetAllCostumer = (req, res, next) => {
  res.json({
    message: "Data Berhasil Diambil !!",
    data: [
      {
        no: 1,
        name: "Syahrizal alisadikn",
        umur: 18,
      },
      {
        no: 2,
        name: "Syahrizal ganteng",
        umur: 20,
      },
    ],
  });
};

exports.CreateCustomer = (req, res, next) => {
  console.log("req Body", req.body);
  const name = req.body.name;
  const pekerjaan = req.body.pekerjaan;
  res.json({
    message: "Data Berhasil Disimpan !!",
    data: {
      no: 1,
      name,
      pekerjaan,
    },
  });
};
