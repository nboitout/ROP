# Récapitulatif de relecture — Chapitre 4 « Système nerveux autonome »

> Anomalies relevées lors de l'intégration des parties 1 à 4 (texte + illustrations).
> Aucune n'a bloqué l'intégration ; ce document sert d'aide-mémoire pour la relecture.

## 1. Corrections orthographiques / typographiques apportées au texte

Coquilles manifestes corrigées silencieusement pendant l'intégration :

| Partie | Source | Corrigé en |
|---|---|---|
| 1 | « nous **savons** vu l'importance » | « nous **avons** vu » |
| 1 | « Système érectile masculin et **fémini** » | « **féminin** » |
| 1 | « Nerf III (fissure orbitaire supérieure) **: :** » | un seul deux-points |
| 2 | « …dans le médiastin Ils sont destinés » | point manquant ajouté |
| 2 | « Elles **ralentissement** le rythme » | « Elles **ralentissent** » |
| 2 | « le Parasympathique **baisse de** débit cardiaque » | « baisse **le** débit » |
| 3a | « préserver l'intégrité**.et** les fonctions » | point parasite supprimé |
| 3b | « nerf de **François Franck** » | « **François-Franck** » |
| 3b | « la **cervicarthose** » | « **cervicarthrose** » |
| 4 | « Pr Guy **Lazortes** » (2 occurrences) | « **Lazorthes** » |
| 4 | « Cellules de **Caja** » | « Cellules de **Cajal** » |
| 4 | nerf splanchnique inférieur « ganglions **L11** et L2 » | « **L1** et L2 » |
| 4 | « nerfs **spanchniques** » | « **splanchniques** » |

Plus divers doubles espaces et espaces insécables nettoyés (ex. « Figure 4. 25 », « Figure 4. 27 »).

## 2. Numérotation des figures (à vérifier)

- **Collision sur « 4.41 »** (partie 4) : deux légendes portaient le même numéro — la figure du **Système nerveux intrinsèque** *et* celle des **Glandes surrénales**. Renumérotation des surrénales en **4.42** pour garder une suite unique. ⚠️ Dans le corps du texte, le renvoi aux surrénales dit encore « (figure 4.41) » — à harmoniser.
- **Légende « Figure 3.39 »** (partie 4) : coquille (numéro de chapitre faux) → rétablie en **« Figure 4.39 »**.
- **Figure 4.36 jamais fournie** : référencée dans le texte (plexus hypogastrique inférieur, parties 3a et 4) mais sans image correspondante. Conservée comme simple renvoi textuel — illustration manquante.
- **Légendes absentes dans le .docx** pour plusieurs figures (4.3, 4.12, 4.18, 4.29, 4.32, 4.38, 4.40) : légendes rédigées d'après le contexte. À valider en particulier :
  - **4.18** (« Territoire diaphragmatique du nerf vague X ») et **4.29** (« Chaîne ganglionnaire latéro-vertébrale thoracique ») — titres déduits, non issus du document.

## 3. Illustrations : contenu / qualité

- **Figure 4.41 (Système nerveux intrinsèque)** : l'image fournie est en réalité intitulée **« Anatomie des gaines myofasciales »** et porte une étiquette **« Fig. 2.5 »** incrustée (réutilisée d'un autre chapitre). Elle illustre bien la paroi intestinale avec les plexus myentérique et sous-muqueux, mais mériterait un schéma dédié au SNE.
- **Figure 4.12** : ce n'est pas un schéma annoté mais une **photo N&B d'un geste de palpation** (mains sur un pied). Cohérent avec le propos (zones réflexes podales), à confirmer.
- **figure-4-3.png** : remplacée par tes soins entre la partie 1 et la partie 2 (nouvelle version conservée).
- **Format des illustrations** : la majorité des figures étaient des **objets vectoriels EMF (diapositives PowerPoint embarquées)** que le navigateur n'affiche pas et que LibreOffice ne convertissait pas dans l'environnement. Elles ont été **rastérisées en PNG en extrayant le bitmap embarqué** de chaque EMF (Python/Pillow). Rendu vérifié visuellement sur un échantillon. Les **diapositives PowerPoint d'origine** (sources `.sldx` dans les `.docx`) restent la meilleure base pour d'éventuels exports HD ou traduits.

## 4. Renvois et références à compléter

- **« Cf. Chapitre Diaphragme, page… »** (partie 2) : numéro de page laissé en blanc → conservé sans pagination.
- **Renvois au livre « ROP et système neuro-méningé »** (p. 28-29, 34, 99…) : conservés tels quels.
- **Renvoi « (figure 4.2) »** en partie 3a (origine/trajet du parasympathique pelvien) : pointe vers le schéma crânien/pelvien de la partie 1 — possible coquille pour **« 4.23 »** (nerfs splanchniques pelviens). Laissé tel quel, à vérifier.
- **Renvois « figure 1.11 » (dermatome)** et **« figure 4.33 » cité en partie 2** avant son apparition (partie 3b) : cohérents au final, mais à re-vérifier après relecture complète.

## 5. Cohérence structurelle

- **« B. Parasympathique pelvien (ou sacral) »** (partie 3a) : le préfixe « B. » suppose un « A. » non numéroté ainsi. Préfixe retiré pour l'homogénéité des sous-titres.
- **Système nerveux entérique (SNE)** : la partie 1 renvoie à un **« Chapitre 9 Système nerveux entérique »**, alors que la partie 4 contient une **section SNE à part entière** dans le Chapitre 4. À clarifier (doublon possible entre chapitres).
- Renvois « Cf. Chapitre 5 Mécanisme de stress » et « Chapitre 6 Théorie polyvagale » : cohérents avec l'ouvrage.

## Points prioritaires

1. **Collision de numérotation 4.41 / 4.42** (et renvoi texte des surrénales).
2. **Figure 4.41 (SNE)** : illustration réutilisée d'un autre chapitre (« gaines myofasciales / Fig. 2.5 »).
3. **Figure 4.36** manquante.
