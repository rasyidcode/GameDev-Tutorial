import Phaser from 'phaser'

import GameScene from './scenes/GameScene'
import HelloWorldScene from './scenes/HelloWorldScene'

const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 300 }
		}
	},
	scene: [GameScene, HelloWorldScene]
}

export default new Phaser.Game(config)
