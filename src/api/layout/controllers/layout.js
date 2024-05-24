// @ts-nocheck
"use strict";

/**
 * layout controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::layout.layout", ({ strapi }) => ({
  async find(ctx) {
    await this.validateQuery(ctx);

    ctx.query = {
      ...ctx.query,
      populate: {
        header: {
          populate: ["title", "nav_links", "logo"],
        },
        footer: {
          populate: ["nav_links"],
        },
        seo: {
          populate: ["seo_metadata"],
        },
      },
    };

    return await super.find(ctx);
  },
}));
