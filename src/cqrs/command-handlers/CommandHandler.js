// @flow
import { Command } from '../commands/Command';
import type { CommandType } from '../commands/Command';

export interface CommandHandler {
    getCommandType(): CommandType;
    handle(command: Command): void;
}

