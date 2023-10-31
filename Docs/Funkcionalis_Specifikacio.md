# Termék Neve: E-Commerce Express

### 1. Jelenlegi Helyzet Leírása:

Az E-Commerce Express jelenlegi verziója sajnos messze elmarad az elvárásoktól és piaci igényektől. A felhasználói élmény szinte használhatatlan, a webhely rendkívül lassú és nehezen kezelhető. Az adminisztrációs felület is bonyolult, és a termékek hatékony kezelése és a felhasználói adatok elemzése teljesen hiányzik.

### 2. Vágyálomrendszer Leírása:

Az E-Commerce Express ambiciózus célja egy modern, felhasználóbarát és hatékony e-commerce weboldal kifejlesztése. A fő cél az, hogy a felhasználók könnyedén böngészhessenek, termékeket válasszanak ki és vásároljanak. Az adminisztrátorok számára egy egyszerű termékfeltöltési folyamatot és hatékony kezelést kínálunk, emellett lehetőséget biztosítunk a felhasználói adatok elemzésére. A weboldalnak gyorsnak, biztonságosnak és reszponzívnak kell lennie, függetlenül attól, hogy milyen eszközön vagy böngészőben használják.

### 3. A Rendszerre Vonatkozó Pályázat, Törvények, Rendeletek, Szabványok és Ajánlások:

Az E-Commerce Express projekt során szorosan figyelembe vesszük az aktuális e-commerce vonatkozó jogszabályokat és szabályozásokat, ideértve a személyes adatok védelméről (pl. GDPR) szóló rendelkezéseket, a fogyasztóvédelmi törvényeket, az elektronikus kereskedelmet szabályozó irányelveket, valamint a kibertámadások elleni védelem követelményeit. Fontos számunkra, hogy a webhely minden tekintetben megfeleljen az OWASP webalkalmazás-biztonsági szabványainak, és az adatvédelem, valamint a felhasználói biztonság kiemelt prioritások legyenek a projekt során.

### 4. Jelenlegi Üzleti Folyamatok Modellje:

A jelenlegi üzleti folyamatok közé tartozik a termékfeltöltés, a rendelések kezelése, a fizetések feldolgozása és a felhasználói fiókok kezelése. Ezek a folyamatok jelenleg manuális műveletek, amelyek sok időt vesznek igénybe és emellett hajlamosak a hibákra.

![Jelenlegi üzleti folyamatok](/Abrak/funkspec_jelenlegiuzleti.png)

### 5. Igényelt Üzleti Folyamatok Modellje:

Az új rendszernek kiemelten automatizálnia kell a termékfeltöltést, a rendelések kezelését, a fizetések feldolgozását és a felhasználói fiókok kezelését. Az üzleti folyamatoknak hatékonyabbá és gyorsabbá kell válniuk, miközben minimalizáljuk az emberi beavatkozás szükségességét. Az automatizálás révén az emberi hibák csökkentése és az üzleti folyamatok hatékonyságának növelése a fő célunk.

![Igényelt üzleti folyamatok](/Abrak/funkspec_igenyeltuzleti.png)

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

### 6. Használati esetek:

1. Bejelentkezés:

Leírás:
A felhasználó bejelentkezik a rendszerbe azonosítás céljából.

Előfeltételek:
A felhasználónak rendelkeznie kell érvényes felhasználói fiókkal.

Utófeltételek:
A felhasználó bejelentkezett állapotba kerül.

2. Regisztráció:

Leírás:
A felhasználó új felhasználói fiókot hoz létre a rendszerben.

Előfeltételek:
A felhasználói fiókhoz érvényes adatokat kell megadni.

Utófeltételek:
Az új fiók létrejött a rendszerben.

3. Termékek böngészése:

Leírás:
A felhasználó lehetővé teszi a termékek böngészését, keresését és megtekintését.

Előfeltételek:
A felhasználó a webhelyre be van jelentkezve.

Utófeltételek:
A felhasználó látja a rendelkezésre álló termékeket és részleteket.

4. Termék kosárba helyezése:

Leírás:
A felhasználó egy vagy több terméket helyez a kosarába vásárlás céljából.

Előfeltételek:
A felhasználó be van jelentkezve, és termékeket választott ki.

Utófeltételek:
A kiválasztott termékek a felhasználó kosarában vannak.

5. Rendelés leadása:

Leírás:
A felhasználó befejezi a vásárlást és elküldi a rendelést.

Előfeltételek:
A felhasználó be van jelentkezve, és termékeket helyezett a kosarába.

Utófeltételek:
A rendelés elküldésre kerül, és a fizetési tranzakció folyamatban van.

![Igényelt üzleti folyamatok](/Abrak/funkspec_hasznalatiesetek.png)

### 7. Megfeleltetés

Ebben a fejezetben szemléltetjük, hogy a rendszer funkcionalitásai hogyan kapcsolódnak a követelményekhez.

