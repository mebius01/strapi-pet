'use strict';
const { sa } = require('@strapi/strapi');

/**
 * article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article', ({ strapi }) => ({
  async create(ctx) {
    let entity;
    entity = await super.create(ctx);
    return entity;
  }
}));
