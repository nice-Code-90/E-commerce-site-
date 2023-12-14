### Tesztjegyzőkönyv

## Sikeres Tesztesetek

#### 1. Regisztráció Sikeres

- **Cselekvés:** A felhasználó sikeresen regisztrálja magát az E-Commerce Express weboldalán.
- **Várt Eredmény:** A rendszer sikeresen létrehozza az új felhasználói fiókot.
- **Megjegyzés:** A regisztrált felhasználó be tud jelentkezni és használni tudja a weboldalt.

#### 2. Termék Hozzáadása a Kosárhoz Sikeres

- **Cselekvés:** A felhasználó hozzáad egy terméket a kosarához.
- **Várt Eredmény:** A kiválasztott termék megjelenik a kosárban, és az összeg megfelelően frissül.
- **Megjegyzés:** A felhasználó sikeresen folytathatja a vásárlást vagy elindíthatja a fizetési folyamatot.

#### 3. Rendelés Véglegesítése Sikeres

- **Cselekvés:** A felhasználó sikeresen befejezi a rendelését, megad minden szükséges adatot, és kiválasztja a fizetési módot.
- **Várt Eredmény:** A rendszer rögzíti a rendelést, elküldi a visszaigazolást, és megjeleníti a rendelés státuszát.
- **Megjegyzés:** A felhasználó értesítést kap a sikeres rendelésről.

#### 4. Fizetési Módok Választása Sikeres

- **Cselekvés:** A felhasználó sikeresen választ egy fizetési módot (pl. bankkártya).
- **Várt Eredmény:** A rendszer megfelelően kezeli a fizetési adatokat, és a felhasználó láthatja a sikeres tranzakció visszaigazolását.
- **Megjegyzés:** A rendszer biztosítja a biztonságos fizetési tranzakciót.

#### 5. Visszajelzés Hozzáadása Sikeres

- **Cselekvés:** A felhasználó sikeresen hozzáad visszajelzést és értékelést egy vásárolt termékhez.
- **Várt Eredmény:** A visszajelzés megjelenik a termék oldalán, és az értékelés számít az átlagos értékelésbe.
- **Megjegyzés:** A visszajelzések segítenek más vásárlóknak információkat szerezni a termékről.

## Sikertelen Tesztesetek

#### 1. Regisztráció Sikertelen

- **Cselekvés:** A felhasználó rossz adatokat ad meg a regisztráció során.
- **Várt Eredmény:** A rendszer hibát jelez, és nem hozza létre a felhasználói fiókot.
- **Javítás:** A felhasználó hibás adatokat javít, és újra regisztrál.

#### 2. Termék Hozzáadása a Kosárhoz Sikertelen

- **Cselekvés:** A felhasználó egy nem létező terméket próbál a kosarába helyezni.
- **Várt Eredmény:** A rendszer észleli a hibát, és nem teszi hozzá a terméket a kosárhoz.
- **Javítás:** A felhasználót tájékoztatjuk, hogy a termék nem található, és választhat másikat.

#### 3. Rendelés Véglegesítése Sikertelen

- **Cselekvés:** A felhasználó nem tölti ki valamelyik kötelező mezőt a fizetési folyamat során.
- **Várt Eredmény:** A rendszer figyelmezteti a felhasználót, és nem engedi továbblépni a rendelési folyamatban.
- **Javítás:** A felhasználót arra kéri, hogy töltse ki a hiányzó információkat.

#### 4. Fizetési Módok Választása Sikertelen

- **Cselekvés:** A felhasználó próbál bankkártyával fizetni, de a kártya lejárt.
- **Várt Eredmény:** A rendszer visszautasítja a fizetést, és értesíti a felhasználót a lejárt kártyáról.
- **Javítás:** A felhasználót arra kéri, hogy adjon meg egy érvényes kártyát.

#### 5. Visszajelzés Hozzáadása Sikertelen

- **Cselekvés:** A felhasználó hosszú, értelmetlen visszajelzést próbál hozzáadni.
- **Várt Eredmény:** A rendszer észleli a túl hosszú szöveget, és nem engedi elmenteni a visszajelzést.
- **Javítás:** A felhasználót arra kéri, hogy adjon meg egy rövidebb visszajelzést.
