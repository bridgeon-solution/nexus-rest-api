import express,{ Express } from "express";
import httpProxy from "http-proxy";

const app = express();
const proxy = httpProxy.createProxyServer();

app.use()