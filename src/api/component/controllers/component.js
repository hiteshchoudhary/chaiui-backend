// @ts-nocheck
"use strict";

/**
 * component controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::component.component",
  ({ strapi }) => ({
    async find(ctx) {
      await this.validateQuery(ctx);

      ctx.query = {
        pagination: {
          page: ctx.query.page || "1",
          pageSize: ctx.query.limit || "25",
          withCount: true,
        },
        sort: [ctx.query.sort || "name"],
        populate: ["component_category"],
        filters: {
          component_category: ctx.query.categoryId,
        },
      };

      const result = await super.find(ctx);

      return result;
    },
  })
);
