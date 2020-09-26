import BlockType from 'scratch-vm/src/extension-support/block-type'
import ArgumentType from 'scratch-vm/src/extension-support/argument-type'

import { BlockInfo } from './index'
import { translations } from '../translations'

const ShowSpriteBlock = {
  info(): BlockInfo {
    return {
      opcode: 'showSprite',
      blockType: BlockType.COMMAND,
      text: translations.label('showSprite'),
      arguments: {
        TARGET: {
          type: ArgumentType.STRING,
          menu: 'Target',
        },
      },
    }
  },

  menus(): object {
    return {
      Target: {
        items: [
          {
            value: 'allSprites',
            text: translations.label('all sprites'),
          },
          {
            value: 'thisSprite',
            text: translations.label('this sprite'),
          },
        ],
        acceptReporters: true,
      },
    }
  },

  showSprite(args: any, util): void {
    switch (args.TARGET) {
      case 'allSprites':
        console.log(this.runtime.targets)
        break

      case 'thisSprite':
        console.log(util.target)
        break

      default:
        break
    }
  },
}

export default ShowSpriteBlock
