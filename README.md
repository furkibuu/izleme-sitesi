# Hayatsız İzleme Sitesi - Ön Yüz Tasarımı

Bu proje, Netflix benzeri modern bir dizi/film izleme sitesi için geliştirilmiş bir ön yüz (frontend) şablonudur. Proje, karanlık mod temalı, dinamik ve kullanıcı dostu bir arayüz sunmayı amaçlamaktadır. Tamamen saf HTML, CSS ve JavaScript (Vanilla JS) kullanılarak kodlanmıştır.

## 📸 Ekran Görüntüsü

<img width="1915" height="981" alt="image" src="https://github.com/user-attachments/assets/5861200f-9de4-49de-8085-df147cb19062" />



## ✨ Temel Özellikler

Bu şablon, modern bir izleme platformunda bulunması gereken birçok dinamik özelliği içerir:

* **Karanlık Mod Arayüz:** Göz yormayan, şık ve modern bir karanlık tema.
* **Dinamik Canlı Arama:** Arama çubuğuna yazılan metne göre içerikleri anlık olarak filtreler.
* **"Sonuç Yok" Mesajı:** Arama kriterlerine uygun içerik bulunamadığında kullanıcıyı bilgilendiren bir uyarı ekranı.
* **Yatay İçerik Karuseli:** İçerik satırları (Popüler, Yeni Eklenenler vb.) yatay olarak kaydırılabilir şekilde tasarlanmıştır.
* **Dinamik Karusel Kontrolleri:**
    * Her içerik satırı için "İleri" ve "Geri" okları.
    * Oklar, sadece satırın üzerine gelindiğinde belirir.
    * Karuselin başına veya sonuna gelindiğinde ilgili ok **otomatik olarak devre dışı kalır**.
* **Gelişmiş Animasyonlar:**
    * İçerik kartlarının üzerine gelindiğinde (`hover`) büyüyerek öne çıkması.
    * Sayfa yüklendiğinde içeriğin yumuşak bir `fadeIn` animasyonu ile gelmesi.
* **Yapışkan Header (Sticky Header):**
    * Sayfa aşağı kaydırıldığında üste sabitlenen bir header.
    * Kaydırma sırasında `backdrop-filter` (cam efekti) ile modern bir görünüm kazanır.

## 🛠️ Kullanılan Teknolojiler

Bu proje herhangi bir kütüphane veya framework'e (Bootstrap, React, Vue vb.) bağlı kalmadan, web'in temel teknolojileri ile oluşturulmuştur:

* **HTML5:** Semantik etiketler ve modern sayfa yapısı.
* **CSS3:**
    * `Flexbox` ve `Grid` (Modern düzenler için).
    * `CSS Değişkenleri` (Renk paletinin kolay yönetimi için).
    * `@keyframes` (Giriş animasyonları için).
    * `transform` & `transition` (Pürüzsüz hover efektleri için).
    * `backdrop-filter` (Header'daki "cam" efekti için).
    * Kaydırma çubuğu (`scrollbar`) gizleme.
* **JavaScript (Vanilla JS):**
    * DOM Manipülasyonu.
    * `addEventListener` (input, click, scroll) ile olay yönetimi.
    * Canlı arama filtresi fonksiyonu.
    * Dinamik karusel kaydırma ve buton durum yönetimi.

## 🚀 Kurulum ve Kullanım

Projeyi yerel makinenizde çalıştırmak için:

1.  Bu repoyu klonlayın veya ZIP olarak indirin:
    ```bash
    git clone [https://github.com/furkibuu/izleme-sitesi.git](https://github.com/furkibuu/izleme-sitesi.git)
    ```
2.  Proje klasörüne gidin:
    ```bash
    cd izleme-sitesi
    ```
3.  `index.html` dosyasına çift tıklayarak projeyi tarayıcınızda açın.

## 📄 Lisans

Bu proje [MIT Lisansı](LICENSE) altında lisanslanmıştır.
