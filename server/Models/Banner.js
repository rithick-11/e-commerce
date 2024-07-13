import mongoose, { Types } from "mongoose";

const bannerSchema = mongoose.Schema(
  {
    title: String,
    subTitle: {
      type: String,
    },
    decs: { type: String },
    cardImg: { type: String, required: true },
    link:String
  },
  { timestamps: true }
);

const banner = mongoose.model("banner", bannerSchema);

export default banner
