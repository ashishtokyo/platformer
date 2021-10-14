var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["71a41b62-9209-485a-bcd1-11f7d63f0402","bc0bc21b-641f-4612-a3a7-d6575f0857d5","2ebd0a3e-7b51-4bca-8c7c-7bb8fdcd0639","5662ed27-02e3-4577-b4bf-108998123605"],"propsByKey":{"71a41b62-9209-485a-bcd1-11f7d63f0402":{"name":"rpgcharacter_19_1","sourceUrl":"assets/api/v1/animation-library/gamelab/MXRmfPTUZZJu5ze33FaaCtalPhM5kCPh/category_fantasy/rpgcharacter_19.png","frameSize":{"x":258,"y":326},"frameCount":1,"looping":true,"frameDelay":2,"version":"MXRmfPTUZZJu5ze33FaaCtalPhM5kCPh","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":258,"y":326},"rootRelativePath":"assets/api/v1/animation-library/gamelab/MXRmfPTUZZJu5ze33FaaCtalPhM5kCPh/category_fantasy/rpgcharacter_19.png"},"bc0bc21b-641f-4612-a3a7-d6575f0857d5":{"name":"background_landscape01_1","sourceUrl":"assets/api/v1/animation-library/gamelab/O75xN5U40Qc2TA25Y0Qb5wt5W_jPbtoa/category_backgrounds/background_landscape01.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"O75xN5U40Qc2TA25Y0Qb5wt5W_jPbtoa","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/O75xN5U40Qc2TA25Y0Qb5wt5W_jPbtoa/category_backgrounds/background_landscape01.png"},"2ebd0a3e-7b51-4bca-8c7c-7bb8fdcd0639":{"name":"coin_gold_1","sourceUrl":"assets/api/v1/animation-library/gamelab/pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y/category_board_games_and_cards/coin_gold.png","frameSize":{"x":61,"y":61},"frameCount":1,"looping":true,"frameDelay":2,"version":"pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":61,"y":61},"rootRelativePath":"assets/api/v1/animation-library/gamelab/pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y/category_board_games_and_cards/coin_gold.png"},"5662ed27-02e3-4577-b4bf-108998123605":{"name":"rocks","sourceUrl":"assets/api/v1/animation-library/gamelab/51I7hXNEjxfl1MrrTPdA5t3II2RbMov1/category_video_games/rocks.png","frameSize":{"x":392,"y":167},"frameCount":1,"looping":true,"frameDelay":2,"version":"51I7hXNEjxfl1MrrTPdA5t3II2RbMov1","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":392,"y":167},"rootRelativePath":"assets/api/v1/animation-library/gamelab/51I7hXNEjxfl1MrrTPdA5t3II2RbMov1/category_video_games/rocks.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var score = 0;
var background = createSprite(200, 200);
background.setAnimation("background_landscape01_1");
var character = createSprite(76, 290);
character.setAnimation("rpgcharacter_19_1");
character.scale = 0.5;
var coin1 = createSprite(92, 88);
coin1.setAnimation("coin_gold_1");
coin1.velocityY = 4;
var coin2 = createSprite(200, 200);
coin2.setAnimation("coin_gold_1");
coin2.velocityY = 4;
var coin3 = createSprite(336, 206);
coin3.setAnimation("coin_gold_1");
coin3.velocityY = 4;
var rocks = createSprite(150, 400);
rocks.setAnimation("rocks");
function draw() {
  drawSprites();
  coincollect();
  character .collide(rocks);
  gravity();
  wizardmovement();
  coinloop();
}
function coinloop() {
  if (coin1.y > 372) {
    coin1.y = 10;
  }
  if (coin2.y > 372) {
    coin2.y = 10;
  }
  if (coin3.y > 372) {
    coin3.y = 10;
  }
}
function wizardmovement() {
  if (keyDown("up")) {
    character.velocityY = -5;
  }
  if (keyDown("left")) {
    character.x = character.x - 5;
  }
  if (keyDown("right")) {
    character.x = character.x + 5;
  }
}
function gravity() {
  character.velocityY = character.velocityY + 1;
}
function coincollect() {
  if (character.isTouching(coin1)) {
    score = score + 1;
  }
  if (character.isTouching(coin2)) {
    score = score + 1;
  }
  if (character.isTouching(coin3)) {
    score = score + 1;
  }
  text(score, 72, 21);
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
