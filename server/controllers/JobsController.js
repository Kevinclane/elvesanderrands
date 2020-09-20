import express from "express";
import BaseController from "../utils/BaseController";
import { jobsService } from "../services/JobsService";
import auth0Provider from "@bcwdev/auth0provider";

export class JobsController extends BaseController {
  constructor() {
    super("api/jobs");
    this.router
      .get("", this.getActive)
      .get("/all", this.getAll)
      .get("/:id", this.getJobById)
      // .put("/:id/expire", this.changeJobStatus)
      .use(auth0Provider.getAuthorizedUserInfo)
      .put("/:id", this.edit)
      .post("", this.create)
      .delete("/:id", this.delete);
  }

  async getActive(req, res, next) {
    try {
      let data = await jobsService.getActive(req.query);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getAll(req, res, next) {
    try {
      let data = await jobsService.getAll(req.query);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getJobById(req, res, next) {
    try {
      let data = await jobsService.getJobById(req.params.id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      req.body.owner = req.userInfo.id;
      let data = await jobsService.create(req.body);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next) {
    try {
      // req.body.creatorEmail = req.userInfo.email;
      let data = await jobsService.edit(
        req.params.id,
        req.userInfo.email,
        req.body
      );
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  // async changeJobStatus(req, res, next) {
  //   try {
  //     let data = await jobsService.changeJobStatus(req.body);
  //     res.send(data);
  //   } catch (error) {
  //     next(error);
  //   }
  // }
  async delete(req, res, next) {
    try {
      let data = await jobsService.delete(req.params.id, req.userInfo.id);
      if (data) {
        res.send("Successfully deleted");
      }
    } catch (error) {
      next(error);
    }
  }
}
