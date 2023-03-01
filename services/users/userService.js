const bcrypt = require('bcryptjs');
const User = require('../../models/User');


const createUser = async (body) => {
  // hash for the password with bcrypt
  const salt = await bcrypt.genSalt(12);
  const password = await bcrypt.hash(body.password, salt)
  const user = new User({ ...body, password: password })
  return await saveUser(user)
}

const saveUser = async (user) => {
  const newUserResponse = await user.save()
  return newUserResponse;
}

const emailExist = async (body) => {
  return await User.findOne(
    {
      email: body.email
    }
  )
}
const updateUser = async (body, id) => {
  console.log(await updatedUser(body))
  return await User.findOneAndUpdate({ _id:id }, await updatedUser(body), { new: true } )
}
const updatedUser = async (body) => {
  if (body.password) {
    const salt = await bcrypt.genSalt(12);
    const password = await bcrypt.hash(body.password, salt)
    return ({ ...body, password: password })
  } else {
    return (body)
  }
}

module.exports = { createUser, emailExist, updateUser }