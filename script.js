function minCut(grafik) {
    let n = grafik.length;
    let düğümler = new Array(n);
    //  düğümler dizisi oluşturdum.
    for (let i = 0; i < n; i++) {
        düğümler[i] = i;
    }
    // düğümler dizisinin her elemanına sırasıyla 0'dan n-1'e kadar sıfırdan başlayarak değer atadım. 
    // düğümler dizisinin amacı : Bu dizinin amacı, kesim işleminin hangi düğümleri içerdiğini belirlemektir.
  
    while (n > 2) {
        // Bu döngü, minimum kesimi bulmak için kullanılır. Her adımda, rastgele bir düğüm seçilir ve o düğümle bağlantılı başka bir rastgele düğüm seçilir. Bu seçilen düğümler, daha sonra birleştirilir.
        // Rastgele u ve v düğümleri seçilir.
      let u = Math.floor(Math.random() * n);
      let v = Math.floor(Math.random() * (n - 1));
      if (v >= u) {
        v++;
      }
      let kenarlar = grafik[u];
      let w = kenarlar[v];
      //  u ve v düğümlerinin kenarları bulduk.
  
      for (let i = 0; i < n; i++) {
        if (grafik[u][i] + grafik[v][i] < grafik[n - 1][i]) {
            grafik[n - 1][i] = grafik[u][i] + grafik[v][i];
            grafik[i][n - 1] = grafik[n - 1][i];
            // Döngü, tüm düğümleri dolaşarak iki seçilen düğüm arasındaki en az kesimi bulur ve bunu graph[n-1] dizisinde saklar. 
        }
      }
      //  u ve v düğümleri birleştirilir ve v'nin tüm kenarları u düğümüne aktarılır.
  
      düğümler[v] = düğümler[n - 1];
      // düğümler dizisi güncelledik. Bu işlem v düğümünün u düğümüyle birleştirildiği anlamına gelir.


      for (let i = 0; i < n; i++) {
        grafik[i][v] = grafik[i][n - 1];
      }
      // Döngü grafikteki tüm bağlantıları v düğümüyle değiştirerek graph matrisindeki v sütununu siler.
      
      n--;
       // grafigin boyutu azalttım. Ve döngü tekrar başlar.
    }
  
    let minCut = Infinity; // mincut ' a sınırsız bir değer atadım.
    for (let i = 1; i < n; i++) {
      for (let j = 0; j < i; j++) {
        minCut = Math.min(minCut, grafik[i][j]);
      }
      // for döngüsü grafik matrisindeki tüm değerleri gezerek minCut (minimum kesim değerini) bulur.
    }
  
    return minCut;
    // Grafın en küçük kesimini buldum. (minCut : minimum kesim değerini)
  }
  
  // Bir grafik matrisi oluşturdum.
  let grafik = [  [0, 2, 3, 4],
    [2, 0, 1, 3],
    [3, 1, 0, 2],
    [4, 3, 2, 0],
  ];
  console.log("Minimum Kesim Değeri : ");
  console.log(minCut(grafik)); 
  