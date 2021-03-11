exports.GetAllCostumer = (req, res, next) => {
  res.json({
    message: "Data Berhasil Diambil !!",
    data: {
      no: 1,
      name: "Syahrizal alisadikn",
      umur: 18,
    },
  });
};

exports.CreateCustomer = (req, res, next) => {
  res.json({
    message: "Data Berhasil Disimpan !!",
    data: {
      no: 1,
      name: "syahrizal",
    },
  });
};
