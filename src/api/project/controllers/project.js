// @ts-nocheck
"use strict";

/**
 * project controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::project.project", ({ strapi }) => ({
  async find(ctx) {
    await this.validateQuery(ctx);

    ctx.query = {
      pagination: {
        page: ctx.query.page || "1",
        pageSize: ctx.query.limit || "25",
        withCount: true,
      },
      sort: [ctx.query.sort || "title"],
      populate: {
        pages: {
          sort: ["name"],
        },
      },
    };

    const result = await super.find(ctx);

    return result;
  },
  async findOne(ctx) {
    await this.validateQuery(ctx);

    ctx.query = {
      populate: {
        pages: {
          sort: ["name"],
        },
      },
    };

    const result = await super.findOne(ctx);

    return result;
  },
}));
