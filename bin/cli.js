#!/usr/bin/env node

import { runChecker } from "../index.js";

const targetPath = process.argv[2] || ".";
runChecker(targetPath);
