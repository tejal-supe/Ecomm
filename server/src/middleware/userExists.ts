import { userModel } from "../modals/userModal";

type UserPresent = {
  email?: string;
  googleId?: string;
  isGoogleSigned: boolean;
};

export const isUserPresent = async (values: UserPresent) => {
  const { email, googleId, isGoogleSigned } = values;
  if (isGoogleSigned) {
    const data = await userModel.findOne({ googleId });
    return data;
  } else {
    const data = await userModel
      .findOne({ email: email })
      .select("+authentication.password");
    return data;
  }
};

