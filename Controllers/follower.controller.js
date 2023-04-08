const followerModel = require("../Models/follower.model");

exports.getFollower = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 10;
  const skip = (page - 1) * limit;

  try {
    const followers = await followerModel.find().skip(skip).limit(limit);
    const totalFollowers = await followerModel.countDocuments();

    const totalPages = Math.ceil(totalFollowers / limit);
    const nextPage = page < totalPages ? page + 1 : null;
    const prevPage = page > 1 ? page - 1 : null;

    res.json({
      followers,
      currentPage: page,
      totalPages,
      nextPage,
      prevPage,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};
