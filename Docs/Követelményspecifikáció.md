# Termék Neve: E-Commerce Express

## Követelmények Specifikációja

### 1. Jelenlegi Helyzet Leírása:

Az E-Commerce Express egy online kiskereskedelmi platform, amelynek jelenlegi verziója elavult és nem felel meg a piaci igényeknek. Az felhasználói élmény nem megfelelő, a webhely lassú és nehezen kezelhető. Az adminisztrációs felület is komplikált, és nincs lehetőség a termékek hatékony kezelésére vagy a felhasználói adatok elemzésére.

### 2. Vágyálomrendszer Leírása:

Az E-Commerce Express célja egy modern, felhasználóbarát és hatékony e-commerce weboldal fejlesztése. A felhasználók könnyedén böngészhetnek, kiválaszthatnak és vásárolhatnak termékeket. Az adminisztrátoroknak lehetőségük van könnyű termékfeltöltésre és kezelésre, valamint a felhasználói adatok elemzésére. A weboldal gyors, biztonságos és reszponzív legyen, különböző eszközökön és böngészőkben.

### 3. A Rendszerre Vonatkozó Pályázat, Törvények, Rendeletek, Szabványok és Ajánlások:

Az E-Commerce Express projektnek meg kell felelnie az érvényes e-commerce vonatkozó jogszabályoknak, beleértve az adatvédelmi szabályozásokat (pl. GDPR), a fogyasztóvédelmi törvényeket, az elektronikus kereskedelmi irányelveket és a kibertámadások elleni védelem követelményeit. A webhelynek összhangban kell lennie az OWASP webalkalmazás-biztonsági szabványokkal.

### 4. Jelenlegi Üzleti Folyamatok Modellje:

A jelenlegi üzleti folyamatok közé tartozik a termékfeltöltés, a rendelések kezelése, a fizetések feldolgozása és a felhasználói fiókok kezelése. Ezen folyamatok manuálisak, időigényesek és hajlamosak a hibákra.

![Jelenlegi üzleti folyamatok](/Abrak/jelenlegiuzleti.png)

### 5. Igényelt Üzleti Folyamatok Modellje:

Az új rendszernek automatizálnia kell a termékfeltöltést, a rendelések kezelését, a fizetések feldolgozását és a felhasználói fiókok kezelését. Az üzleti folyamatoknak hatékonyabbnak és gyorsabbnak kell lenniük, minimalizálva az emberi beavatkozást.

![Igényelt üzleti folyamatok](/Abrak/igenyeltuzleti.png)

### 6. Követelménylista:

#### Felhasználói Interfész Követelményei:

### Követelménylista

