import JWT from "jsonwebtoken";

export default async function authorize(authtoken) {
  try {
    const id = await JWT.verify(authtoken, process.env.JWT_STRING).id;
    return id && id;
  } catch (error) {
    console.log("Not Authorized");
    return "Not Authorized";
  }
}
