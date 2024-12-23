//ブロック1マスの大きさ
    const blockSize = 30;
    //ボードサイズ
    const boardRow = 20;
    const boardCol = 10;
    //キャンバスの取得
    const cvs = document.getElementById("cvs");
    //2dコンテキストを取得
    const ctx=cvs.getContext("2d");
    //キャンバスサイズ
    const canvasW = blockSize * boardCol;
    const canvasH = blockSize * boardRow;
    cvs.width = canvasW;
    cvs.height = canvasH;
    //コンテナの設定
    const container = document.getElementById("container");
    container.style.width = canvasW + 'px';
    
    //描画処理
    const draw=()=>{
      //塗りに黒を設定
      ctx.fillStyle = '#000';
      //キャンバスを塗りつぶす
      ctx.fillRect(0, 0, canvasW, canvasH);
      //塗りに赤を設定
      ctx.fillStyle="#f00";
      //x座標150,y座標150の場所に幅30,縦30の四角を描画
      ctx.fillRect(150,150,blockSize,blockSize);
    }
    //初期化処理
    const init=()=>{
      draw();
    }
