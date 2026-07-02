# Relaxialis — Thème Shopify

Thème Shopify pour la boutique **Relaxialis**, spécialisée dans la vente d'un masseur cervical EMS (impulsions + chaleur). Basé sur [Dawn](https://github.com/Shopify/dawn) v15.3.0 (thème officiel Shopify, licence dans `LICENSE.md`), enrichi de sections de conversion pensées pour un tunnel mono-produit alimenté par des publicités Meta.

## Ce qui a été ajouté à Dawn

### Identité de marque (`config/settings_data.json`)
- **Palette bien-être** : crème `#FDFBF7`, vert sauge `#ECF3EF`, vert profond `#1F4A42`, accent terracotta `#E2725B` (badges promo).
- **Typographie** : titres en Poppins SemiBold, texte en Nunito Sans.
- **Style** : boutons arrondis (pilule), cartes et médias à coins arrondis, panier en tiroir (drawer) pour limiter les sorties de tunnel.

### Sections personnalisées (préfixe `relax-`)
| Section | Rôle |
| --- | --- |
| `relax-benefits` | Grille de bénéfices avec icônes (EMS, chaleur, autonomie…) |
| `relax-steps` | « Comment ça marche » en étapes numérotées |
| `relax-stats` | Bandeau de chiffres clés |
| `relax-testimonials` | Avis clients avec étoiles et badge « Achat vérifié » |
| `relax-comparison` | Tableau comparatif Relaxialis vs alternatives |
| `relax-guarantee` | Bandeau garantie 30 jours satisfait ou remboursé |
| `relax-sticky-atc` | Barre d'ajout au panier collante sur la page produit |

Fichiers associés : `assets/relax.css`, `assets/relax-sticky-atc.js`, `snippets/relax-icon.liquid`, `snippets/relax-stars.liquid`.

### Pages pré-construites (copies 100 % originales, en français)
- **Accueil** (`templates/index.json`) : héro → bénéfices → problème/solution → étapes → chiffres clés → produit vedette → témoignages → comparatif → FAQ → garantie.
- **Page produit** (`templates/product.json`) : badge catégorie, liste d'arguments à puces, réassurance (livraison / retours / paiement), onglets (caractéristiques, livraison, garantie, utilisation), puis étapes, témoignages, FAQ, garantie et barre d'achat collante.
- **En-tête** : barre d'annonces rotative (livraison offerte, garantie 30 jours, paiement sécurisé).
- **Pied de page** : présentation de la marque, menu, contact, newsletter, moyens de paiement.

## Mise en route

1. **Installer le thème** : Boutique en ligne → Thèmes → Ajouter un thème → Importer un fichier zip (zippez ce dossier), ou utilisez `shopify theme push` avec la [CLI Shopify](https://shopify.dev/docs/themes/tools/cli).
2. **Créer le produit** dans Shopify (titre suggéré : *Relaxialis™ — Masseur cervical EMS*), avec photos, prix et prix barré (`compare_at_price`) pour afficher le badge promo.
3. **Associer le produit** : dans l'éditeur de thème, page d'accueil → section « Produit vedette » → sélectionner le produit.
4. **Ajouter les images** : héro de la page d'accueil et section problème/solution (photos lifestyle du produit porté).
5. **Menus** : renseigner `main-menu` et `footer` (Accueil, Produit, FAQ, Contact, CGV, mentions légales, politique de remboursement).
6. **Vérifier les caractéristiques techniques** (modes, intensités, autonomie) auprès de votre fournisseur AliExpress et ajuster l'onglet « Caractéristiques techniques » ainsi que les textes des sections.

## À savoir avant de lancer vos ads Meta

- **Avis clients** : les sections témoignages contiennent des textes d'exemple à remplacer par de **vrais avis**. Les faux avis et les fausses statistiques sont interdits par Meta et sanctionnés par la loi (pratiques commerciales trompeuses).
- **Allégations santé** : le copywriting fourni reste volontairement sur le terrain du bien-être (« détendre », « relâcher les tensions ») et évite les promesses médicales (soigner l'arthrose, remplacer un traitement…), rejetées par Meta dans la catégorie santé. Conservez cette prudence dans vos annonces.
- **Pixel Meta** : installez l'application « Facebook & Instagram » de Shopify pour le pixel et l'API Conversions — aucune modification du thème n'est nécessaire.
- **Pages légales** : créez les pages CGV, mentions légales, politique de confidentialité et de remboursement (Paramètres → Politiques) ; le pied de page les affiche automatiquement.

## Développement

```bash
shopify theme dev    # prévisualisation locale
shopify theme check  # linter officiel des thèmes
shopify theme push   # déploiement
```

La documentation Dawn d'origine reste valable pour tout le reste : [github.com/Shopify/dawn](https://github.com/Shopify/dawn).
