# Termék Neve: E-Commerce Express

### 1. Jelenlegi Helyzet Leírása:

Az E-Commerce Express jelenlegi verziója sajnos messze elmarad az elvárásoktól és piaci igényektől. A felhasználói élmény szinte használhatatlan, a webhely rendkívül lassú és nehezen kezelhető. Az adminisztrációs felület is bonyolult, és a termékek hatékony kezelése és a felhasználói adatok elemzése teljesen hiányzik.

### 2. Vágyálomrendszer Leírása:

Az E-Commerce Express ambiciózus célja egy modern, felhasználóbarát és hatékony e-commerce weboldal kifejlesztése. A fő cél az, hogy a felhasználók könnyedén böngészhessenek, termékeket válasszanak ki és vásároljanak. Az adminisztrátorok számára egy egyszerű termékfeltöltési folyamatot és hatékony kezelést kínálunk, emellett lehetőséget biztosítunk a felhasználói adatok elemzésére. A weboldalnak gyorsnak, biztonságosnak és reszponzívnak kell lennie, függetlenül attól, hogy milyen eszközön vagy böngészőben használják.

### 3. A Rendszerre Vonatkozó Pályázat, Törvények, Rendeletek, Szabványok és Ajánlások:

Az E-Commerce Express projekt során szorosan figyelembe vesszük az aktuális e-commerce vonatkozó jogszabályokat és szabályozásokat, ideértve a személyes adatok védelméről (pl. GDPR) szóló rendelkezéseket, a fogyasztóvédelmi törvényeket, az elektronikus kereskedelmet szabályozó irányelveket, valamint a kibertámadások elleni védelem követelményeit. Fontos számunkra, hogy a webhely minden tekintetben megfeleljen az OWASP webalkalmazás-biztonsági szabványainak, és az adatvédelem, valamint a felhasználói biztonság kiemelt prioritások legyenek a projekt során.

### 4. Jelenlegi Üzleti Folyamatok Modellje:

A jelenlegi üzleti folyamatok közé tartozik a termékfeltöltés, a rendelések kezelése, a fizetések feldolgozása és a felhasználói fiókok kezelése. Ezek a folyamatok jelenleg manuális műveletek, amelyek sok időt vesznek igénybe és emellett hajlamosak a hibákra.

![Jelenlegi üzleti folyamatok](/Abrak/jelenlegiuzleti.png)

### 5. Igényelt Üzleti Folyamatok Modellje:

Az új rendszernek kiemelten automatizálnia kell a termékfeltöltést, a rendelések kezelését, a fizetések feldolgozását és a felhasználói fiókok kezelését. Az üzleti folyamatoknak hatékonyabbá és gyorsabbá kell válniuk, miközben minimalizáljuk az emberi beavatkozás szükségességét. Az automatizálás révén az emberi hibák csökkentése és az üzleti folyamatok hatékonyságának növelése a fő célunk.

![Igényelt üzleti folyamatok](/Abrak/igenyeltuzleti.png)

### 6. Követelménylista:

#### Felhasználói Interfész Követelményei:

### Követelménylista

| Modul                                     | ID  | Név                                                                      | Verzió | Kifejtés                                                                                                                               |
| ----------------------------------------- | --- | ------------------------------------------------------------------------ | ------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| **Felhasználói Interfész Követelményei:** |     |                                                                          |        |                                                                                                                                        |
|                                           | 1   | **Reszponzív, felhasználóbarát dizájn**                                  | 1.0    | Az oldalnak reszponzívnak kell lennie, és különböző eszközökön és böngészőkben kell megfelelően működnie.                              |
|                                           | 2   | **Kategóriák és szűrési lehetőségek**                                    | 1.0    | A felhasználóknak könnyen kell tudniuk kategóriák között böngészni és szűrni a termékeket.                                             |
|                                           | 3   | **Egyszerű vásárlási folyamat és kosárkezelés**                          | 1.0    | A vásárlási folyamatnak egyszerűnek és zökkenőmentesnek kell lennie. A kosárban lévő termékeket könnyen kezelhetően kell tartalmaznia. |
|                                           | 4   | **Felhasználói fiókok kezelése**                                         | 1.0    | Bejelentkezési és regisztrációs lehetőségeknek egyszerűeknek és gyorsnak kell lenniük. A jelszavakat biztonságosan kell tárolni.       |
|                                           | 5   | **Adminisztrációs felület termékfeltöltéshez és rendelések kezeléséhez** | 1.0    | Az adminisztrátorok számára könnyű termékfeltöltési és rendeléskezelési folyamatok biztosítása.                                        |
| **Teljesítmény és Biztonság:**            |     |                                                                          |        |                                                                                                                                        |
|                                           | 6   | **Gyors betöltési idő és teljesítmény**                                  | 1.0    | A weboldalnak gyorsan kell betöltenie és reszponzívnak kell lennie, különböző eszközökön és böngészőkben.                              |
|                                           | 7   | **SSL titkosítás**                                                       | 1.0    | Az SSL titkosításnak biztosítania kell a biztonságos adatátvitelt a weboldalon.                                                        |
|                                           | 8   | **Felhasználói adatok biztonságos tárolása és kezelése**                 | 1.0    | A felhasználói adatokat biztonságosan kell tárolni és kezelni, megfelelve az adatvédelmi szabályozásoknak.                             |
| **Funkcionalitás:**                       |     |                                                                          |        |                                                                                                                                        |
|                                           | 9   | **Automatikus termékfeltöltési lehetőség CSV-fájlokból**                 | 1.0    | Az adminisztrátoroknak lehetőséget kell biztosítani a termékfeltöltésre CSV-fájlokból.                                                 |
|                                           | 10  | **Kosár mentése és visszatöltése a felhasználó fiókjában**               | 1.0    | A felhasználók kosárban lévő tételeinek mentése és visszatöltése.                                                                      |
|                                           | 11  | **Készletek és rendelések kezelése**                                     | 1.0    | Az adminisztrátoroknak egyszerűen kell tudniuk kezelni a készleteket és rendeléseket.                                                  |
|                                           | 12  | **Fizetési átjáró integrációk**                                          | 1.0    | A weboldalon különböző fizetési átjáróknak kell integrálódniuk, például bankkártya, PayPal stb.                                        |
|                                           | 13  | **Rendelési visszaigazolás és követési információk**                     | 1.0    | A felhasználóknak rendelési visszaigazolást kell kapniuk, és követniük kell a rendelésük állapotát.                                    |
| **Analitika és Riportok:**                |     |                                                                          |        |                                                                                                                                        |
|                                           | 14  | **Részletes eladási és felhasználói viselkedési riportok**               | 1.0    | A rendszernek lehetővé kell tennie a részletes eladási és felhasználói viselkedési riportok generálását.                               |
|                                           | 15  | **Felhasználói aktivitás nyomon követése és elemzése**                   | 1.0    | A felhasználói aktivitás nyomon követése és elemzése segíti az oldal optimalizálását és a felhasználói élmény javítását.               |
