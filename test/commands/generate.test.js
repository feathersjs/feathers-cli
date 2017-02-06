import { expect } from 'chai';
import generate from '../../src/commands/generate';
import program from 'commander';

describe('command:generate', () => {
  it('registers the command', () => {
    generate(program);

    const command = program.commands
      .filter(c => c.name() === 'generate')
      .reduce(c => !!c);

    expect(command).to.not.equal(undefined);
  });
});