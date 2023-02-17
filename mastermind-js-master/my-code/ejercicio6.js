let height = 100, i, txt = "*";
for (i = 0; i < height - 1; i ++)
    txt = " " + txt + " ";

for (i = 1; i <= height; i++) {
    console.log(txt);
    txt = txt.split("");
    txt[Math.trunc((height*2 - 1) / 2) - i] = "*";
    txt[Math.round((height*2 - 1) / 2) + i - 1] = "*";
    // console.log(txt);
    txt = txt.join("");
}

    