#### 7.1 Követelménylista és Funkcionalitás Megfeleltetése

Az alábbi táblázat összeköti a követelményeket a megvalósított funkcionalitásokkal, hogy nyomon kövessük a megfeleltetést.

| Követelmény ID | Követelmény Leírása                                                  | Megvalósított Funkcionalitások                   |
| -------------- | -------------------------------------------------------------------- | ------------------------------------------------ |
| 1              | Reszponzív, felhasználóbarát dizájn                                  | Bejelentkezés, Regisztráció, Termékek böngészése |
| 2              | Kategóriák és szűrési lehetőségek                                    | Termékek böngészése                              |
| 3              | Egyszerű vásárlási folyamat és kosárkezelés                          | Termék kosárba helyezése, Rendelés leadása       |
| 4              | Felhasználói fiókok kezelése                                         | Bejelentkezés, Regisztráció                      |
| 5              | Adminisztrációs felület termékfeltöltéshez és rendelések kezeléséhez | -                                                |
| 6              | Gyors betöltési idő és teljesítmény                                  | Termékek böngészése                              |
| 7              | SSL titkosítás                                                       | -                                                |
| 8              | Felhasználói adatok biztonságos tárolása és kezelése                 | Bejelentkezés, Regisztráció                      |
| 9              | Automatikus termékfeltöltési lehetőség CSV-fájlokból                 | -                                                |
| 10             | Kosár mentése és visszatöltése a felhasználó fiókjában               | Termék kosárba helyezése                         |
| 11             | Készletek és rendelések kezelése                                     | Termék kosárba helyezése, Rendelés leadása       |
| 12             | Fizetési átjáró integrációk                                          | Rendelés leadása                                 |
| 13             | Rendelési visszaigazolás és követési információk                     | Rendelés leadása                                 |
| 14             | Részletes eladási és felhasználói viselkedési riportok               | -                                                |
| 15             | Felhasználói aktivitás nyomon követése és elemzése                   | -                                                |

#### 7.2 Megfeleltetési Jelölések

A megfeleltetési táblázatban a következő jelöléseket alkalmazzuk:

- ✓: Az adott funkcionalitás teljes mértékben lefedi a követelményt.
- -: Az adott funkcionalitás nem kapcsolódik a követelményhez.

### 8. Képernyőterv

![Képernyőterv](/Abrak/plan.png)

### 9. Forgatókönyv: Termék Vásárlás

**Szereplők:**
- Felhasználó (Ügyfél)
- E-Commerce Express weboldal

**Főcél:**
- A felhasználó kiválaszt és megvásárol egy terméket az E-Commerce Express weboldalon.

**Előfeltételek:**
- A felhasználó már be van jelentkezve az E-Commerce Express weboldalra.

**Folyamat:**
1. A felhasználó bejelentkezik az E-Commerce Express weboldalra a felhasználói fiókjával.
2. A felhasználó a weboldal főoldalára érkezik, ahol a legújabb és legnépszerűbb termékeket láthatja.
3. A felhasználó böngészi a kategóriákat, és megtalálja azt a terméket, amit meg szeretne vásárolni.
4. A felhasználó rákattint a kiválasztott termék képére vagy címére, hogy megtekintse a termék részleteit.
5. A termék oldalán a felhasználó részletes információkat talál a termékről, beleértve az árat, leírást, és képeket.
6. A felhasználó kiválasztja a termék mennyiségét és esetlegesen más opciókat (pl. méret, szín) a termék oldalán.
7. A felhasználó hozzáadja a terméket a kosarához, majd folytatja a böngészést, vagy a kosár oldalra navigál.
8. A kosár oldalon a felhasználó ellenőrzi a kosár tartalmát, és szükség esetén módosításokat végez (termékek eltávolítása vagy mennyiség módosítása).
9. A felhasználó kiválasztja a szállítási és fizetési lehetőségeket.
10. A felhasználó leadja a rendelést, és a rendszer továbbítja a fizetési tranzakciót a kiválasztott fizetési átjáró felé.
11. A felhasználó megkapja a rendelési visszaigazolást, amely tartalmazza a rendelés részleteit és a várható szállítási információkat.
12. A felhasználó követheti a rendelését az "Rendelés nyomon követése" funkció segítségével, amely tájékoztatja a rendelés állapotáról (feldolgozás alatt, szállítás alatt, stb.).
13. A vásárlás befejezése után a felhasználó visszatér a weboldal főoldalára vagy folytathat más vásárlásokat.

**Utófeltételek:**
- A felhasználó sikeresen megvásárolta a terméket és megkapta a rendelési visszaigazolást.
- A rendelés a megfelelő szállítási címre érkezik a megadott időben.

![Forgatókönyv](f/Abrak/orgatokonyv.png)

### 10. Fogalomszótár

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
