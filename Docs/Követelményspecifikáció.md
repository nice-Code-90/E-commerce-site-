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

| Modul         | ID | Név                                        | Verzió | Kifejtés                                                                                                                                                                            |
|---------------|----|--------------------------------------------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Felhasználói Interfész Követelményei:          |    |                                            |        |                                                                                                                                                                                     |
|               | 1  | Reszponzív, felhasználóbarát dizájn       | 1.0    | Az oldalnak reszponzívnak kell lennie, és különböző eszközökön és böngészőkben kell megfelelően működnie.                                                                         |
|               | 2  | Kategóriák és szűrési lehetőségek          | 1.0    | A felhasználóknak könnyen kell tudniuk kategóriák között böngészni és szűrni a termékeket.                                                                                    |
|               | 3  | Egyszerű vásárlási folyamat és kosárkezelés | 1.0  | A vásárlási folyamatnak egyszerűnek és zökkenőmentesnek kell lennie. A kosárban lévő termékeket könnyen kezelhetően kell tartalmaznia.                   |
|               | 4  | Felhasználói fiókok kezelése               | 1.0    | Bejelentkezési és regisztrációs lehetőségeknek egyszerűeknek és gyorsnak kell lenniük. A jelszavakat biztonságosan kell tárolni.                         |
|               | 5  | Adminisztrációs felület termékfeltöltéshez és rendelések kezeléséhez | 1.0 | Az adminisztrátorok számára könnyű termékfeltöltési és rendeléskezelési folyamatok biztosítása.   |
| Teljesítmény és Biztonság:                   |    |                                            |        |                                                                                                                                                                                     |
|               | 6  | Gyors betöltési idő és teljesítmény       | 1.0    | A weboldalnak gyorsan kell betöltenie és reszponzívnak kell lennie, különböző eszközökön és böngészőkben.                                                               |
|               | 7  | SSL titkosítás                            | 1.0    | Az SSL titkosításnak biztosítania kell a biztonságos adatátvitelt a weboldalon.                                                                                                     |
|               | 8  | Felhasználói adatok biztonságos tárolása és kezelése | 1.0 | A felhasználói adatokat biztonságosan kell tárolni és kezelni, megfelelve az adatvédelmi szabályozásoknak.             |
| Funkcionalitás:                              |    |                                            |        |                                                                                                                                                                                     |
|               | 9  | Automatikus termékfeltöltési lehetőség CSV-fájlokból | 1.0  | Az adminisztrátoroknak lehetőséget kell biztosítani a termékfeltöltésre CSV-fájlokból.                               |
|               | 10 | Kosár mentése és visszatöltése a felhasználó fiókjában | 1.0  | A felhasználók kosárban lévő tételeinek mentése és visszatöltése.                                      |
|               | 11 | Készletek és rendelések kezelése           | 1.0    | Az adminisztrátoroknak egyszerűen kell tudniuk kezelni a készleteket és rendeléseket.                               |
|               | 12 | Fizetési átjáró integrációk                | 1.0    | A weboldalon különböző fizetési átjáróknak kell integrálódniuk, például bankkártya, PayPal stb.                   |
|               | 13 | Rendelési visszaigazolás és követési információk | 1.0 | A felhasználóknak rendelési visszaigazolást kell kapniuk, és követniük kell a rendelésük állapotát.             |
| Analitika és Riportok:                       |    |                                            |        |                                                                                                                                                                                     |
|               | 14 | Részletes eladási és felhasználói viselkedési riportok | 1.0 | A rendszernek lehetővé kell tennie a részletes eladási és felhasználói viselkedési riportok generálását.    |
|               | 15 | Felhasználói aktivitás nyomon követése és elemzése | 1.0 | A felhasználói aktivitás nyomon követése és elemzése segíti az oldal optimalizálását és a felhasználói élmény javítását. |
