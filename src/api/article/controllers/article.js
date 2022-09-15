'use strict';
const { sa } = require('@strapi/strapi');

/**
 * article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article', ({ strapi }) => ({
  async create(ctx) {
    const user = ctx.state.user
    const userDb = await strapi.db.query('api::article.article').findOne({ id: 1 }).select(['user_id'])
    console.log(userDb);
    // let { isp } = await strapi.query('user', 'users-permissions').findOne({ id: ctx.state.user.id });
    // ctx.state.user.isp = isp;
    let entity;
    entity = await super.create(ctx);
    return entity;
  }
}));
