"use strict";
import mongoose from "mongoose";
import os from "os";
const __SECOND__ = 1000;
export const countConnections = () => {
  const connections = mongoose.connections.length;
  console.log(`connections         :::: ${connections}`);
};
export const checkOverLoad = () => {
  setInterval(() => {
    const connections = mongoose.connections.length;
    const cores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;
    const maxConnections = cores * 5;
    if (connections > maxConnections) {
      console.log("Server overload");
    }
    console.log(`Active connections :::: ${connections}`);
    console.log(`Memory Usage       :::: ${memoryUsage / 1024 / 1024} MB`);
  }, __SECOND__);
};
