const axios = require('axios');
const Dev = require('../models/dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
const { findConnections, sendMessage } = require('../webSocket');

module.exports = {
  async index(request, response) {
    const devs = await Dev.find();
    return response.json(devs);
  },

  async store(request, response) {
    const { git_user, techs, latitude, longitude } = request.body;
    let dev = await Dev.findOne({ git_user });
    if (!dev) {
      const apiResponse = await axios.get(`https://api.github.com/users/${git_user}`);
      const { name = login, avatar_url, bio } = apiResponse.data;
      const techArray = parseStringAsArray(techs);
      const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
      }
      dev = await Dev.create({
        git_user,
        name,
        avatar_url,
        bio,
        techs: techArray,
        location
      })
      const sendSocketMessage = findConnections(
        { latitude, longitude }, techArray,
      );
      sendMessage(sendSocketMessage, 'new-dev', dev);
    }
    return response.json(dev);
  },

  async destroy(request, response) {
    await Dev.findOneAndRemove(request.query.git_user);
    return response.json({ message: "removed" });
  }
};
