import { Command } from "commander";
import { registerInit } from "./commands/init.js";

const program = new Command();

program
  .name("claytone")
  .description("Design engine scaffolder for AI coding assistants")
  .version("0.1.0");

registerInit(program);

program.parse();
