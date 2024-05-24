// @ts-nocheck
"use strict";

/**
 * component-category controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::component-category.component-category",
  ({ strapi }) => ({
    async find(ctx) {
      await this.validateQuery(ctx);

      ctx.query = {
        pagination: {
          page: ctx.query.page || "1",
          pageSize: ctx.query.limit || "25",
          withCount: true,
        },
        sort: [ctx.query.sort || "label"],
      };

      const result = await super.find(ctx);

      return result;
    },
  })
);
