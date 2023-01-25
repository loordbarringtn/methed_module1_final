const marble = (() => {
  const result = {
    playerBalls: 5,
    botBalls: 5,
  };

  const checkIfNumber = (checkNum) => {
    return isNaN(parseFloat(checkNum));
  };

  const getPlayerGuess = () => {
    let playerGuess = prompt(
      `Введите количество шаров от 1 до ${result.playerBalls}`
    );
    if (playerGuess === null) {
      return null;
    }
    if (checkIfNumber(playerGuess)) {
      alert("Неверный ввод!");
      return getPlayerGuess();
    }
    playerGuess = parseInt(playerGuess);
    if (playerGuess < 1 || playerGuess > result.playerBalls) {
      alert(`Введите корректное значение: от 1 до ${result.playerBalls}`);
      return getPlayerGuess();
    }
    return playerGuess;
  };

  const updateBalls = (playerGuess, botGuess) => {
    if (
      (playerGuess % 2 === 0 && botGuess === "нечетное") ||
      (playerGuess % 2 !== 0 && botGuess === "четное")
    ) {
      result.botBalls -= playerGuess;
      result.playerBalls += playerGuess;
      alert(`Компьютер теряет: ${playerGuess} шар(а)ов`);
    } else {
      result.playerBalls -= playerGuess;
      result.botBalls += playerGuess;
      alert(`Игрок теряет: ${playerGuess} шар(а)ов`);
    }
    alert(
      `У игрока: ${result.playerBalls} шаров. У компьютера: ${result.botBalls} шаров.`
    );
  };

  const getBotGuess = () => {
    return Math.random() < 0.5 ? "четное" : "нечетное";
  };

  const game = () => {
    debugger;
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
    alert(`Компьютер загадал: ${botGuess}`);
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
