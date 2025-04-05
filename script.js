const messages = [
    "Eh kamu, jangan lupa... kamu keren banget tau! 😎✨",
    "Kalo lelah, istirahat bentar ya. Tapi jangan nyerah, aku udah invest perasaan ke kamu soalnya 😜",
    "Kamu tuh kaya sinyal WiFi, kadang ilang... tapi aku tetap nyariin 😆",
    "Aku yakin kamu bisa! Soalnya kamu udah bisa bikin aku senyum sendiri 🤭",
    "Jangan takut gagal, semua orang hebat juga pernah nyasar ke jalan yang salah—kayak aku nyasar ke hatimu 😌💘",
    "Satu langkah kecil pun tetap maju loh, jangan anggap remeh. Kayak aku majuin perasaan ke kamu 😚",
    "Kamu itu istimewa. Kayak gorengan pas hujan. Hangat dan selalu dirindukan 😋",
    "Hari ini berat? Peluk dulu gih... walau cuma virtual 🫂",
    "Kalau kamu cape, inget: ada aku yang siap nemenin (asal nggak offline ya 😅)",
    "Yuk semangat! Kalau nggak buat kamu, buat aku yang selalu dukung dari sini 😍"
  ];
  
  let currentIndex = 0;
  
  function giveEncouragement() {
    const messageElement = document.getElementById("message");
    messageElement.style.opacity = '0';
  
    setTimeout(() => {
      messageElement.textContent = messages[currentIndex];
      messageElement.style.opacity = '1';
  
      currentIndex++;
      if (currentIndex >= messages.length) currentIndex = 0;
    }, 500);
  }
  
  function showSecretMessage() {
    document.getElementById("popup").style.display = "flex";
  }
  
  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }
  
  function playMusic() {
    const audio = document.getElementById("bgMusic");
    audio.volume = 0.5;
    audio.play().catch(() => {
      alert("Klik tombolnya dulu ya biar musiknya jalan 🎵");
    });
  }
  
  // Hati terbang
  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
    document.getElementById("hearts-container").appendChild(heart);
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
  setInterval(createHeart, 300);
  