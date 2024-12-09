
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
    