| Modul                                 | ID  | Név                                                                  | Verzió | Kifejtés                                                                                                                               |
| ------------------------------------- | --- | -------------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| Felhasználói Interfész Követelményei: |     |                                                                      |        |                                                                                                                                        |
|                                       | 1   | Reszponzív, felhasználóbarát dizájn                                  | 1.0    | Az oldalnak reszponzívnak kell lennie, és különböző eszközökön és böngészőkben kell megfelelően működnie.                              |
|                                       | 2   | Kategóriák és szűrési lehetőségek                                    | 1.0    | A felhasználóknak könnyen kell tudniuk kategóriák között böngészni és szűrni a termékeket.                                             |
|                                       | 3   | Egyszerű vásárlási folyamat és kosárkezelés                          | 1.0    | A vásárlási folyamatnak egyszerűnek és zökkenőmentesnek kell lennie. A kosárban lévő termékeket könnyen kezelhetően kell tartalmaznia. |
|                                       | 4   | Felhasználói fiókok kezelése                                         | 1.0    | Bejelentkezési és regisztrációs lehetőségeknek egyszerűeknek és gyorsnak kell lenniük. A jelszavakat biztonságosan kell tárolni.       |
|                                       | 5   | Adminisztrációs felület termékfeltöltéshez és rendelések kezeléséhez | 1.0    | Az adminisztrátorok számára könnyű termékfeltöltési és rendeléskezelési folyamatok biztosítása.                                        |
| Teljesítmény és Biztonság:            |     |                                                                      |        |                                                                                                                                        |
|                                       | 6   | Gyors betöltési idő és teljesítmény                                  | 1.0    | A weboldalnak gyorsan kell betöltenie és reszponzívnak kell lennie, különböző eszközökön és böngészőkben.                              |
|                                       | 7   | SSL titkosítás                                                       | 1.0    | Az SSL titkosításnak biztosítania kell a biztonságos adatátvitelt a weboldalon.                                                        |
|                                       | 8   | Felhasználói adatok biztonságos tárolása és kezelése                 | 1.0    | A felhasználói adatokat biztonságosan kell tárolni és kezelni, megfelelve az adatvédelmi szabályozásoknak.                             |
| Funkcionalitás:                       |     |                                                                      |        |                                                                                                                                        |
|                                       | 9   | Automatikus termékfeltöltési lehetőség CSV-fájlokból                 | 1.0    | Az adminisztrátoroknak lehetőséget kell biztosítani a termékfeltöltésre CSV-fájlokból.                                                 |
|                                       | 10  | Kosár mentése és visszatöltése a felhasználó fiókjában               | 1.0    | A felhasználók kosárban lévő tételeinek mentése és visszatöltése.                                                                      |
|                                       | 11  | Készletek és rendelések kezelése                                     | 1.0    | Az adminisztrátoroknak egyszerűen kell tudniuk kezelni a készleteket és rendeléseket.                                                  |
|                                       | 12  | Fizetési átjáró integrációk                                          | 1.0    | A weboldalon különböző fizetési átjáróknak kell integrálódniuk, például bankkártya, PayPal stb.                                        |
|                                       | 13  | Rendelési visszaigazolás és követési információk                     | 1.0    | A felhasználóknak rendelési visszaigazolást kell kapniuk, és követniük kell a rendelésük állapotát.                                    |
| Analitika és Riportok:                |     |                                                                      |        |                                                                                                                                        |
|                                       | 14  | Részletes eladási és felhasználói viselkedési riportok               | 1.0    | A rendszernek lehetővé kell tennie a részletes eladási és felhasználói viselkedési riportok generálását.                               |
|                                       | 15  | Felhasználói aktivitás nyomon követése és elemzése                   | 1.0    | A felhasználói aktivitás nyomon követése és elemzése segíti az oldal optimalizálását és a felhasználói élmény javítását.               |

### 7. Irányított és Szabad Szöveges Riportok Szövege:

### Felhasználói élmény riport

#### 1.1 Vásárlói élményértékelés

A felhasználói élmény mindenekfelett van. Az új rendszernek lehetővé kell tennie számunkra, hogy könnyen böngészhessünk és találjunk termékeket. Az átlátható kategória- és szűrési lehetőségek sokat segítenek. A vásárlási folyamatnak egyszerűnek és zökkenőmentesnek kell lennie. Az egyes termékek közötti váltásnak gyorsnak és simának kell lennie. Fontos, hogy a weboldal gyorsan töltődjön be, és a mobiltelefonon is könnyen használható legyen.

#### 1.2 Bejelentkezés és Regisztráció

A fiókkezelés is fontos. A bejelentkezés és regisztráció lehetőségeknek egyszerűeknek és gyorsnak kell lenniük. A jelszavak biztonságosan kell tárolni. Ezenkívül jó lenne, ha emlékeztetné a rendszer minket a bejelentkezésre.

### Adminisztrációs felület riport

#### 2.1 Termékfeltöltés és Kezelés

Az adminisztrációs felületnek könnyen kezelhetőnek kell lennie. A termékfeltöltésnek egyszerűnek és gyorsnak kell lennie. Fontos, hogy a képek feltöltése is gördülékenyen menjen. Az árképzési és készletinformációk könnyen szerkeszthetők legyenek.

#### 2.2 Rendeléskezelés

A rendelések kezelése is fontos. Egyszerűen kell látni az új rendeléseket, és könnyen lehessen a szállítási információkat hozzáadni. Fontos, hogy az adminisztrátor könnyen tudjon kommunikálni a vásárlókkal.

### Analitikai riport

#### 3.1 Eladási és Viselkedési Adatok

Az eladási és viselkedési riportok segítenek a vállalkozásunk fejlesztésében. Fontos, hogy láthassuk, mely termékek mennek a legjobban, és melyek kevésbé. Az ügyfelek viselkedésének elemzése is segít abban, hogy jobban megértsük, mire van igényük.

