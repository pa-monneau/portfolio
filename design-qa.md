# QA visuelle — reprise de la maquette Portfolio

## Cible de comparaison

- Source visuelle : `../tmp/portfolio/design.dc.html`.
- Implémentation : `http://localhost:3000/`.
- Viewport de l'implémentation : 1280 × 720 CSS px, densité 1×.
- État : thème clair, page au repos après les animations d'entrée.

## Éléments vérifiés

- Composition : header fixe, hero pleine hauteur avec grille verticale et anneaux, sections centrées sur 1280 px, bande Projets en pleine largeur.
- Typographie : Space Grotesk pour les titres, Public Sans pour le corps et IBM Plex Mono pour les micro-libellés, comme dans l'export source.
- Sections : timeline du parcours, projets en grille 5/7 avec cadres d'aperçu, statuts, faits, tags et lien, puis contact.
- Interactions : navigation par ancres, CTAs et liens de contact conservés ; animations respectueuses de `prefers-reduced-motion`.

## Findings

- [P1] Comparaison visuelle côte à côte non réalisable dans cet environnement.
  - Evidence : le navigateur de QA autorise la capture de `localhost`, mais bloque l'ouverture de `file:///Users/pamonneau/jarvis-starter-kit/tmp/portfolio/design.dc.html`.
  - Impact : aucune validation pixel-à-pixel de l'export source ne peut être attestée ici.
  - Fix : fournir une capture PNG/JPG de la maquette ou une URL accessible au navigateur ; la capture pourra alors être comparée au même viewport.

## Historique

- Itération 1 : le code a été réaligné sur les dimensions et la structure explicites de l'export, puis validé par lint et build webpack.

## Résultat

final result: blocked
