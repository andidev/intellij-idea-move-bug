// @flow
import { Command } from '../commands/Command';

export interface CommandHandler {
    handle(command: Command): void
}

