function setup() { 
  createCanvas(640, 480);
} 

function draw() { 
  background(220);
  // ここにrect関数を使って、画面の真ん中に幅200ピクセルの正方形を
  // 描いてください。
  // 色は背景の220以外、デフォルトの白黒のままにしてください。
  rect(220, 140, 200, 200);

  // 下記は変更しないでください。自動テストのコードです。
  test();
}

function test() {
  if (
    checkColor(222, 142, 255, 255, 255, 255)
    && checkColor(418, 338, 255, 255, 255, 255)
    && checkColor(218, 240, 220, 220, 220, 255)
    && checkColor(320, 138, 220, 220, 220, 255)
    && checkColor(422, 240, 220, 220, 220, 255)
    && checkColor(320, 342, 220, 220, 220, 255)
  ) {
    text("正解", 0, 10);
  } else {
    text("不正解", 0, 10);
  }
}

function checkColor(x, y, r, g, b, a) {
  const getPixel = get(x, y);
  const expectedPixel = [r, g, b, a];
  let errors = false;
  if(getPixel.length != expectedPixel.length) {
    errors = true;
  }
  getPixel.forEach((elem, index) => {
    if (!errors && elem != expectedPixel[index]) errors = true;
  });
  if(getPixel.length == expectedPixel.length
    && !errors) {
    return true;
  } else {
    return false;
  }
}