# Airvolt — site vitrine

Site vitrine statique pour **Airvolt**, une entreprise d'électricité, de climatisation, de chauffage (pompes à chaleur) et de photovoltaïque.

## Pages

- Présentation de l'entreprise
- Installation électrique et bornes de recharge
- Climatisation et traitement de l'air
- Chauffage et pompes à chaleur
- Photovoltaïque
- Contrats d'entretien et garanties
- Contact

## Stack

- HTML5 / CSS3, sans framework
- Favicons et `site.webmanifest` pour l'installation sur mobile
- Fichier `_headers` (Netlify / Cloudflare Pages) :
  - en-têtes de sécurité : `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`
  - politique de cache différenciée selon le type de fichier

## Lancer en local

Ouvrir `index.html` (ou n'importe quelle page) dans un navigateur, ou servir le dossier :

```bash
python3 -m http.server 8000
```

## Pistes d'amélioration

- Ajouter une `Content-Security-Policy` et `Strict-Transport-Security` dans `_headers`
- Remplacer `X-XSS-Protection` (obsolète) par la CSP
- Mutualiser les feuilles de style
