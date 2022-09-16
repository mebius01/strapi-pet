'use strict';

/**
 * article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article', ({ strapi }) => ({
  async create(ctx) {
    let entity;
    console.log(ctx.request.body.data);
    ctx.request.body.data.user = ctx.state.user;
    console.log(ctx.request.body.data);
    entity = await super.create(ctx);
    return entity;
  }
}));
