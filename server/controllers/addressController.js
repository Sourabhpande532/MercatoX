const Address = require("../model/Address");

exports.getUserAddress = async (req, res) => {
  try {
    const userId = req.query.userId || "default";
    const address = await Address.find({ userId });
    if (address.length !== 0) {
      res.status(200).json({
        success: true,
        message: "Fetch Addressed successfully",
        data: { address },
      });
    } else {
      res.status(404).json({ success: false, message: "Address not found" });
    }
  } catch (error) {
    console.error(error.message);
  }
};

const createUserAddress = async (payload) => {
  try {
    const address = new Address(payload);
    const savedAddress = address.save();
    return savedAddress;
  } catch (error) {
    console.error(error.message);
  }
};
exports.createAddress = async (req, res) => {
  try {
    const payload = req.body;
    const { userId = "default", name, phone } = payload;
    if (!name || !phone) {
      return res.json({ success: false, message: "Missing required fields." });
    }
    await createUserAddress({ ...payload, userId });
    const address = await Address.find({ userId });
    return res.status(200).json({
      success: true,
      message: "Address added successfully",
      data: { address },
    });
  } catch (error) {
    console.error("Failed to add address", error.message);
    return res.status(500).json({
      success: false,
      message: "Server error/address",
      error: error.message,
    });
  }
};

exports.updateAddress = async (req, res) => {
  try {
    const address = await Address.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!address)
      return res
        .status(404)
        .json({ success: false, message: "Address not found." });
    return res.status(200).json({
      success: true,
      message: "Address updated successfully",
      data: { address },
    });
  } catch (error) {
    console.error("Error updating address:", error.message);
    return res
      .status(500)
      .json({ success: false, message: "Failed to update address!" });
  }
};

exports.deleteAddress = async (req, res) => {
  try {
    const address = await Address.findByIdAndDelete(req.params.id);
    if (!address) {
      return res.status({
        success: false,
        message: "Address not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Address deleted successful",
      data: { address },
    });
  } catch (error) {
    console.error("Failed to delete address error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to delete address",
      error: error.message,
    });
  }
};
