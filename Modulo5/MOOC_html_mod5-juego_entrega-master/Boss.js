/**
 * Jefe al que tenemos que destruir
 */
class Boss extends Opponent {
  /**
   * @param game {Game} La instancia del juego al que pertenece el oponente
   */
  constructor(game) {
      const height = OPPONENT_HEIGHT * game.width / 100,
          width = BOSS_WIDTH * game.width / 100,
          x = getRandomNumber(game.width - width / 2),
          y = 0,
          speed = BOSS_SPEED,
          myImage = BOSS_PICTURE,
          myImageDead = BOSS_PICTURE_DEAD;

      super(game, width, height, x, y, speed, myImage, myImageDead);
      this.opponent = "Boss";
      this.speed = BOSS_SPEED;
      this.myImageDead = myImageDead;
      this.image.src = this.opponent.dead === true ? BOSS_PICTURE_DEAD : BOSS_PICTURE;
      this.direction = "R"; // DirecciÃ³n hacia la que se mueve el oponente
      setTimeout(() => this.shoot(), 1000 + getRandomNumber(2500));
  }


}