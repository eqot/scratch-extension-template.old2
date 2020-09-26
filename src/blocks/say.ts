import BlockType from 'scratch-vm/src/extension-support/block-type'
import ArgumentType from 'scratch-vm/src/extension-support/argument-type'
import Cast from 'scratch-vm/src/util/cast'

import { BlockInfo } from './index'
import { translations } from '../translations'

const SayBlock = {
  info(): BlockInfo {
    return {
      opcode: 'say',
      blockType: BlockType.REPORTER,
      text: translations.label('say'),
      arguments: {
        MESSAGE: {
          type: ArgumentType.STRING,
          defaultValue: 'Hello, World!',
        },
      },
    }
  },

  say(args: any) {
    const message = Cast.toString(args.MESSAGE)
    console.log(message)

    return message
  },
}

export default SayBlock
