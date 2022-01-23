import {Response, NextFunction} from "express";

const ApiError = require("../error/ApiError");

class ResponseHandler {
    constructor(
      private props: any,
      private res: Response,
      private next: NextFunction
    ) {}
    async tryCatchWrapper(callback) {
      try {
        const result = await callback(this.props);
        if (!result) {
          throw new Error("Not found");
        }
        this.res.send(result);
      } catch (e: any) {
        if (!this.props) {
          this.next(ApiError.internal(e.message));
        }
        this.next(ApiError.badRequest(e.message));
      }
    }
  }

  module.exports = ResponseHandler