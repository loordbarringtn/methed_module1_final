const marble = (() => {
  const result = {
    playerBalls: 5,
    botBalls: 5,
  };

  const getPlayerGuess = () => {
    let playerGuess = prompt(
      "Подумайте - компьютер загадал четное или нечетное количество шаров? Напишите одно слово:"
    );
    if (playerGuess === null) {
      return null;
    }
    if (playerGuess !== "нечетное" && playerGuess !== "четное") {
      alert("Неправильный ввод. Пожалуйста введите слово: нечетное или четное");
      return getPlayerGuess();
    }
    return playerGuess;
  };

  const updateBalls = (playerGuess, botGuess) => {
    if (
      (botGuess % 2 === 0 && playerGuess === "четное") ||
      (botGuess % 2 !== 0 && playerGuess === "нечетное")
    ) {
      result.botBalls -= botGuess;
      result.playerBalls += botGuess;
      alert(`Компьютер теряет: ${botGuess} шар(а)ов`);
    } else {
      result.playerBalls -= botGuess;
      result.botBalls += botGuess;
      alert(`Игрок теряет: ${botGuess} шар(а)ов`);
    }
    alert(
      `У игрока: ${result.playerBalls} шаров. У компьютера: ${result.botBalls} шаров.`
    );
  };

  const getBotGuess = () => {
    return Math.floor(Math.random() * (result.botBalls + 1));
  };

  const game = () => {
    if (result.playerBalls <= 0) {
      return false;
    } else if (result.botBalls <= 0) {
      return true;
    }
    let playerGuess = getPlayerGuess();

    if (playerGuess === null) {
      return null;
    }
    const botGuess = getBotGuess();
    alert(`Компьютер загадал: ${botGuess} шаров`);
    updateBalls(playerGuess, botGuess);
    return game();
  };

  const startGame = () => {
    alert(`\t\t\tДобро пожаловать в игру!     \t
                   \tКоличество шаров у игрока: ${result.playerBalls}\t
                   \tКоличество шаров у компьютера: ${result.botBalls}\t`);
    const resultGame = game();
    if (resultGame === null) alert("Выходим из игры!");
    else if (resultGame === true) {
      alert(`Поздравляем, вы выиграли! Отличная работа!`);
    } else if (resultGame === false) {
      alert(`Вы проиграли! Повезет в следующий раз!`);
    }
  };
  return startGame();
})();

window.IIFE = marble;

const updateBalls = (playerGuess, botGuess) => {
  if (
    (botGuess % 2 === 0 && playerGuess === "even") ||
    (botGuess % 2 !== 0 && playerGuess === "odd")
  ) {
    botBalls -= botGuess;
    playerBalls += botGuess;
    alert("Bot loses " + botGuess + " balls.");
  } else {
    playerBalls -= botGuess;
    botBalls += botGuess;
    alert(`Player loses: ${botGuess} balls`);
  }
  if (playerBalls < 0) {
    playerBalls = 0;
    alert(
      "Player balls: " +
        playerBalls +
        " | Bot balls: " +
        botBalls +
        "\n Player has 0 balls. Game over!"
    );
    return false;
  }
  if (botBalls < 0) {
    botBalls = 0;
    alert(
      "Player balls: " +
        playerBalls +
        " | Bot balls: " +
        botBalls +
        "\n Bot has 0 balls. Game over!"
    );
    return true;
  }
  alert("Player balls: " + playerBalls + " | Bot balls: " + botBalls);
};