#### 3.2 Felhasználói Aktivitás Nyomonkövetése

A felhasználói aktivitás követése kulcsfontosságú. Meg kell értenünk, hogy a felhasználók hogyan használják a webhelyet. Például, mely oldalak a legnépszerűbbek, és hol hagyják el a weboldalt. Ezek az információk segíthetnek az oldalunk optimalizálásában.

Az említett riportok készítése és a fent említett szempontok figyelembevétele alapján lehetővé teszi, hogy az E-Commerce Express rendszere maximálisan kielégítse a felhasználók igényeit és egy hatékony e-commerce élményt nyújtson.

### 8. Fogalomszótár

1. **E-Commerce Express (ECE)**: Az e-commerce szolgáltatás neve, amelynek célja egy modern és felhasználóbarát online kiskereskedelmi platform kifejlesztése.

2. **Felhasználói Élmény (UX)**: A felhasználók weboldalhasználati élményére vonatkozó fogalom, amely magában foglalja az oldal könnyű kezelhetőségét, az esztétikus dizájnt, a gyors betöltési időt és a felhasználóbarát funkciókat.

3. **Adminisztrációs Felület**: Az olyan felület, amely lehetővé teszi az adminisztrátoroknak a termékek, rendelések és felhasználói adatok kezelését, valamint az elemzésüket.

4. **GDPR (General Data Protection Regulation)**: Az Európai Unió által bevezetett általános adatvédelmi rendelet, amely szabályozza az egyének személyes adatainak védelmét.

5. **Fogyasztóvédelmi Törvények**: Olyan jogszabályok és rendeletek, amelyek a fogyasztók védelmét és jogait szolgálják az e-commerce területén.

6. **Elektronikus Kereskedelmi Irányelvek**: Az elektronikus kereskedelmi területen alkalmazandó irányelvek és előírások, amelyeket az e-commerce platformnak be kell tartania.

7. **OWASP (Open Web Application Security Project)**: Egy szervezet és közösség, amely webalkalmazás-biztonsági szabványokat és irányelveket fejleszt ki a weboldalak biztonságának javítására.

8. **Termékfeltöltés**: Az adminisztrátoroknak biztosított funkció, amely lehetővé teszi új termékek hozzáadását az e-commerce platformhoz.

9. **Rendelések Kezelése**: Az adminisztrátoroknak biztosított lehetőség, amely lehetővé teszi a rendelések nyomon követését és kezelését, például szállítás és számlázás.

10. **Fizetések Feldolgozása**: Az e-commerce platformon elérhető fizetési módok elfogadása és a fizetések feldolgozása, például bankkártya, PayPal stb.

11. **Felhasználói Fiókok Kezelése**: A felhasználók számára biztosított funkcionalitás, amely lehetővé teszi a bejelentkezést, regisztrációt, jelszókezelést és fiókbeállításokat.

12. **Kosárkezelés**: A felhasználók által összeállított kosárban lévő termékek kezelése, például hozzáadás, eltávolítás és mentés.

13. **Automatikus Termékfeltöltési Lehetőség**: Az adminisztrátoroknak biztosított eszköz, amely lehetővé teszi a termékek automatikus feltöltését CSV-fájlokból.

14. **Készletek Kezelése**: Az adminisztrátoroknak biztosított funkcionalitás, amely lehetővé teszi a termékkészletek nyomon követését és frissítését.

15. **Fizetési Átjáró Integrációk**: Az olyan szolgáltatások, amelyek lehetővé teszik különböző fizetési módok elfogadását, például bankkártya, PayPal stb.

16. **Rendelési Visszaigazolás**: Az ügyfeleknek küldött automatikus visszaigazoló e-mail a rendelés elküldése után.

17. **Követési Információk**: Az ügyfelek rendeléseinek aktuális állapotát és szállítási információit tartalmazó funkcionalitás.

18. **Analitika és Riportok**: A felhasználói aktivitás és értékesítési adatok részletes elemzésére és riportok létrehozására szolgáló eszközök.

19. **Felhasználói Aktivitás Nyomon Követése és Elemzése**: Az ügyfelek weboldalhasználatának és viselkedésének elemzése a felhasználói élmény és a konverziók javítása érdekében.
