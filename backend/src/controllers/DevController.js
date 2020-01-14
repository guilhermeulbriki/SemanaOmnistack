const axios = require('axios');
const Dev = require('../models/dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
  async index (request, response) {
    const devs = await Dev.find();
    return response.json(devs);
  },

  async store (request, response) {
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
      });
    }
    return response.json(dev);
  }
};
