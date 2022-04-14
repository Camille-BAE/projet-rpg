class Dungeon {
  constructor(advisedLevel, maximalPlayer, state) {
      this.advisedLevel = advisedLevel;
      this.maximalPlayer = maximalPlayer;
      this.state = state;
  }

  killBoss() {
      this.state = "defeated";
      console.log("The boss is dead! Well played");
  }
}



