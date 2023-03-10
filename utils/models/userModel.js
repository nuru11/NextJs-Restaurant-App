import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: {type: String},
        email: {type: String, required: true},
        password: {type: String, required: true},
        isAdmin: {type: Boolean, default: false},
        image: {type: String, default: "nn"}
    },
    {
        timestamps: true,
      }
)

const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User
