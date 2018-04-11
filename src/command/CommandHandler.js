// @flow
import type { CommandType } from './Command';
import { Command } from './Command';

export interface CommandHandler {
    getCommandType(): CommandType;

    handle(command: Command): void;
}

