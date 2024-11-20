import { Express } from "express";

export type Endpoint = (express: Express) => void;
