export const checkRegistration = async (req, res, next) => {
  
    const now = new Date();
    const deadline = new Date("2025-12-18T23:59:59"); // 18dec
  console.log(now,deadline)
    if (now > deadline) {
      return res.status(403).json({
        message: "Registration is closed. The deadline has passed.",
      });
    }

    next();

};
