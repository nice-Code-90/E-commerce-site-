# Tesztjegyzőkönyv

## Bevezetés

A tesztjegyzőkönyv célja a(z) E-Commerce Express projekt funkcióinak és moduljainak tesztelése. A tesztelés során különböző eseteket vizsgálunk meg, beleértve a felhasználói interfészt, adminisztrációs felületet, biztonsági intézkedéseket, és egyebeket.

# Sikeres Tesztek

## Teszteset 1: Bejelentkezés

### Leírás
Ez a teszteset ellenőrzi a felhasználó bejelentkezési folyamatát.

### Előfeltételek
- Az E-Commerce Express weboldala elérhető.
- A felhasználónak van regisztrált fiókja.

### Teszlépések
1. Nyissa meg a böngészőt és látogassa meg az E-Commerce Express weboldalt.
2. Kattintson a "Bejelentkezés" gombra.
3. Adja meg a regisztrált felhasználónevet és jelszót.
4. Kattintson a "Bejelentkezés" gombra.

### Várt Eredmények
- Sikeres bejelentkezés esetén a felhasználó átirányítódik a főoldalra.
- Sikertelen bejelentkezés esetén megjelenik egy hibaüzenet.

### Megjegyzések
- A jelszó megfelelő hosszúságú és karaktereket tartalmaz.
- A felhasználónév és jelszó kombinációja a rendszerben regisztrált felhasználóhoz tartozik.

## Teszteset 2: Termék Kosárba Helyezése

### Leírás
Ez a teszteset ellenőrzi a termék kosárba helyezési folyamatot.

### Előfeltételek
- A felhasználó már be van jelentkezve az E-Commerce Express weboldalra.
- A weboldalon elérhetők termékek.

### Teszlépések
1. Böngésszen a termékek között és válasszon ki egy terméket.
2. A termék részletes oldalán válassza ki a kívánt opciókat (méret, szín stb.).
3. Kattintson a "Kosárba Helyezés" gombra.

### Várt Eredmények
- A termék sikeresen hozzá lett adva a felhasználó kosarához.

### Megjegyzések
- A kosár tartalmazza a kiválasztott terméket és annak részleteit.
- A felhasználó vissza tudja nézni a kosarában található termékeket.

## Teszteset 3: Rendelés Leadása

### Leírás
Ez a teszteset ellenőrzi a rendelés leadási folyamatot.

### Előfeltételek
- A felhasználó már be van jelentkezve az E-Commerce Express weboldalra.
- A felhasználónak van termék a kosarában.

### Teszlépések
1. Menjen a kosár oldalra.
2. Ellenőrizze és módosítsa a kosár tartalmát szükség esetén.
3. Válassza ki a szállítási és fizetési opciókat.
4. Kattintson a "Rendelés Leadása" gombra.

### Várt Eredmények
- A rendelés sikeresen elküldve.
- A felhasználó kap egy rendelési visszaigazolást.

### Megjegyzések
- A rendelési visszaigazolás tartalmazza a rendelés részleteit és várható szállítási információkat.
- A felhasználó képes követni a rendelése állapotát.

#  Sikertelen Tesztek

## Sikertelen Bejelentkezés

### Leírás
Ez a teszteset ellenőrzi a sikertelen bejelentkezést, amikor a felhasználó hibás adatokat ad meg.

### Előfeltételek
- Az E-Commerce Express weboldala elérhető.
- A felhasználónak van regisztrált fiókja.

### Teszlépések
1. Nyissa meg a böngészőt és látogassa meg az E-Commerce Express weboldalt.
2. Kattintson a "Bejelentkezés" gombra.
3. Adjon meg érvénytelen felhasználónevet vagy jelszót.
4. Kattintson a "Bejelentkezés" gombra.

### Várt Eredmények
- Megjelenik egy hibaüzenet a sikertelen bejelentkezésről.

### Megjegyzések
- A felhasználónak nem sikerült bejelentkeznie az érvénytelen adatok miatt.
- Az E-Commerce Express visszautasítja a hibás bejelentkezési kísérletet.

## Sikertelen Termék Kosárba Helyezése

### Leírás
Ez a teszteset ellenőrzi a sikertelen termék kosárba helyezést, amikor a felhasználó hibásan próbálja hozzáadni a terméket.

### Előfeltételek
- A felhasználó már be van jelentkezve az E-Commerce Express weboldalra.
- A weboldalon elérhetők termékek.

### Teszlépések
1. Böngésszen a termékek között és válasszon ki egy terméket.
2. A termék részletes oldalán válassza ki a kívánt opciókat (méret, szín stb.).
3. Adjon meg hibás mennyiséget vagy opciókat.
4. Kattintson a "Kosárba Helyezés" gombra.

### Várt Eredmények
- Megjelenik egy hibaüzenet a sikertelen kosárba helyezésről.

### Megjegyzések
- A termék nem lett hozzáadva a kosárhoz az érvénytelen adatok miatt.
- Az E-Commerce Express visszautasítja a hibás kosárba helyezési kísérletet.

## Sikertelen Rendelés Leadása

### Leírás
Ez a teszteset ellenőrzi a sikertelen rendelés leadást, amikor a felhasználó hibásan próbálja elküldeni a rendelést.

### Előfeltételek
- A felhasználó már be van jelentkezve az E-Commerce Express weboldalra.
- A felhasználónak van termék a kosarában.

### Teszlépések
1. Menjen a kosár oldalra.
2. Ellenőrizze és módosítsa a kosár tartalmát szükség esetén.
3. Ne válassza ki a szállítási és fizetési opciókat.
4. Kattintson a "Rendelés Leadása" gombra.

### Várt Eredmények
- Megjelenik egy hibaüzenet a sikertelen rendelés leadásról.

### Megjegyzések
- A rendelés nem lett elküldve az érvénytelen adatok miatt.
- Az E-Commerce Express visszautasítja a hibás rendelés leadási kísérletet.
